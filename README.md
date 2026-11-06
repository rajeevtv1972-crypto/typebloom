# TypeBloom

A browser-based typing practice and learning site.

## Main pages

- `/` — Homepage and short live typing demo.
- `/typing` — Progressive practice, daily challenge, WPM/CPM tests, custom text mode, result cards, progress dashboard, backups, goals and keyboard heatmap.
- `/learn` — Guide to WPM, CPM, accuracy and practice technique.
- `/lessons` — Interactive touch-typing lessons with a visual keyboard.
- `/about`, `/contact`, and `/privacy-policy` — Site information and policy pages.

## Progress data

Progress is stored locally in the browser under `typebloom-progress-v2`. Users can export a JSON backup and import it later. Custom passage text is used for the active session and is not written into session history. No account or server-side progress service is required.

## Deployment

The site is static and designed for Cloudflare Pages. Shared styles are in `styles.css`; typing logic is in `app.js`; added progress tools are in `features.js`; and touch-typing lessons are in `lessons.js`.
