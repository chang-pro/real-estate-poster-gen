# Real Estate Poster Generator 🏡

A Next.js application that generates stunning real estate posters by randomly selecting from 10 unique templates and replacing placeholders with your property data.

## Features

- 🎨 **10 Unique Templates**: Modern Gradient, Classic Newspaper, Minimalist, Luxury Gold, Tech Modern, Vintage, Bold Typography, Photo Collage, Magazine, and Neon Glow
- 🎲 **Random Generation**: Get 3 different random designs each time you click generate
- 📸 **Flexible Image Input**: Use URLs or upload images directly
- ⬇️ **High-Quality Downloads**: Download posters as PNG files
- 🎯 **Simple & Fast**: No signup, no database, just pure poster generation

## How It Works

1. **Enter Property Details**
   - Headline (e.g., "LUXURY WATERFRONT ESTATE")
   - Address (e.g., "1821 Riverside Drive, Ormond Beach, FL")
   - Price (e.g., "1,295,000")

2. **Add Photos**
   - Paste image URLs or upload files
   - At least one photo required

3. **Generate Posters**
   - Click "Generate 3 Random Posters"
   - System randomly selects 3 different templates
   - Replaces `{{placeholders}}` with your data
   - Displays all 3 posters instantly

4. **Download & Regenerate**
   - Download individual posters you like
   - Click "Generate 3 Different Posters" for new random combinations

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd RPGS
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Template Structure

Each template is a TypeScript file with HTML and CSS:

```typescript
export const template1 = {
  id: 'unique-id',
  name: 'Template Name',
  html: `
    <div class="poster">
      <style>
        /* Your CSS here */
      </style>
      <!-- Your HTML with {{placeholders}} -->
      <h1>{{headline}}</h1>
      <img src="{{photo1}}" />
      <div>${{price}}</div>
      <div>{{address}}</div>
    </div>
  `
};
```

## Available Placeholders

- `{{headline}}` - Property headline/title
- `{{address}}` - Property address
- `{{price}}` - Property price
- `{{photo1}}` - Primary photo
- `{{photo2}}` - Secondary photo (optional)
- `{{photo3}}` - Tertiary photo (optional)

## Adding New Templates

1. Create a new file in `/templates/` (e.g., `template11.ts`)
2. Export a template object with unique ID, name, and HTML
3. Import it in `/templates/index.ts`
4. Add it to the `allTemplates` array

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **html2canvas** - Image generation for downloads

## Build for Production

```bash
npm run build
npm start
```

## License

MIT

## Contributing

Feel free to add more templates! Each template should have a unique style and personality.



