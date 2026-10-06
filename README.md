# Fermor homepage

A responsive React homepage for the Fermor frontend developer assignment.

The page presents Fermor as a calmer way to understand personal finances: bring accounts, spending and goals into one clear view, then make the next decision with context.

## Run locally

Requirements: Node.js 18+

```bash
npm install
npm run dev
```

The development server will print the local URL in the terminal.

Create a production build with:

```bash
npm run build
```

Preview the production build locally with:

```bash
npm run preview
```

## Project structure

```text
src/
  main.jsx       Page structure, content and inline UI illustrations
  styles.css     Visual system, responsive layout and interactions
index.html       Document shell and page metadata
```

## Design direction

The homepage follows a simple product story:

1. See the full picture of your money.
2. Turn an intention into a measurable plan.
3. Make the next move with useful context.

The visual language is intentionally warm and editorial rather than overly technical. A deep ink colour gives the product trust and contrast, a muted paper background keeps the page calm, and lime accents highlight moments of progress. The serif display face adds personality while the sans and mono styles keep product details easy to scan.

The dashboard in the hero and the three product cards are built with HTML, CSS and inline SVG. This keeps the page lightweight and makes the interface feel like part of the product rather than a collection of stock images.

## Implementation notes

- Built with React and Vite.
- No UI component library is required.
- Responsive navigation switches to a mobile menu below 700px.
- Layouts adapt at tablet and mobile breakpoints.
- Buttons and cards include hover/focus states.
- Reduced-motion preferences are respected.
- Navigation links use in-page anchors so the prototype is immediately usable.
