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

If the server cannot run builds, build locally and deploy the generated `dist/`
folder from the branch cPanel tracks.

```bash
npm run build
```

Then push the built `dist/` files along with the app source. The included
[`public/.htaccess`](./public/.htaccess) supports React Router refreshes on
Apache/cPanel.
