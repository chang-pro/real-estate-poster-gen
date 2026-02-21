# Real Estate Poster Generator

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)
![Open Source](https://img.shields.io/badge/Open_Source-green?style=flat-square)

**A web app that generates professional real estate marketing posters instantly.** Enter property details, upload photos, and get 3 unique designs from 10 different templates. Download as PNG — ready for print or social media.

**This project is open source — full code available in this repo.**

---

## How It Works

1. **Enter property details** — headline, address, price
2. **Upload photos** — via URL or file upload
3. **Click generate** — system randomly selects 3 of 10 templates
4. **Download** — export as high-quality PNG files

No signup. No account. Just paste your property info and go.

## What I Built

### Dynamic Template Engine
The core of the app is a **placeholder-based rendering system**. Each template is a self-contained design with `{{placeholders}}` for property data. When you generate:
1. Three templates are randomly selected (no two runs are identical)
2. Placeholders (`{{headline}}`, `{{price}}`, `{{address}}`) are replaced with your data
3. Uploaded images are injected into the template's image slots
4. The result is rendered and ready for download

### 10 Unique Templates

| # | Style | Design Approach |
|---|-------|----------------|
| 1 | **Modern Gradient** | Clean gradients, bold typography |
| 2 | **Classic Newspaper** | Editorial, newspaper-inspired |
| 3 | **Minimalist** | Whitespace-focused, elegant |
| 4 | **Luxury Gold** | Premium dark theme with gold accents |
| 5 | **Tech Modern** | Sleek, tech-forward |
| 6 | **Vintage** | Retro warm tones |
| 7 | **Bold Typography** | Statement type, minimal imagery |
| 8 | **Photo Collage** | Multi-image grid layout |
| 9 | **Magazine** | Editorial cover style |
| 10 | **Neon Glow** | Dark mode with neon accents |

### Client-Side PNG Export
- Posters are rendered and exported entirely in the browser — no server-side processing needed
- High-quality PNG output suitable for print and digital use

## Tech Stack

`Next.js 15` · `React 19` · `TypeScript` · `Tailwind CSS` · `Client-side rendering`

---

> *Open source — feel free to fork, contribute, or use it for your own real estate marketing.*
