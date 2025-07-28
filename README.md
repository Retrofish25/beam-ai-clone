# 🤖 AI Agents Platform - Beam.ai Clone

A modern, responsive AI agents platform built with Next.js 15, TypeScript, and Tailwind CSS. This project replicates the design and functionality of Beam.ai with enhanced features and animations.

## 🌟 Live Demo

**[View Live Demo](https://same-yuwu204smqz-latest.netlify.app)**

## ✨ Features

### 🏠 **Homepage**
- **Hero Section** with animated gradient backgrounds
- **AI Agents Carousel** with interactive card animations
- **Workflows Section** with step-by-step automation showcase
- **Benefits Section** highlighting platform advantages
- **Floating Particles Background** for immersive experience

### 📱 **Pages**
- **`/agentes`** - Comprehensive agent gallery with filtering and search
- **`/soluciones`** - Industry solutions showcase with detailed cards
- **`/contacto`** - Professional contact form with validation
- **Responsive Navigation** with smooth transitions

### 🎨 **Design Features**
- **Image Backgrounds** on cards with overlay effects
- **Smooth Animations** using CSS transitions and transforms
- **Interactive Elements** with hover effects and micro-interactions
- **Mobile-First Design** fully responsive across all devices
- **Modern UI Components** built with shadcn/ui

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui + Radix UI
- **Icons:** Lucide React
- **Package Manager:** Bun
- **Deployment:** Netlify
- **Development Tools:** ESLint, Biome, PostCSS

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Bun (recommended) or npm/yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Retrofish25/beam-ai-clone.git
   cd beam-ai-clone
   ```

2. **Install dependencies**
   ```bash
   bun install
   # or
   npm install
   ```

3. **Run the development server**
   ```bash
   bun dev
   # or
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### 📦 Available Scripts

```bash
bun dev          # Start development server with Turbopack
bun build        # Build for production
bun start        # Start production server
bun lint         # Run TypeScript check and ESLint
bun format       # Format code with Biome
```

## 📁 Project Structure

```
beam-ai-clone/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── agentes/           # Agents gallery page
│   │   ├── contacto/          # Contact form page
│   │   ├── soluciones/        # Solutions showcase page
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Homepage
│   ├── components/            # Reusable UI components
│   │   ├── ui/               # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   └── ...
│   │   └── FloatingParticles.tsx # Background animation
│   ├── hooks/                 # Custom React hooks
│   │   └── useIntersectionObserver.ts
│   └── lib/                   # Utility functions
│       └── utils.ts
├── public/                    # Static assets
├── package.json
├── tailwind.config.ts         # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── next.config.js            # Next.js configuration
```

## 🎯 Key Components

### FloatingParticles
Animated background particles that create an immersive experience across all pages.

### Navigation
Responsive navigation with smooth transitions and active state indicators.

### AI Agents Carousel
Interactive carousel showcasing different AI agents with detailed information cards.

### Contact Form
Professional contact form with field validation and submission handling.

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for any environment-specific configurations:

```env
# Add your environment variables here
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Deployment

The project is configured for easy deployment on various platforms:

**Netlify (Current):**
- Uses `netlify.toml` configuration
- Automatic deployments from Git

**Vercel:**
```bash
bunx vercel --prod
```

**Other Platforms:**
```bash
bun build
bun start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspired by [Beam.ai](https://beam.ai) design and functionality
- Built with [shadcn/ui](https://ui.shadcn.com/) component library
- Icons by [Lucide](https://lucide.dev/)
- Fonts optimized with [Next.js Font Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)

---

**Made with ❤️ using Next.js, TypeScript, and Tailwind CSS**
