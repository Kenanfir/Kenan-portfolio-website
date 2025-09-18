# Kenan Firmansyah - Portfolio Website

A blazing-fast static portfolio website built with Astro + Tailwind CSS, replacing the previous WordPress Elementor site with modern performance and developer experience.

## 🚀 Features

- **Static Site Generation (SSG)** with Astro for optimal performance
- **Tailwind CSS** for utility-first styling with custom design tokens
- **TypeScript** for type safety and better developer experience
- **Content Collections** for structured project management
- **Responsive Design** optimized for all devices
- **SEO Optimized** with meta tags, sitemaps, and structured data
- **Performance Focused** targeting Lighthouse scores: LCP <1.5s, CLS ~0
- **Accessibility** with semantic HTML and focus management

## 🛠️ Tech Stack

- **Framework**: Astro 4.0
- **Styling**: Tailwind CSS 3.4
- **Language**: TypeScript
- **Content**: Markdown with Astro Content Collections
- **Images**: @astrojs/image with Sharp optimization
- **Deployment**: Static site (compatible with Coolify, Vercel, Netlify)

## 📁 Project Structure

```
├── public/
│   ├── uploads/          # Project images and assets
│   ├── fonts/            # Self-hosted fonts (Inter Variable)
│   ├── cv/              # Resume/CV files
│   └── favicon.svg       # Site favicon
├── src/
│   ├── components/       # Reusable Astro components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── ProjectCard.astro
│   │   └── Prose.astro
│   ├── layouts/          # Page layouts
│   │   └── BaseLayout.astro
│   ├── content/          # Content collections
│   │   ├── projects/     # Project markdown files
│   │   └── config.ts     # Content schema
│   └── pages/            # Astro pages
│       ├── index.astro   # Homepage
│       ├── contact.astro # Contact page
│       ├── resume.astro  # Resume page
│       └── [slug].astro  # Dynamic project pages
├── deploy/               # Deployment configurations
│   ├── redirects-caddy.txt
│   └── redirects-nginx.conf
└── .github/workflows/    # CI/CD pipeline
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd kenan-portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📝 Content Management

### Adding Projects

1. Create a new markdown file in `src/content/projects/`
2. Use the following frontmatter structure:

```yaml
---
title: "Project Name"
excerpt: "Brief project description"
cover: "/uploads/project-cover.jpg"
tags: ["Unity", "Game Development", "AI"]
date: "2024-01-15"
links:
  - label: "Play Game"
    href: "https://example.com"
  - label: "View Source"
    href: "https://github.com/username/project"
---
```

3. Add your project content below the frontmatter in Markdown

### Adding Images

1. Place images in `public/uploads/`
2. Reference them in content as `/uploads/filename.jpg`
3. For optimized images, use the `<Image />` component in Astro components

### Updating Design Tokens

Edit `tailwind.config.cjs` to customize:
- Colors (brand, surface, text)
- Typography (fonts, sizes)
- Spacing and layout
- Custom utilities

## 🚀 Deployment

### Coolify Deployment

1. **Connect Repository**: Link your GitHub repository to Coolify
2. **Build Configuration**:
   - Build Command: `npm ci && npm run build`
   - Publish Directory: `dist`
   - Node Version: `18`
3. **Environment Variables**: None required for static build
4. **Domain Setup**: Configure your domain and SSL

### Docker Deployment

```bash
# Build Docker image
docker build -t kenan-portfolio .

# Run container
docker run -p 80:80 kenan-portfolio
```

### Manual Deployment

1. Build the site: `npm run build`
2. Upload the `dist/` directory to your web server
3. Configure redirects (see `deploy/` directory)

## 🔄 Redirects

The site includes redirect configurations for legacy WordPress paths:

### Caddy (deploy/redirects-caddy.txt)
```caddyfile
/echo-remnant/ /projects/echo-remnant/ 301
/slime-sage/ /projects/slime-sage/ 301
/f-u-r-y/ /projects/f-u-r-y/ 301
```

### Nginx (deploy/redirects-nginx.conf)
```nginx
rewrite ^/echo-remnant/$ /projects/echo-remnant/ permanent;
rewrite ^/slime-sage/$ /projects/slime-sage/ permanent;
rewrite ^/f-u-r-y/$ /projects/f-u-r-y/ permanent;
```

## 🎨 Design System

### Color Palette
- **Primary**: #00d4aa (Teal/Cyan)
- **Accent**: #ff6b6b (Coral)
- **Background**: #0a0a0a (Dark)
- **Surface**: #1a1a1a (Card backgrounds)
- **Text**: #ffffff (Primary), #a0a0a0 (Secondary)

### Typography
- **Primary Font**: Inter Variable
- **Monospace**: JetBrains Mono
- **Font Loading**: Self-hosted with `font-display: swap`

### Components
- **Cards**: Rounded corners (1rem), soft shadows
- **Buttons**: Brand colors with hover states
- **Navigation**: Sticky header with backdrop blur
- **Forms**: Accessible with focus states

## 📊 Performance

### Lighthouse Targets
- **LCP**: <1.5s (Largest Contentful Paint)
- **CLS**: ~0 (Cumulative Layout Shift)
- **FID**: <100ms (First Input Delay)
- **JS Payload**: <80KB on homepage

### Optimizations
- **Static Generation**: Pre-built HTML for all pages
- **Image Optimization**: Sharp integration for responsive images
- **Font Optimization**: Self-hosted fonts with preloading
- **Minimal JavaScript**: Astro islands only when needed

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - TypeScript type checking

### Code Quality

- **TypeScript**: Strict type checking enabled
- **ESLint**: Code linting (can be added)
- **Prettier**: Code formatting (can be added)

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: Tailwind's responsive utilities
- **Touch Friendly**: Large touch targets and gestures
- **Performance**: Optimized for mobile networks

## 🔍 SEO Features

- **Meta Tags**: Open Graph and Twitter Cards
- **Sitemap**: Auto-generated XML sitemap
- **Structured Data**: JSON-LD for rich snippets
- **Canonical URLs**: Proper URL canonicalization

## 🚨 Troubleshooting

### Common Issues

1. **Build Errors**: Check TypeScript types and imports
2. **Image Loading**: Verify image paths in `public/uploads/`
3. **Font Loading**: Ensure font files are in `public/fonts/`
4. **Content Not Showing**: Check content collection schema

### Performance Issues

1. **Slow Builds**: Check image optimization settings
2. **Large Bundle**: Review JavaScript usage and Astro islands
3. **Font Loading**: Verify font preloading configuration

## 📄 License

This project is for personal portfolio use. All rights reserved.

## 🤝 Contributing

This is a personal portfolio site. For suggestions or issues, please contact [kenan@serverkn.com](mailto:kenan@serverkn.com).

---

**Built with ❤️ using Astro + Tailwind CSS**