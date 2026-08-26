# DimovArt React Revamp

Modern React + TypeScript rebuild of the legacy DimovArt website.

## Included in this first version

- Home, Bio, Gallery, and Contact sections
- Responsive layout for desktop/tablet/mobile
- Gallery category filters
- Lightbox viewer (click image, Esc to close, left/right arrows to navigate)
- Light and dark mode toggle

## Run locally

```bash
cd dimovart-react
npm install
npm run dev
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## HostPapa cPanel deployment

If the server cannot run builds, build locally and deploy the generated
`dimovart-react/dist/` folder from the branch cPanel tracks.

```bash
npm run build
```

The root [`.htaccess`](/Users/todordimov/Downloads/2024DimovArt/.htaccess)
rewrites the domain to the React build, and
[`public/.htaccess`](./public/.htaccess) supports direct access to the build
folder on Apache/cPanel.
