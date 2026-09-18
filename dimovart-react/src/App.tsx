import { useEffect, useMemo, useState } from 'react'
import { Link, NavLink, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import { galleryItems, type ArtworkCategory } from './data/artworks'

type GalleryCategory = 'all' | ArtworkCategory

const splashImages = [
  '/assets/79-st-and-park-1-copytt.jpg',
  '/assets/letnite-lodki-starite3.jpg',
  '/assets/Central_Park_Bow_Bridge.jpg',
  '/assets/80th_and_5th.jpg',
  '/assets/CentralParkSouth.jpeg',
]

const getPurchaseLink = (itemName: string) => {
  const params = new URLSearchParams({
    add: '1',
    cmd: '_cart',
    business: 'gdimovny@aol.com',
    item_name: itemName,
    amount: '85.00',
    shipping: '7',
    no_shipping: '2',
    return: 'http://www.dimovart.com',
    no_note: '1',
    currency_code: 'USD',
  })

  return `https://www.paypal.com/cgi-bin/webscr?${params.toString()}`
}

function HomePage() {
  const [splashIndex, setSplashIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSplashIndex((index) => (index + 1) % splashImages.length)
    }, 4500)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="home-page">
      <section className="splash">
        {splashImages.map((image, index) => (
          <img
            key={image}
            src={image}
            alt=""
            aria-hidden="true"
            className={index === splashIndex ? 'splash-image active' : 'splash-image'}
          />
        ))}
        <div className="splash-overlay">
          <h1>GEORGI DIMOV</h1>
          <p>Artist · Watercolor · Oil</p>
        </div>
      </section>
      <nav className="home-links">
        <Link to="/artworks">ARTWORKS</Link>
        <Link to="/about">BIO</Link>
        <Link to="/contact">CONTACT</Link>
      </nav>
    </section>
  )
}

function PageHeader() {
  return (
    <header className="page-header">
      <Link className="page-title" to="/">
        GEORGI DIMOV
      </Link>
      <nav className="page-nav">
        <NavLink to="/artworks">ARTWORKS</NavLink>
        <NavLink to="/about">BIO</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>
      </nav>
    </header>
  )
}

function ArtworksPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('watercolor')
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null)
  const filterOptions: Array<{ value: GalleryCategory; label: string }> = [
    { value: 'all', label: 'ALL' },
    { value: 'watercolor', label: 'WATERCOLOR' },
    { value: 'oil', label: 'OIL' },
    { value: 'still-life', label: 'STILL LIFE' },
    { value: 'portrait', label: 'PORTRAITS' },
    { value: 'europe', label: 'EUROPE' },
    { value: 'florida', label: 'FLORIDA' },
    { value: 'fordham', label: 'FORDHAM' },
  ]

  const filteredGallery = useMemo(
    () =>
      activeCategory === 'all'
        ? galleryItems
        : galleryItems.filter((item) => item.category === activeCategory),
    [activeCategory],
  )

  useEffect(() => {
    if (activeImageIndex === null || filteredGallery.length === 0) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveImageIndex(null)
      } else if (event.key === 'ArrowRight') {
        setActiveImageIndex((index) =>
          index === null ? index : (index + 1) % filteredGallery.length,
        )
      } else if (event.key === 'ArrowLeft') {
        setActiveImageIndex((index) =>
          index === null
            ? index
            : (index - 1 + filteredGallery.length) % filteredGallery.length,
        )
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [activeImageIndex, filteredGallery.length])

  return (
    <>
      <PageHeader />

      <main>
        <section>
          <div className="section-header">
            <div className="filters">
              {filterOptions.map((option) => (
                <button
                  key={option.value}
                  className={activeCategory === option.value ? 'active' : ''}
                  onClick={() => {
                    setActiveCategory(option.value)
                    setActiveImageIndex(null)
                  }}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div className="gallery-grid">
            {filteredGallery.map((item, index) => (
              <article
                key={`${item.category}-${item.image}`}
                className="gallery-card"
                onClick={() => setActiveImageIndex(index)}
              >
                <img src={encodeURI(item.image)} alt={item.title} />
                <div className="gallery-meta">
                  <h3>{item.title}</h3>
                  <p>{item.medium}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {activeImageIndex !== null && filteredGallery[activeImageIndex] ? (
        <div className="lightbox" onClick={() => setActiveImageIndex(null)}>
          <div className="lightbox-panel" onClick={(event) => event.stopPropagation()}>
            <button className="close" onClick={() => setActiveImageIndex(null)}>
              ×
            </button>
            <img
              src={encodeURI(filteredGallery[activeImageIndex].image)}
              alt={filteredGallery[activeImageIndex].title}
            />
            <p>
              {filteredGallery[activeImageIndex].title} —{' '}
              {filteredGallery[activeImageIndex].medium}
            </p>
            {filteredGallery[activeImageIndex].category === 'watercolor' ? (
              <a
                className="purchase-link"
                href={getPurchaseLink(filteredGallery[activeImageIndex].title)}
                target="_blank"
                rel="noreferrer"
              >
                Buy Print Online (16x20 inches)
              </a>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  )
}

function AboutPage() {
  return (
    <>
      <PageHeader />
      <main>
        <section className="detail-block">
          <h2>BIO</h2>
          <p>
            At this moment Georgi Dimov lives at 3225 Johnson Ave Apt 3A Bronx,
            NY 10463.
          </p>
          <br></br>
          <div className="bio-grid">
            <div>
              <h2>EXPERIENCE</h2>
              <ul>
                <li>
                  1979 - International Group Show &quot;Children for Peace&quot;,
                  Shipka 6 Gallery, Sofia, Bulgaria
                </li>
                <li>1980 - One Man Show, Kardjali, Bulgaria</li>
                <li>
                  1992 - One Man Show &ldquo;Eastern Ritual Painting Tries To Bring
                  the World Beyond Into Reality&rdquo;, Stainhagen, Germany
                </li>
                <li>1992 - Group Show, Versmold, Germany</li>
                <li>
                  1992 - International Exhibition &ldquo;Artists for Europe&rdquo;,
                  Town Hall, Aachen, Germany
                </li>
                <li>1993 - International Exhibition, Sofia, Bulgaria</li>
                <li>
                  1998 - Group Show &ldquo;Art from Heart&rdquo;, Ward Nasse Gallery,
                  New York, NY, USA
                </li>
                <li>
                  2000 - One Man Show &ldquo;Landscapes&rdquo;, Bulgarian Consulate,
                  New York, NY, USA
                </li>
                <li>
                  2003 - Group Show &ldquo;A New Beginning&rdquo;, The Artists
                  Gallery, New York, NY, USA
                </li>
                <li>2013 - 2020 - Owned Ditra Gallery with Rene Melcor</li>
              </ul>
            </div>

            <div>
              <h2>EDUCATION</h2>
              <ul>
                <li>1976 School of Fine Art G.Dimitrov, Kardjali, Bulgaria</li>
                <li>
                  1991 Student in Art Restoration Work Shop, Johannes Didinghoff,
                  Diessen, Germany
                </li>
                <li>1996 Graduated From The National Art Academy - Sofia</li>
                <li>
                  1999 Student - Art Restoration Work Shop Anton Rusev, New York,
                  NY
                </li>
                <li>
                  2000 Student at Art Student League - Ronald Sheer, Irwin
                  Greenberg
                </li>
                <li>
                  2003 Student at National Academy of Design, School of Fine Arts
                  Sharon Sprung, Elizabeth O&rsquo;Reily, David Dewey, Michele Li
                  Calsi
                </li>
              </ul>
              <h2>MEMBERSHIP & AWARDS</h2>
              <ul>
                <li>1996 Union of Bulgarian Artists</li>
                <li>2002 Official Fordham University Artist</li>
                <li>2002 North West Watercolor Society</li>
                <li>2014 Salmagundi Club NY, est. 1871</li>
                <li>Recipient of many awards</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

function ContactPage() {
  return (
    <>
      <PageHeader />
      <main>
        <section className="detail-block">
          <h2>CONTACT</h2>
          <p>3225 Johnson Ave Apt 3A, Bronx, NY 10463</p>
          <p>+1 646 244 9647</p>
          <p>
            <a href="mailto:gdimovny@aol.com">gdimovny@aol.com</a>
          </p>
        </section>
      </main>
    </>
  )
}

function App() {
  const location = useLocation()
  const isHomeRoute = location.pathname === '/'

  return (
    <div className={isHomeRoute ? 'site-shell home-route' : 'site-shell'}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/artworks" element={<ArtworksPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default App
