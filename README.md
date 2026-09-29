# Bancada Mecatrônica (Mechatronics Workbench)

🇧🇷 [Leia em português](README.pt-BR.md)

A free, single-page toolbox for the workshop and the maintenance shop: calculators, guides, reference tables, simulators and **19 animated 3D machines** covering machining, electrical work, pneumatics, hydraulics and Arduino/ESP32.

It runs in any modern browser, needs **no installation, no account and no server**, and can be used **offline**.

> The interface is in Brazilian Portuguese.

## What is inside

| Area | Highlights |
|---|---|
| **Workshop** | Lathe, milling, CNC, drill press and band saw · cutting speed, feed and RPM · cutting parameters by material · material weight · machining cost · tapered turning · ISO 286 fits and tolerances · thread tables · bolt torque · gears and pulleys · G-code generators (bolt circle, face, pocket, drilling) · **G-code viewer** · maintenance planner, work orders and tool life · process sheet (print or PDF) · glossary |
| **Electrical** | Ohm's law and basic circuits · three-phase power and cable sizing · motor starting (breaker, contactor, relay, cable) · power factor correction · voltage drop · 4–20 mA and 0–10 V · PT100 and thermocouples · NPN/PNP wiring · encoder and inverter · **ladder simulator** · wave, RC and star-delta animations |
| **Pneumatics** | Cylinder force, speed and air consumption · valve Kv · compressor and tank · vacuum cups · ISO 1219 symbols · sequence and **electro-pneumatic simulators** |
| **Hydraulics** | Cylinder force, speed and flow · pump and motor power · hydraulic motor · accumulator · hose pressure drop · tank sizing · ISO VG oils |
| **Arduino / ESP32** | Pinout and protocols (I2C, SPI, UART) · code generator (LED, stepper motor, HC-SR04, web server, MQTT and more) · C/C++ notes · live serial plot · **PID simulator** |
| **3D models** | Lathe, machining center, milling machine, CNC lathe, drill press, surface grinder, band saw, gantry router, 3D printer, cartesian robot, robot arm, hydraulic press, gear pump, gearbox, piston compressor, three-phase motor, servo motor, electrical panel and double-acting cylinder |

Every 3D model has a short caption plus **"How it works"** and **"Where it is used in industry"** texts, part **labels**, an **exploded view**, pause and reset controls, and a gallery with thumbnails.

Around 190 cards in total, including quizzes and a 15-question mock exam with a grade.

## Features

- Home page with shortcuts, favourites and recent calculations
- Full-text search across all cards, accent-insensitive
- Favourites, calculation history and shareable links that open a calculator with the values filled in
- Light and dark themes; millimetres or inches
- Copy result buttons, printable layout
- Data export and import (a JSON backup)
- Installable as an app (PWA) and usable offline

## How it works

- **One HTML file.** `index.html` contains all the content, styles and JavaScript. No build step, no framework, no package manager.
- **Data stays on your device.** Favourites, history, checklists, maintenance and settings are saved in the browser's `localStorage`. Nothing is sent to any server.
- **3D models** are built in code with [three.js](https://threejs.org/) (r128). The library is loaded from `three.min.js` next to the page, with the public CDN as a fallback.
- **Offline mode** uses a service worker (`sw.js`) that keeps the files in the browser cache.

## Files

| File | Purpose |
|---|---|
| `index.html` | The whole application |
| `sw.js` | Service worker (offline cache) |
| `manifest.webmanifest` and `icon.svg` | Make the page installable as an app |
| `three.min.js` | *(optional, you download it)* local copy of three.js for fully offline 3D |
| `LICENSE` | MIT license |
| `README.md`, `README.pt-BR.md` | This documentation |

## Download

**Option A. From GitHub** (if the project is published there)
1. Open the repository page, click **Code → Download ZIP** and unzip it.
2. Or clone it: `git clone <repository-url>`.

**Option B. By hand**
Save `index.html`, `sw.js`, `manifest.webmanifest` and `icon.svg` in the same folder (add `LICENSE` and the READMEs if you like).

## Quick start

Double-click `index.html`. The calculators, guides and simulators work right away. The 3D models need `three.js` (see below).

## Using it offline

**1. Simplest: open the file, no installation**
1. Download [three.min.js](https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js) (right-click → *Save link as…*) and save it as `three.min.js` in the **same folder** as `index.html`.
2. Double-click `index.html`. Everything, including the 3D models, now works without internet.

**2. Install as an app on your computer**
1. Open a terminal in the project folder and run: `python -m http.server 8000` (on Mac/Linux: `python3`).
2. Open `http://localhost:8000` in Chrome or Edge.
3. Click the **install** icon in the address bar. After the first load the app also opens offline.

**3. Install on your phone**
1. Publish the folder on any HTTPS host (for example GitHub Pages or Netlify).
2. Open the address in Chrome (Android) or Safari (iOS) and choose **Install app / Add to Home Screen**.
3. Open a 3D model once while online so the browser stores `three.js`; after that it works offline.

> Browsers keep data **per address**. `file://`, `localhost` and a website each have their own favourites and history. Use **Export data / Import data** at the top of the page to move them.

## Limitations

- Values in tables and calculators are typical or approximate. Check them against manufacturer data and standards before you rely on them. This is especially true for component sizing and anything related to safety.
- Always simulate generated G-code before running it on a machine.
- The 3D models are didactic drawings, not manufacturer CAD.

## Credits and license

Released under the [MIT License](LICENSE). Copyright (c) 2026 Thiagosystems.
3D rendering uses [three.js](https://threejs.org/) (MIT), which is not included in this repository.
