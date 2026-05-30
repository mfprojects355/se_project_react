# WTWR — What to Wear?

A React app that shows the current weather for a city and recommends clothing items that match the temperature (hot, warm, or cold). You can browse items, open item details in a modal, add garments, and delete them from your profile.

**Author:** Mohammad Farid

**Live demo:** [https://mfprojects355.github.io/se_project_react](https://mfprojects355.github.io/se_project_react)

## Tech stack

- React 18
- Vite
- React Router
- json-server (mock API)
- CSS (BEM)

## Getting started

Run **two terminals**:

```bash
# Terminal 1 — mock API (required for clothing items)
npm run server

# Terminal 2 — React app
npm install
npm run dev
```

The mock server reads `db.json` in the project root at `http://localhost:3001`.

## Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start Vite dev server                    |
| `npm run server`  | Start json-server on port 3001           |
| `npm run build`   | Production build                         |
| `npm run lint`    | Run ESLint                               |
| `npm run format`  | Format code with Prettier                |
| `npm run preview` | Preview production build                 |

## Weather API

Set your OpenWeatherMap API key in `src/utils/constants.js`. Update `weatherCity`, `latitude`, and `longitude` for your location.

## Project structure

```
db.json             # Mock clothing items database
src/
├── components/     # UI components (App, Header, Main, Profile, modals, cards)
├── contexts/       # CurrentTemperatureUnitContext
├── hooks/          # useForm
├── utils/          # api.js, constants.js, weatherApi.js
├── assets/         # Images and icons
└── vendor/         # normalize.css and fonts
```
