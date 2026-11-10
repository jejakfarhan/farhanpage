# Farhan Nugraha — Static Portfolio

A single-page portfolio built with **HTML, CSS, and vanilla JavaScript**. No Node.js, framework, bundler, or package installation is required.

## Run locally

Open `index.html` directly in your browser, or use VS Code Live Server if you prefer a local server.

## Folder structure

```text
farhan-portfolio/
├── index.html
├── css/
│   ├── style.css
│   └── responsive.css
├── js/
│   ├── data.js
│   └── main.js
├── images/
│   ├── favicon.svg
│   ├── field/field-sunset.png
│   └── profile/
└── documents/
```

## Edit portfolio content

Most project/research/initiative content lives in `js/data.js`. Each item supports:

- `title`, `type`, `short`, and `description`
- `featureLabel` and `features[]`
- `tags[]`, `status`, and `visual`
- `url` — add the real public URL here when available
- `linkLabel` — text shown on the modal button

When `url` is empty, the modal button opens an email draft to discuss/request the project brief. Replace the email address in `js/main.js` and `index.html` if it changes.

## Personalize before publishing

1. Add a PDF CV at `documents/cv.pdf` and optionally add a CV link in the hero.
2. Verify experience descriptions and dates.
3. Replace project links in `js/data.js` with public URLs when available.
4. Review the profile photos and replace them if you prefer newer images.
5. Confirm the public contact details in `index.html`.

## Deploy

This is a static website and can be deployed directly to GitHub Pages or Vercel. For GitHub Pages, upload the contents of this folder to the repository root. No build command is needed.


## Revision 1.1 — Hero and profile image update

- The opening hero now contains typography, calls to action, and the oilfield sunset background only. The cutout portrait, index labels, border/caption frame, and side portfolio label have been removed from the hero.
- The blue field-jacket cutout portrait now appears in the “Curiosity is where the journey begins” section. It is displayed without a rectangular photo frame or overlay label.
- The transparent portrait asset is cropped around the subject for a better fit in the About section.
