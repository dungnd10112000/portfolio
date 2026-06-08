# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Static, single-page personal portfolio/CV website for Nguyễn Đức Dũng (Performance Marketing & MarTech specialist). Content is in Vietnamese (`<html lang="vi">`). No framework, no build step, no dependencies — plain HTML/CSS/JS served as static files. External resources (FontAwesome, Google Fonts) load from CDNs.

## Running

There is no build, test, or lint tooling. Open `index.html` directly in a browser, or serve the folder over HTTP to avoid any CORS/asset issues:

```powershell
python -m http.server 8000   # then open http://localhost:8000
```

## Architecture

Single-page layout with a fixed left sidebar and a scrolling content area:

- **`index.html`** — the light/primary version. Links `style.css` + `script.js`. The page is a `.portfolio-container` holding a `.sidebar` (profile, contacts, nav) and `<main>` with five `<section class="panel-section">` panels, in order: `#about`, `#experience`, `#projects`, `#skills`, `#brands`. Section `id`s are the anchor targets the sidebar nav and scroll-spy depend on — keep them in sync if renaming.
- **`index_dark.html`** — an alternate "dark edition" that links `style_dark.css` (note: this stylesheet may not exist in the repo; verify before editing dark mode). Maintained as a parallel copy, not generated from the light version — changes to content must be applied to both files.
- **`style.css`** — all styling for the light version, including mobile responsiveness (the sidebar becomes a slide-out drawer via the `.mobile-active` class).
- **`script.js`** — runs on `DOMContentLoaded`. Four behaviors, all driven by CSS classes and `IntersectionObserver`:
  1. Mobile sidebar drawer toggle (`#hamburger-btn` / `#close-sidebar-btn` add/remove `.mobile-active` on `#sidebar`).
  2. Scroll-spy — observes each `<section>` and toggles `.active` on the matching `.sidebar-nav .nav-link` whose `href` is `#<section-id>`.
  3. Scroll-reveal — adds `.active` to `.reveal` elements as they enter the viewport.

Assets (`avatar.png`, `*_logo.png/svg`, the CV PDF) live flat in the repo root and are referenced by relative path.

## Conventions

- All UI copy is Vietnamese; preserve language and tone when editing content.
- Behavior is class-driven: JS only adds/removes classes (`.active`, `.mobile-active`) and the visual effect lives in CSS. Add new animations the same way rather than inline styles.
