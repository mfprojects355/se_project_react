# WTWR — What to Wear?

A React app that shows the current weather for a city and recommends clothing items that match the temperature (hot, warm, or cold). You can browse items, open item details in a modal, and add your own garments.

**Author:** Mohammad Farid

## Tech stack

- React 18
- Vite
- CSS (BEM)

## Getting started

```bash
npm install
npm run dev
```

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Start dev server         |
| `npm run build`| Production build         |
| `npm run lint` | Run ESLint               |
| `npm run preview` | Preview production build |

## Weather API

Set your OpenWeatherMap API key in `src/utils/constants.js`. Update `weatherCity`, `latitude`, and `longitude` for your location.

## Project structure

```
src/
├── components/     # UI components (App, Header, Main, modals, cards)
├── utils/          # API helpers, constants, default clothing items
├── assets/         # Images and icons
└── vendor/         # normalize.css and fonts
```
