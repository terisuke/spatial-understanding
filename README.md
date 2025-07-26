# Spatial Understanding Demo

A web application that demonstrates advanced spatial understanding capabilities using Google's Gemini AI. This app analyzes images to detect objects and spatial features with various visualization methods.

## Features

- **Multiple Detection Modes**:
  - **2D Bounding Boxes**: Standard rectangular object detection
  - **Segmentation Masks**: Pixel-level object segmentation
  - **3D Bounding Boxes**: 3D object detection with rotation parameters
  - **Points**: Point-based object identification

- **Interactive UI**: Real-time visualization of detection results overlaid on images
- **Flexible Input**: Support for example images or custom image uploads
- **Temperature Control**: Adjust AI model creativity/randomness
- **Responsive Design**: Works on desktop and mobile devices

## Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **State Management**: Jotai (atomic state management)
- **Styling**: Tailwind CSS (@tailwindcss/browser)
- **AI Integration**: Google Generative AI SDK (Gemini)
- **Additional Libraries**: 
  - perfect-freehand (smooth drawing)
  - react-resize-detector (responsive layout)

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Google Gemini API key

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/spatial-understanding.git
   cd spatial-understanding
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your Gemini API key:
   ```
   GEMINI_API_KEY=your_api_key_here
   ```

## Development

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Check code quality with ESLint
- `npm run lint:fix` - Auto-fix ESLint issues
- `npm run typecheck` - Run TypeScript type checking

## Usage

1. **Select Detection Mode**: Choose from the available detection types (2D boxes, segmentation, 3D boxes, or points)
2. **Choose an Image**: Select from example images or upload your own
3. **Run Detection**: Click the detection button to analyze the image
4. **View Results**: See the detected objects visualized on the image
5. **Adjust Settings**: Fine-tune the temperature slider for different results

## URL Parameters

You can directly access specific detection modes using URL hash parameters:
- `#task=2d-bounding-boxes`
- `#task=segmentation-masks`
- `#task=3d-bounding-boxes`
- `#task=points`

## Project Structure

```
spatial-understanding/
├── App.tsx              # Main application component
├── atoms.tsx            # Jotai state atoms
├── Types.tsx            # TypeScript type definitions
├── Content.tsx          # Image display and results visualization
├── Prompt.tsx           # Gemini AI integration
├── DetectTypeSelector.tsx # Detection mode selector
├── ExampleImages.tsx    # Example image gallery
├── TopBar.tsx           # Application header
├── SideControls.tsx     # Control panel
└── ...other components
```

## API Integration

The application uses Google's Gemini AI API for image analysis. The API key is securely loaded from environment variables and used to initialize the Generative AI client in the `Prompt.tsx` component.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with Google's Generative AI technology
- Inspired by advances in computer vision and spatial understanding
