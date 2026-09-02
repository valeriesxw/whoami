# Valerie Su — Personal Portfolio

A personal portfolio website built for showcasing a career pivot from
business development / sports technology into Cloud Support & DevOps.

## What this is

A single-page portfolio site with sections for Home, About Me, Skills,
Certifications, Work Experience, Projects and Contact. It's built to be
shown to potential employers, and to be easy to keep updating as new
projects and skills come in.

## Main features

- Fully responsive: works on desktop, tablet and phone screens.
- Sticky navigation bar with a mobile hamburger menu.
- A one-time "career pipeline" animation on the hero section (sports/business
  → bootcamp → cloud & DevOps) — plays once on load, not on every scroll.
- Skills grouped by category as tags (DevOps & automation, programming,
  operating systems, networking, practices).
- A chronological timeline for work experience.
- A project grid featuring the Sit-to-Stand Lab (live demo linked) and the
  bootcamp's network scanning project, with a pattern you can duplicate for
  new projects as you build them.
- Buttons/links to the GitHub profile and (placeholder) LinkedIn.
- No backend, no database, no API keys, no paid services — everything runs
  as static files, so it works on GitHub Pages out of the box.
- Respects "reduce motion" accessibility settings and has visible keyboard
  focus states.

## Technologies used

- HTML5
- CSS3 (custom properties / variables, Flexbox, CSS Grid, no frameworks)
- Vanilla JavaScript (no libraries)
- Google Fonts: Space Grotesk (headings) and IBM Plex Sans (body text)

## File structure

```
portfolio/
├── index.html      → all page content and section structure
├── style.css       → all visual styling (colours, layout, responsive rules)
├── script.js       → mobile menu behaviour + footer year
├── images/
│   └── profile.jpg → profile photo used in the hero section
└── README.md       → this file
```

## Before you publish: things to check / personalise

This site was built strictly from the information provided — no invented
projects, certifications or contact details. A few things are intentionally
left as placeholders for you to fill in:

- **"Automated Network Scanning" repository link** — in `index.html`, search
  for `Repository link coming soon` and replace that `<span>` with a real
  `<a href="...">Source code</a>` link once you've pushed that project to
  GitHub. To add further projects, duplicate a `<article class="project-card">
  ...</article>` block and fill in a real title, description and link.
- **LinkedIn URL** — in the Contact section of `index.html`, search for
  `Add your LinkedIn URL here` and replace the `href="#"` with your real
  LinkedIn profile link (or delete that card if you don't have one yet).
- **Phone number** — it isn't published on the site by default, to avoid
  putting it on a public page. If you want it visible, add a new
  `.contact__card` in the Contact section of `index.html` following the
  same pattern as the Email card.

## How to run it locally

No build tools or installation needed.

1. Download or clone the project folder.
2. Double-click `index.html` to open it directly in your browser, **or**
   for the most accurate preview, serve it locally:
   - In VS Code, install the "Live Server" extension, right-click
     `index.html`, and choose "Open with Live Server".
   - Or, from a terminal in the project folder, run:
     ```
     python3 -m http.server 8000
     ```
     then open `http://localhost:8000` in your browser.

## How to upload it to GitHub

1. Go to [github.com](https://github.com) and log in (create a free account
   if you don't have one).
2. Click the **+** icon in the top-right corner → **New repository**.
3. Name it something like `portfolio` or `valerie-su-portfolio`.
4. Leave it **Public**, don't initialise it with a README (you already
   have one), and click **Create repository**.
5. On the next page, GitHub shows setup commands. From a terminal, inside
   your project folder, run:
   ```
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   git push -u origin main
   ```
   Replace `YOUR-USERNAME` and `YOUR-REPO-NAME` with your actual GitHub
   username and the repository name you chose.

   (If you don't have Git installed, you can instead use GitHub's website:
   open your new repository, click **Add file → Upload files**, then drag
   in `index.html`, `style.css`, `script.js`, the `images` folder and this
   `README.md`.)

## How to deploy it with GitHub Pages

1. In your repository on GitHub, click the **Settings** tab.
2. In the left sidebar, click **Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Under **Branch**, select **main** and folder **/(root)**, then click **Save**.
5. Wait a minute or two, then refresh the page — GitHub will show a link
   like:
   ```
   https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
   ```
6. Visit that link — your portfolio is now live and shareable.

Any time you push new commits to the `main` branch, GitHub Pages will
automatically redeploy the updated site within a minute or two.

## Editing tips for beginners

- Every file has comments explaining what each section does — look for
  lines starting with `<!-- -->` in HTML, `/* */` in CSS, and `//` in JS.
- To change colours, edit the values at the top of `style.css` under
  `:root { ... }` — every colour in the site is defined there once.
- To add a new project card, copy one `<article class="project-card">...
  </article>` block in `index.html` and edit its text and link.
- To add a new work experience entry, copy one `<li class="timeline__item">
  ...</li>` block and edit the dates, title and bullet points.
