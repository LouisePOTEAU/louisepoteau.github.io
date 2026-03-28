# Louise Poteau — Portfolio

## Structure

```
portfolio/
├── index.html          ← Entry point (open this in browser)
│
├── css/
│   ├── base.css        ← Variables, reset, typography, shared styles
│   ├── hero.css        ← Nav + Hero section
│   ├── projects.css    ← Project cards, list, modal
│   ├── cv.css          ← Timeline, skills, languages, hobbies
│   └── contact.css     ← Contact + footer
│
├── js/
│   └── main.js         ← Cursor, scroll reveal, projects data + render, modal
│
└── sections/           ← Standalone HTML snippets (for reference)
    ├── hero.html
    ├── projects.html
    ├── cv.html
    └── contact.html
```

## Customisation

### Adding your logo to the timeline
In `index.html`, find the `.tl-logo` blocks and replace the placeholder:
```html
<!-- Before -->
<div class="tl-logo" title="Add Numberly logo here">LOGO</div>

<!-- After: with an img -->
<div class="tl-logo"><img src="assets/logos/numberly.png" alt="Numberly" style="width:100%;height:100%;object-fit:contain;"></div>
```
Create an `assets/logos/` folder and drop your image files there.

### Adding/editing projects
Edit the `projects` array at the top of `js/main.js`.

### Changing the accent colour
Open `css/base.css` and update:
```css
--accent:       #72288f;   /* main purple */
--accent-light: #9b3dc0;   /* hover / lighter */
--accent2:      #c47de8;   /* soft purple for labels */
```

## Deployment

### GitHub Pages (recommended)
1. Create a repo named `louisepoteau.github.io`
2. Upload the entire `portfolio/` folder contents to the root
3. Go to Settings → Pages → Branch: main
4. Live at `https://louisepoteau.github.io`

### Vercel / Netlify
Drag & drop the `portfolio/` folder into the dashboard. Done.
