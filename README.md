# Tyler Gray Portfolio

A personal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- ⚡ **Next.js 14** with App Router
- 🎨 **6 Color Themes** (Default, Vermeer, Nord, Rosé Pine, Tokyo Night, Light)
- 📱 **Fully Responsive** design
- 🔧 **TypeScript** for type safety
- 🎯 **Tailwind CSS** for styling
- 🖼️ **Next/Image** optimization
- 📊 **Static Export** ready for any hosting

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server (after build)
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Project Structure

```
portfolio-next/
├── app/
│   ├── globals.css      # Global styles & theme variables
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Home page
├── components/
│   ├── Navigation.tsx   # Nav bar
│   ├── Hero.tsx         # Hero section with avatar
│   ├── Projects.tsx     # Project cards
│   ├── Hobbies.tsx      # Hobby cards & gallery placeholder
│   ├── About.tsx        # About section with skills
│   ├── Contact.tsx      # Contact links
│   ├── Footer.tsx       # Footer
│   ├── ThemePicker.tsx  # Theme selector widget
│   ├── ThemeProvider.tsx # Theme context
│   └── index.ts         # Component exports
├── lib/
│   ├── data.ts          # Projects, hobbies, skills data
│   └── themes.ts        # Theme definitions
├── public/
│   └── avatar.png       # Your avatar image
└── ...config files
```

## Customization

### Add Your Info

Edit `lib/data.ts` to update:
- Projects
- Hobbies
- Tech stack
- Skills
- Social links

### Add Hobby Photos

1. Add images to `public/hobbies/`
2. Create a gallery component or update `Hobbies.tsx`

### Change Themes

Edit theme colors in `app/globals.css` under the CSS variables.

### Add New Theme

1. Add theme definition to `lib/themes.ts`
2. Add CSS variables in `app/globals.css`
3. Add swatch colors in `ThemePicker.tsx`

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Static Export (Self-host)

```bash
npm run build
# Upload the `out/` folder to any static host
```

### Docker

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## License

MIT
