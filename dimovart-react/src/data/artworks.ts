export type ArtworkCategory =
  | 'watercolor'
  | 'oil'
  | 'still-life'
  | 'portrait'
  | 'europe'
  | 'florida'
  | 'fordham'

export type ArtworkItem = {
  title: string
  medium: string
  category: ArtworkCategory
  image: string
}

const watercolorImagePaths = [
  '/legacy/watercolor/page1/79-st-and-park-1-copytt.jpg',
  '/legacy/watercolor/page1/51st_Times_Square_OneDrive.jpg',
  '/legacy/watercolor/page1/79th_Street_and_5th_Av_OneDrive.jpg',
  '/legacy/watercolor/page1/81st_Street_and_5th_Av_OneDrive.jpg',
  '/legacy/watercolor/page1/American_Irish_Historical_Society_OneDrive.jpg',
  '/legacy/watercolor/page1/Broadway_and_17th_OneDrive.jpg',
  '/legacy/watercolor/page1/Central_Park_Poets_Walk.jpg',
  '/legacy/watercolor/page1/Metropolitan_Museum_of_Art_OneDrive.jpg',
  '/legacy/watercolor/page1/Metropolitan_Museum_of_Art_at_winter_OneDrive.jpg',
  '/legacy/watercolor/page1/Summer_Saturday_at_Central_Park.jpg',
  '/legacy/watercolor/page2/57th_St_and_5th_Av.jpg',
  '/legacy/watercolor/page2/81_St_and_Madison_Av_OneDrive.jpg',
  '/legacy/watercolor/page2/92nd_and_5_av_OneDrive.jpg',
  '/legacy/watercolor/page2/Belvedere_Castle_NYC_OneDrive.jpg',
  '/legacy/watercolor/page2/Central_Park_Bow_Bridge.jpg',
  '/legacy/watercolor/page2/Central_Park_Bow_Bridge_In_Fall_OneDrive.jpg',
  '/legacy/watercolor/page2/CentralParkSouth_OneDrive2.jpg',
  '/legacy/watercolor/page2/Flatiron.jpg',
  '/legacy/watercolor/page2/Union_Square_OneDrive.jpg',
  '/legacy/watercolor/page3/78th_Street_and_5th_Av_NYC.jpg',
  '/legacy/watercolor/page3/Bleecker_Street_OneDrive.jpg',
  '/legacy/watercolor/page3/Broom_Street.jpg',
  '/legacy/watercolor/page3/Central_Park_Bethresha_in_Spring_OneDrive.jpg',
  '/legacy/watercolor/page3/Central_Park_Plaza_Hotel.jpg',
  '/legacy/watercolor/page3/Central_Park_West_View.jpg',
  '/legacy/watercolor/page3/Central_Park_East_Side_Panorama.jpg',
  '/legacy/watercolor/page3/Lafayette_Street.jpg',
  '/legacy/watercolor/page3/NYC Library.jpg',
  '/legacy/watercolor/page3/Roofs_of_79th_Street.jpg',
  '/legacy/watercolor/page4/51st_Street_and_7th_Av_NYC.jpg',
  '/legacy/watercolor/page4/81st_and_5th_Av_the_Hotel.jpg',
  '/legacy/watercolor/page4/Brooklyn_Bridge_OneDrive.jpg',
  '/legacy/watercolor/page4/Children_Play_OneDrive.jpg',
  '/legacy/watercolor/page4/Dakota_from_Central_Park_OneDrive.jpg',
  '/legacy/watercolor/page4/Plaza_Hotel_Bridge_OneDrive.jpg',
  '/legacy/watercolor/page4/Rainy_Morning_NYC.jpg',
  '/legacy/watercolor/page4/Sunday_Morning_OneDrive.jpg',
  '/legacy/watercolor/page5/43rd_Street_NYC.jpg',
  '/legacy/watercolor/page5/Central_Park_Bridge.jpg',
  '/legacy/watercolor/page5/Central_Park_Ice_Skating.jpg',
  '/legacy/watercolor/page5/Central_Park_to_Girlfriends_OneDrive.jpg',
  '/legacy/watercolor/page5/End_Of_Summer.jpg',
  '/legacy/watercolor/page5/Horse_Carriage.jpg',
  '/legacy/watercolor/page5/Museum_Mile_OneDrive.jpg',
  '/legacy/watercolor/page5/West_79th_Street.jpg',
  '/legacy/watercolor/page5/Whinter_Play.jpg',
  '/legacy/watercolor/page6/79th_Street_bus_Stop.jpg',
  '/legacy/watercolor/page6/80th_and_5th.jpg',
  '/legacy/watercolor/page6/8th_Street_NYC.jpg',
  '/legacy/watercolor/page6/After_the_Rain.jpg',
  '/legacy/watercolor/page6/CentralParkAlley_OneDrive.jpg',
  '/legacy/watercolor/page6/CentralParkBoats.jpg',
  '/legacy/watercolor/page6/CentralParkGarden.jpeg',
  '/legacy/watercolor/page6/New_York_Building.jpg',
  '/legacy/watercolor/page6/Queensboro_Bridge_OneDrive.jpg',
  '/legacy/watercolor/page6/Statue_of_Liberty_at_Sunset.jpg',
  '/legacy/watercolor/page6/Whinter_Evening_in_Central_Park.jpg',
  '/legacy/watercolor/page6/Winter_Bridge_NYC_OneDrive.jpg',
  '/legacy/watercolor/page7/14thStUnionSq.jpeg',
  '/legacy/watercolor/page7/6th_Av_18St.jpg',
  '/legacy/watercolor/page7/79th_St_5Av.jpg',
  '/legacy/watercolor/page7/BridgeInFall.jpg',
  '/legacy/watercolor/page7/Saint_Patrick_and_5th_Av.jpg',
  '/legacy/watercolor/page7/Ukrainian_Council.jpg',
]

const oilImagePaths = [
  '/legacy/oil/5th_Av_Museum_Mile.jpg',
  '/legacy/oil/79_Street_and_5_Av.jpg',
  '/legacy/oil/Bow_Bridge.jpg',
  '/legacy/oil/Metropolitan_Museum_of_Arts.jpg',
  '/legacy/oil/Monteselo_NY.jpg',
]

const stillLifeImagePaths = [
  '/legacy/still/Cakes.jpg',
  '/legacy/still/Chinese_Roses.jpg',
  '/legacy/still/Red_Roses.jpg',
  '/legacy/still/Rose_Bud.jpg',
  '/legacy/still/Still_Life_With_Fruit.jpg',
  '/legacy/still/The_Old_Clock.jpg',
  '/legacy/still/Vintage.jpg',
  '/legacy/still/Yellow_Roses.jpg',
]

const portraitImagePaths = [
  '/legacy/portraits/portrait1.jpg',
  '/legacy/portraits/portrait2.jpg',
  '/legacy/portraits/portrait3.jpg',
  '/legacy/portraits/portrait4.jpg',
]

const europeImagePaths = [
  '/legacy/europe/basilica_di_san_marko.jpg',
  '/legacy/europe/campo_della_salute.jpg',
  '/legacy/europe/istanbul_galata.jpg',
  '/legacy/europe/istanbul_hagia_sofia.jpg',
  '/legacy/europe/istanbul_seascape.jpg',
  '/legacy/europe/Rialto_Bridge_Venice_OneDrive.jpg',
  '/legacy/europe/San_Marco_Venice_OneDrive.jpg',
  '/legacy/europe/sen_klerr_cathedral.jpg',
  '/legacy/europe/sen_klerr_panoram_cathedral.jpg',
  '/legacy/europe/sen_klerr_saut.jpg',
]

const europeTitleOverrides: Record<string, string> = {
  '/legacy/europe/basilica_di_san_marko.jpg': 'Basilica di San Marco',
  '/legacy/europe/campo_della_salute.jpg': 'Campo della Salute',
  '/legacy/europe/istanbul_galata.jpg': 'Istanbul Galata',
  '/legacy/europe/istanbul_hagia_sofia.jpg': 'Istanbul Hagia Sofia',
  '/legacy/europe/istanbul_seascape.jpg': 'Istanbul Seascape',
  '/legacy/europe/rialto_bridge_venice.jpg': 'Rialto Bridge Venice',
  '/legacy/europe/san_marko_venice.jpg': 'San Marco Venice',
  '/legacy/europe/sen_klerr_cathedral.jpg':
    'Basilique du Sacré-Cœur de Montmartre',
  '/legacy/europe/sen_klerr_panoram_cathedral.jpg':
    'Panorama de la Basilique du Sacré-Cœur de Montmartre',
  '/legacy/europe/sen_klerr_saut.jpg':
    'Basilique du Sacré-Cœur de Montmartre (Saut)',
}

const floridaImagePaths = [
  '/legacy/florida/deland.jpg',
  '/legacy/florida/Universal_Orlando.jpg',
]

const floridaTitleOverrides: Record<string, string> = {
  '/legacy/florida/deland.jpg': 'DeLand',
  '/legacy/florida/Universal_Orlando.jpg': 'Universal Orlando',
}

const watercolorTitleOverrides: Record<string, string> = {
  '/legacy/watercolor/page1/79-st-and-park-1-copytt.jpg':
    '79th Street Park Entrance',
  '/legacy/watercolor/page1/51st_Times_Square_OneDrive.jpg':
    '51st Times Square',
  '/legacy/watercolor/page1/Metropolitan_Museum_of_Art_OneDrive.jpg':
    'Met Steps',
  '/legacy/watercolor/page2/Flatiron.jpg': 'Flatiron',
  '/legacy/watercolor/page2/Belvedere_Castle_NYC_OneDrive.jpg':
    'Belvedere Castle NYC Sunset',
  '/legacy/watercolor/page2/CentralParkSouth_OneDrive2.jpg':
    'Central Park South',
  '/legacy/watercolor/page2/Central_Park_Bow_Bridge_In_Fall_OneDrive.jpg':
    'Central Park Bow Bridge in Fall',
  '/legacy/watercolor/page6/Winter_Bridge_NYC_OneDrive.jpg': 'Winter Bridge NYC',
  '/legacy/watercolor/page4/Plaza_Hotel_Bridge_OneDrive.jpg': 'Plaza Hotel Bridge',
  '/legacy/watercolor/page1/American_Irish_Historical_Society_OneDrive.jpg':
    'American Irish Historical Society',
  '/legacy/watercolor/page2/81_St_and_Madison_Av_OneDrive.jpg':
    '81 St and Madison Ave',
  '/legacy/watercolor/page4/Dakota_from_Central_Park_OneDrive.jpg':
    'Dakota from Central Park',
  '/legacy/watercolor/page3/Central_Park_East_Side_Panorama.jpg':
    'Central Park East Side Panorama',
}

const fordhamImagePaths = [
  '/legacy/fordham/project0_Fordham_Hall.jpg',
  '/legacy/fordham/project1_Fordham_Dealy_Hall_Door.jpg',
  '/legacy/fordham/project1_Fordham_Gymnasium.jpg',
  '/legacy/fordham/project1_Fordham_Keting.jpg',
  '/legacy/fordham/project2_Fordham.jpg',
  '/legacy/fordham/project2_Fordham_The_New_Library.jpg',
  '/legacy/fordham/project3_Fordham5.jpg',
  '/legacy/fordham/project3_Fordham_Panoramic.jpg',
  '/legacy/fordham/project3_Fordham_Queens_Court.jpg',
  '/legacy/fordham/project4_Fordham1.jpg',
  '/legacy/fordham/project4_Fordham2.jpg',
  '/legacy/fordham/project5_Fordham4.jpg',
]

const toTitle = (imagePath: string) =>
  imagePath
    .split('/')
    .pop()
    ?.replace(/\.[^.]+$/, '')
    .replace(/[_-]+/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\bWhinter\b/g, 'Winter')
    .replace(/\bMaddison\b/g, 'Madison')
    .replace(/\bBethresha\b/g, 'Bethesda')
    .replace(/\bMonteselo\b/g, 'Monticello')
    .replace(/\bOne\s*Drive\b/gi, '')
    .replace(/\bportrait\s*(\d+)\b/gi, 'Portrait $1')
    .replace(/^project\d+\s+/i, '')
    .replace(/\bxfordham\b/gi, 'Fordham')
    .replace(/([A-Za-z])(\d+)/g, '$1 $2')
    .replace(/\s+/g, ' ')
    .trim() ?? imagePath

export const galleryItems: ArtworkItem[] = [
  ...watercolorImagePaths.map((image) => ({
    title: watercolorTitleOverrides[image] ?? toTitle(image),
    medium: 'Watercolor',
    category: 'watercolor' as const,
    image,
  })),
  ...oilImagePaths.map((image) => ({
    title: toTitle(image),
    medium: 'Oil',
    category: 'oil' as const,
    image,
  })),
  ...stillLifeImagePaths.map((image) => ({
    title: toTitle(image),
    medium: 'Still Life',
    category: 'still-life' as const,
    image,
  })),
  ...portraitImagePaths.map((image) => ({
    title: toTitle(image),
    medium: 'Portrait',
    category: 'portrait' as const,
    image,
  })),
  ...europeImagePaths.map((image) => ({
    title: europeTitleOverrides[image] ?? toTitle(image),
    medium: 'Europe',
    category: 'europe' as const,
    image,
  })),
  ...floridaImagePaths.map((image) => ({
    title: floridaTitleOverrides[image] ?? toTitle(image),
    medium: 'Florida',
    category: 'florida' as const,
    image,
  })),
  ...fordhamImagePaths.map((image) => ({
    title: toTitle(image),
    medium: 'Fordham',
    category: 'fordham' as const,
    image,
  })),
]
