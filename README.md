# TESLAMS '26 Website – Static Project

This is a responsive HTML/CSS/JavaScript recreation of the TESLAMS symposium website, updated for TESLAMS '26.

## Files
- `index.html` – page structure and content
- `style.css` – the white graph-paper/purple visual system, polished shine effects, responsive navigation and motion
- `script.js` – interactive hero grid, event-card flips, committee filters, resizable floating navigation and animated contact interaction

## Run
Just open `index.html` in a browser.

For best results with local development:
1. Open the folder in VS Code.
2. Install the Live Server extension, or run any simple static server.
3. Open `index.html`.

## Important
The logo, robot, event posters and committee photography are stored locally under `assets/images/`. They no longer depend on the original TESLAMS website and will work offline.

The Google Form, Google Map and Instagram link still require an internet connection because they are external services.

All registration buttons currently open a temporary TESLAMS Google Form in a new tab. When the official 2026 form is ready, replace the `REGISTRATION_URL` value near the top of `script.js` and the matching fallback links in `index.html`.

The contact form prepares an email to `amseeesymposium@gmail.com`; the visitor must send that email from their email application.

The event brochure buttons currently show a short “coming soon” message because no public 2026 brochure files are available yet.

This is an independently rebuilt front end. It does not contain the original site's private source code, backend, database, admin panel or deployment configuration.
