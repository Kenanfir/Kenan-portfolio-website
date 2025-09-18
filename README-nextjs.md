# Kenan Firmansyah - Next.js Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
npm start
```

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout with SEO metadata
│   ├── page.tsx          # Main portfolio page
│   └── sitemap.ts        # Sitemap generation
├── src/
│   ├── components/       # React components
│   ├── content/         # YAML content files
│   ├── lib/             # Utility functions
│   └── types/           # TypeScript definitions
└── public/              # Static assets
```

## 🎨 Features

- **Modern Design**: Dark theme with purple/green accents
- **Responsive**: Mobile-first design
- **YouTube Integration**: Lazy-loaded video embeds
- **Accessibility**: WCAG compliant
- **SEO Optimized**: Complete metadata and Open Graph
- **Performance**: Optimized with Next.js 14

## 📝 Content Management

Content is managed through `src/content/site.yaml`. Update this file to modify:
- Personal information
- Projects and experience
- Education and publications
- Skills and technologies

## 🛠️ Development

The project uses:
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **YAML** for content management

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Optimized for all screen sizes

## 🎥 YouTube Integration

Videos are lazy-loaded with custom posters:
- No auto-loading until clicked
- Custom play button overlay
- Responsive 16:9 aspect ratio

## ♿ Accessibility

- Semantic HTML structure
- Keyboard navigation
- Focus management
- Skip-to-content links
- ARIA labels

## 🚀 Deployment

Ready for Vercel deployment:
1. Connect GitHub repository
2. Configure environment variables
3. Deploy automatically

## 📄 License

Personal portfolio project. All rights reserved.