# ngThreejs

A bare bones Angular 20 hello world application with signals and Three.js

![Application Screenshot](https://github.com/user-attachments/assets/7aba334f-1b2c-4fb5-9ca5-c6e6aba40a08)

## Features

- **Angular 20** - Latest version with standalone components
- **Signals** - Modern reactive state management
- **Three.js** - 3D graphics rendering with animated rotating cube
- **TypeScript** - Type-safe development
- **Minimal Setup** - Clean, simple codebase

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm start

# Open browser to http://localhost:4200/
```

### Build

```bash
# Build for production
npm run build

# Output will be in dist/ directory
```

## Project Structure

```
src/
├── app/
│   ├── app.ts                      # Main app component with signals
│   ├── app.html                    # App template
│   ├── app.css                     # App styles
│   └── threejs-scene.component.ts  # Three.js scene component
├── index.html                       # HTML entry point
├── main.ts                          # Bootstrap file
└── styles.css                       # Global styles
```

## Technologies Used

- [Angular](https://angular.io/) v20.3.0
- [Three.js](https://threejs.org/) v0.173.0
- TypeScript v5.9.2

## License

MIT License - see [LICENSE](LICENSE) file for details

