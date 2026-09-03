# TESLAMS '26 Website – Static Project

This is a responsive HTML/CSS/JavaScript recreation of the TESLAMS symposium website, updated for TESLAMS '26.

## Files
- `index.html` – page structure and content
- `style.css` – the white graph-paper/purple visual system, polished shine effects, responsive navigation and motion
- `script.js` – interactive hero grid and sparks, event-card flips, committee filters, scroll progress, responsive floating navigation and animated contact interaction

## Run
Just open `index.html` in a browser.

For best results with local development:
1. Open the folder in VS Code.
2. Install the Live Server extension, or run any simple static server.
3. Open `index.html`.

## Important
The logo, robot, event posters and committee photography are stored locally under `assets/images/`. The live page uses lightweight copies under `assets/images/optimized/` for faster loading and smoother scrolling, while the original uploaded images remain untouched in their original folders.

The Google Form, Google Map and Instagram link still require an internet connection because they are external services.

All registration buttons open the official TESLAMS '26 Google Form in a new tab. The shared URL is stored in the `REGISTRATION_URL` value near the top of `script.js`, with matching fallback links in `index.html`.

The contact form prepares an email to `amseeesymposium@gmail.com`; the visitor must send that email from their email application.

Brochure controls are reserved for Robo Race, Robo Soccer, Ampere Arena and Paper Presentation only. Their expected PDF filenames are documented in `assets/brochures/README.md`; until those files are supplied, the controls show a short “coming soon” message.

This is an independently rebuilt front end. It does not contain the original site's private source code, backend, database, admin panel or deployment configuration.
