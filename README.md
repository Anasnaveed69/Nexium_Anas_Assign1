# Quote Generator

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

A modern, responsive web application that generates inspiring quotes based on any topic you enter. Built with **Next.js 15**, **React 19**, and **Tailwind CSS**, it features a beautiful UI, dark mode, and a curated database of motivational, leadership, wisdom, and love quotes.

## ✨ Features

- 🔍 **Topic-based Quote Search** - Enter any topic (e.g., motivation, leadership, love) to get three relevant quotes
- 🌗 **Dark Mode Toggle** - Switch between light and dark themes with preference saved in localStorage
- 🎨 **Modern UI Design** - Built with shadcn/ui, Radix UI, and Tailwind CSS for a polished experience
- 📋 **Copy to Clipboard** - Instantly copy any quote with attribution
- 💖 **Interactive Actions** - Like and share buttons for future expansion
- ⚡ **Fast & Responsive** - Optimized for all devices with smooth animations
- 🎯 **Smart Search** - Intelligent filtering with fallback to general categories
- 🔄 **Regenerate Quotes** - Get new quotes for the same topic

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18+ recommended)
- **pnpm** (or npm/yarn)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/quote-generator.git
   cd quote-generator
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000) in your browser**

### Production Build

```bash
# Build the application
pnpm build

# Start production server
pnpm start
```

## 📁 Project Structure

```
quote-generator/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout component
│   ├── loading.tsx        # Loading component
│   └── page.tsx           # Main quote generator page
├── components/            # Reusable UI components
│   └── ui/               # shadcn/ui components
├── lib/                  # Utility functions and data
│   ├── quotes-data.ts    # Local database of quotes
│   └── utils.ts          # Utility functions
├── hooks/                # Custom React hooks
├── styles/               # Additional styles
├── public/               # Static assets
├── package.json          # Dependencies and scripts
├── tailwind.config.ts    # Tailwind CSS configuration
├── next.config.mjs       # Next.js configuration
└── tsconfig.json         # TypeScript configuration
```

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org/) | 15.2.4 | React framework with App Router |
| [React](https://react.dev/) | 19 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | 5 | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | 3.4.17 | Utility-first CSS framework |
| [shadcn/ui](https://ui.shadcn.com/) | Latest | Component library |
| [Radix UI](https://www.radix-ui.com/) | Various | Headless UI primitives |
| [Lucide React](https://lucide.dev/) | 0.454.0 | Icon library |

## 🎨 Customization

### Adding New Quotes

Edit `lib/quotes-data.ts` to add or modify quotes:

```typescript
export const quotesDatabase: Quote[] = [
  {
    text: "Your inspiring quote here",
    author: "Author Name",
    category: "category-name",
  },
  // ... more quotes
]
```

### Available Categories

- `success` - Achievement and success quotes
- `motivation` - Inspirational and motivational quotes
- `leadership` - Leadership and management quotes
- `life` - Life philosophy and wisdom
- `innovation` - Creativity and innovation
- `technology` - Tech and digital quotes
- `love` - Love and relationships
- `wisdom` - General wisdom and philosophy
- `happiness` - Joy and happiness quotes

### UI Customization

- **Colors**: Modify CSS variables in `app/globals.css`
- **Components**: Customize shadcn/ui components in `components/ui/`
- **Styling**: Adjust Tailwind configuration in `tailwind.config.ts`

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Lint code with ESLint |

## 🌟 Features in Detail

### Smart Quote Search
- Searches through quote text, author, and category
- Falls back to general categories if no direct matches found
- Returns exactly 3 quotes per search

### Dark Mode
- Automatic detection of system preference
- Manual toggle with localStorage persistence
- Smooth transitions between themes

### Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interactions

### Performance
- Client-side search for instant results
- Optimized animations and transitions
- Minimal bundle size

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Radix UI](https://www.radix-ui.com/) for accessible UI primitives
- [Lucide](https://lucide.dev/) for the icon set
- All the great authors whose quotes inspire us daily

---

**Made with ❤️ using Next.js, React, and Tailwind CSS** 