# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm install` - Install project dependencies
- `npm run dev` - Start the development server with Vite
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code quality issues
- `npm run lint:fix` - Run ESLint and automatically fix issues where possible
- `npm run typecheck` - Run TypeScript compiler to check for type errors

**Note**: Before running the app, set the `GEMINI_API_KEY` environment variable in `.env.local`

## Architecture Overview

This is a React-based spatial understanding demo application that uses Google's Gemini AI to detect objects and spatial features in images. The app is built with:

- **Vite** as the build tool and dev server
- **React 19** with TypeScript for the UI
- **Jotai** for atomic state management
- **Tailwind CSS** (using @tailwindcss/browser) for styling
- **Google Generative AI SDK** for Gemini integration

### Key Components

The application follows a component-based architecture with global state management:

- **App.tsx** - Main application container that orchestrates the layout and handles URL parameters
- **atoms.tsx** - Central state management using Jotai atoms for all application state
- **Types.tsx** - TypeScript type definitions for detection modes and bounding box formats

### Detection Modes

The app supports four spatial detection modes:
1. **2D bounding boxes** - Standard rectangular object detection
2. **Segmentation masks** - Pixel-level object segmentation
3. **3D bounding boxes** - 3D object detection with rotation
4. **Points** - Point-based object identification

### State Management Pattern

All state is managed through Jotai atoms defined in `atoms.tsx`. Components import and use these atoms rather than local state. Key atoms include:
- `DetectTypeAtom` - Current detection mode
- `ImageSrcAtom` - Source image for analysis
- `BoundingBoxes2DAtom`, `BoundingBoxes3DAtom`, `BoundingBoxMasksAtom`, `PointsAtom` - Detection results
- `PromptsAtom` - AI prompts for each detection type

### API Integration

The Gemini API is accessed through the `@google/genai` SDK in `Prompt.tsx`. The API key is loaded from environment variables via Vite's configuration.