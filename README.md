# Magpie Treasures Design System

A documentation site and component library for Magpie Treasures, a fictional bakery, café, and antiques and handmade goods shop. It's a demonstration project built to showcase design system architecture, typed React components, and accessibility-first patterns, not a published package.

**Live site:** [charitablemagpie.com/portfolio/magpie-treasures](https://charitablemagpie.com/portfolio/magpie-treasures)

Built by Kellie Sellin Edland. More work at [charitablemagpie.com/portfolio](https://charitablemagpie.com/portfolio).

## What's inside

**Components**, each with live examples, a props table, and an accessibility write-up:

- Button
- Card
- Toast
- Theme Toggle
- Form Field
- Accordion (with AccordionGroup)
- Modal

**Foundations**

- Color primitives and light and dark theme tokens
- Typography (Inria Serif) with a responsive type scale
- Iconography (Lucide)
- Spacing and border radius

**Guides**

- Installation (project structure, tokens, theme setup, using a component)
- Accessibility (contrast, keyboard and focus, ARIA, motion)

## Tech stack

- React 19 and TypeScript
- Vite
- React Router
- Lucide React icons
- Plain CSS with custom properties for design tokens

## Project structure

```
src/
  components/   # reusable components and their documentation pages
  tokens/       # colors.css (primitives), themes.css (light and dark roles), typography.css
  assets/       # images
  index.css     # layout, utility classes, and component styles
```

Components reference theme tokens such as `--color-page` and `--color-text-primary`, never the raw color primitives, so the whole system can be re-themed by changing one layer.

## Accessibility

Accessibility is built into every component rather than added afterward:

- Color pairings checked against WCAG 2.1 AA in both themes
- Visible keyboard focus indicators using `:focus-visible`
- A skip link and a `<main>` landmark on every page
- Modal focus management using `inert` instead of a manual focus trap
- Disclosure, dialog, and form patterns with correct ARIA relationships
- Animations only run when `prefers-reduced-motion: no-preference`

Each component page documents its own accessibility decisions.