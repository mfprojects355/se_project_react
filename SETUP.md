# WTWR — Setup Guide (New Laptop)

Use this guide when setting up the project on a **new Windows laptop** from scratch.

---

## Part 1 — Install software (one-time)

### 1. Git

Download and install: https://git-scm.com/download/win

Use the default options during installation.

Verify in **Command Prompt** or **PowerShell**:

```bash
git --version
```

---

### 2. Node.js (includes npm)

Download the **LTS** version: https://nodejs.org

Run the installer and accept the default options.

Verify:

```bash
node -v
npm -v
```

You should see version numbers (for example `v20.x.x` and `10.x.x`).

---

### 3. VS Code (recommended)

Download: https://code.visualstudio.com

Open the project folder in VS Code and use **Terminal → New Terminal** and **Split Terminal** to run both servers side by side.

---

## Part 2 — Get the project on the laptop

### Option A — Clone from GitHub

```bash
git clone https://github.com/mfprojects355/se_project_react.git
cd se_project_react
```

Replace the URL with your repository URL if it is different.

### Option B — Copy the folder

Copy the entire `se_project_react` folder to the laptop (USB drive, cloud storage, etc.), then open a terminal in that folder:

```bash
cd C:\Users\YourName\Desktop\se_project_react
```

---

## Part 3 — Install project dependencies (one-time)

Inside the project folder, run:

```bash
npm install
```

Wait until it finishes. This creates the `node_modules` folder.

---

## Part 4 — Run the project (every time)

This project needs **two terminals** running at the same time.

### Terminal 1 — Mock API server

The clothing items come from `db.json` through json-server.

```bash
cd path\to\se_project_react
npm run server
```

Keep this terminal open. You should see output similar to:

```text
Resources
http://localhost:3001/items
```

### Terminal 2 — React app

Open a **new** terminal window:

```bash
cd path\to\se_project_react
npm run dev
```

The app should open in your browser at:

```text
http://localhost:3000/se_project_react/
```

---

## Part 5 — Weather API (if weather does not load)

Open this file:

`src/utils/constants.js`

Make sure you have a valid OpenWeatherMap API key:

```js
export const apiKey = "your-openweathermap-key";
```

Get a free key here: https://openweathermap.org/api

You can also update `weatherCity`, `latitude`, and `longitude` in the same file.

---

## Quick checklist

| Step | Action | Done? |
| ---- | ------ | ----- |
| 1 | Install Git | ☐ |
| 2 | Install Node.js LTS | ☐ |
| 3 | Install VS Code | ☐ |
| 4 | Clone or copy the project folder | ☐ |
| 5 | `cd se_project_react` | ☐ |
| 6 | `npm install` | ☐ |
| 7 | Terminal 1: `npm run server` | ☐ |
| 8 | Terminal 2: `npm run dev` | ☐ |
| 9 | App opens in the browser | ☐ |

---

## All commands in one place

```bash
# First time only
git clone https://github.com/mfprojects355/se_project_react.git
cd se_project_react
npm install

# Every time you run the app
# Terminal 1:
npm run server

# Terminal 2:
npm run dev
```

---

## Useful npm scripts

| Command | Description |
| ------- | ----------- |
| `npm run dev` | Start the React development server |
| `npm run server` | Start json-server on port 3001 |
| `npm run build` | Create a production build |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |
| `npm run preview` | Preview the production build |

---

## Troubleshooting

| Problem | Solution |
| ------- | -------- |
| `'node' is not recognized` | Install Node.js, then restart the terminal |
| `'npm' is not recognized` | Reinstall Node.js (npm is included with Node) |
| `'git' is not recognized` | Install Git, then restart the terminal |
| No clothing items on the page | Start Terminal 1 with `npm run server` first |
| Weather data does not load | Check the API key in `src/utils/constants.js` |
| Port already in use | Close other apps or terminals using ports 3000 or 3001 |

---

## Before submitting the project

```bash
npm run lint
npm run build
npm run format
```

Make sure both `npm run server` and `npm run dev` work before recording your project pitch video.
