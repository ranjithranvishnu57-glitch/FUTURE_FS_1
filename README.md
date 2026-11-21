# Ranjith M. — Personal Developer Portfolio

A modern, light-themed personal developer portfolio built with React, Vite, Tailwind CSS v4, Framer Motion, and an interactive 3D hero sculpture powered by Three.js and React Three Fiber.

## Features

- **Interactive 3D Hero**: Floating lavender glass sculpture with studio lighting, subtle pointer-driven rotation, mobile optimization, and `prefers-reduced-motion` support.
- **Responsive Sticky Navigation**: Desktop pill navigation with active section scroll-spy and an accessible mobile drawer.
- **About Me**: Introduction, academic background, focus areas, and current goals.
- **Skills & Technologies**: Categorized overview of programming languages, frontend, backend, and tools/design.
- **Featured Projects**: Editorial alternating project showcase with abstract concept previews and safe link states.
- **Experience & Certifications**: Vertical timeline for internships/training and a responsive certifications grid.
- **Contact & Footer**: Validated contact form with configurable submission endpoint, contact channels, availability status, and minimal footer.

## Tech Stack

- **Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`) + custom CSS design tokens
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Animations**: Framer Motion
- **Icons & Routing**: Lucide React, React Router DOM

## Getting Started

### Installation

```bash
npm install
```

### Local Development

```bash
npm run dev
```

### Linting & Production Build

```bash
npm run lint
npm run build
npm run preview
```

## Configuration

- Update contact links (`LinkedIn`, `GitHub`) and connect a real form endpoint (`formEndpoint`) in `src/data/contact.js`.
- Add project screenshots, repository URLs, and live demo URLs in `src/data/projects.js`.

## Deployment (Vercel)

1. Push the repository to GitHub.
2. Import the repository in [Vercel](https://vercel.com/).
3. Select **Vite** as the framework preset:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Deploy and verify the live URL.
