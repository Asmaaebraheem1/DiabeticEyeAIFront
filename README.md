# DiabeticEyeAIFront

Retinal image analysis frontend built with React + TypeScript + Vite.

## Features
- Upload retinal images (JPG/PNG)
- Upload PDF documents (first page analyzed)
- Enter image URLs for analysis
- View analysis results with confidence scores
- Responsive design

## Setup
1. Install dependencies:
```bash
npm install
```

2. Configure environment:
```bash
cp .env.example .env
```

3. Start development server:
```bash
npm run dev
```

## Environment Variables
`VITE_API_URL` - Base URL for backend API (default: http://localhost:5000)

## Project Structure
- `src/components/` - Reusable UI components
- `src/pages/` - Page components
- `src/types/` - TypeScript type definitions
- `src/App.tsx` - Main application component
- `src/main.tsx` - Application entry point

## Technologies Used
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)

## Available Scripts
- `dev` - Start development server
- `build` - Build for production
- `preview` - Preview production build
- `lint` - Run ESLint
