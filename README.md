# TESLAMS '26 Website – Static Project

This is a responsive HTML/CSS/JavaScript recreation of the TESLAMS symposium website, updated for TESLAMS '26.

## Files
- `index.html` – page structure and content
- `style.css` – the white graph-paper/purple visual system, layered glass surfaces, touch-friendly phone layouts, polished shine effects and fluid responsive navigation
- `script.js` – adaptive hero effects, event-card flips, committee filters, cached scroll metrics, responsive floating navigation and animated contact interaction

## Run
Just open `index.html` in a browser.

For best results with local development:
1. Open the folder in VS Code.
2. Install the Live Server extension, or run any simple static server.
3. Open `index.html`.

## Important
The logo, robot, event posters and committee photography are stored locally under `assets/images/`. The live page uses lightweight WebP copies under `assets/images/optimized/` for faster loading and smoother scrolling, while the original uploaded images remain untouched in their original folders.

Mobile and touch devices automatically use fewer decorative particles and a CSS-only hero grid. Background-tab animations pause automatically. The full interactive grid remains enabled on desktop devices with a fine pointer.

The Google Form, Google Map and Instagram link still require an internet connection because they are external services.

All registration buttons open the official TESLAMS '26 Google Form in a new tab. The shared URL is stored in the `REGISTRATION_URL` value near the top of `script.js`, with matching fallback links in `index.html`.

The contact form prepares an email to `eeeteslams@gmail.com`; the visitor must send that email from their email application.

Brochure controls are reserved for Robo Race, Robo Soccer, Ampere Arena and Paper Presentation only. Robo Race, Ampere Arena and Paper Presentation currently open their local PDFs; Robo Soccer continues to show a short “coming soon” message until its brochure is supplied. The filenames are documented in `assets/brochures/README.md`.

Media Team and Snacks Committee cards are ready for student photos. Add their names and image paths to `supportTeamMembers` in `script.js`; the expected folder structure is documented in `assets/images/support/README.md`.

This is an independently rebuilt front end. It does not contain the original site's private source code, backend, database, admin panel or deployment configuration.
