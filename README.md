# Inclusive Rwanda

A comprehensive educational website dedicated to teaching web accessibility principles and practices, with a focus on building inclusive digital experiences in Rwanda and beyond.

## 🌟 Project Overview

Inclusive Rwanda is an educational platform that provides:
- **Comprehensive accessibility education** covering WCAG guidelines and best practices
- **Practical implementation guides** with real-world code examples
- **Rwanda-specific context** connecting accessibility to local development goals
- **Interactive learning tools** and resources for developers
- **Community connections** linking to local organizations and initiatives

## 🚀 Live Demo

Visit the live site: [Inclusive Rwanda](https://inclusive-rwanda.vercel.app)

## 📋 Prerequisites

Before setting up this project, make sure you have the following installed on your system:

- **Node.js** (version 18.0 or higher)
  - Download from [nodejs.org](https://nodejs.org/)
  - Verify installation: `node --version`
- **npm** (comes with Node.js) or **yarn**
  - Verify npm installation: `npm --version`
- **Git** (for cloning the repository)
  - Download from [git-scm.com](https://git-scm.com/)
  - Verify installation: `git --version`

## 🛠️ Installation & Setup

### Step 1: Clone the Repository

```bash
# Clone the repository
git clone https://github.com/bienvenudev/inclusive-rwanda.git

# Navigate to the project directory
cd inclusive-rwanda
```

### Step 2: Install Dependencies

```bash
# Install all project dependencies
npm install
```

*Note: This will install all packages listed in `package.json` including React, TypeScript, Tailwind CSS, and other dependencies.*

### Step 3: Start the Development Server

```bash
# Start the development server
npm run dev
```

The application will start on `http://localhost:5173` (Vite default port).

### Step 4: Open in Browser

1. Open your web browser
2. Navigate to `http://localhost:5173`
3. You should see the Inclusive Rwanda homepage

## 📁 Project Structure

```
inclusive-rwanda/
├── public/                 # Static assets
├── src/                    # Source code
│   ├── components/         # Reusable React components
│   │   ├── Navigation.tsx  # Main navigation component
│   │   ├── Button.tsx      # Custom button component
│   │   └── ScrollToTop.tsx # Auto-scroll functionality
│   ├── pages/             # Page components
│   │   ├── Home.tsx       # Homepage with POUR principles
│   │   ├── WhyItMatters.tsx # Impact and statistics
│   │   ├── QuickStart.tsx   # Implementation guide
│   │   └── Resources.tsx    # Tools and community resources
│   ├── assets/            # Images, icons, etc.
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles and Tailwind imports
├── package.json           # Project dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite build tool configuration
└── README.md              # This file
```

## 🧪 Available Scripts

In the project directory, you can run:

### Development
```bash
# Start development server with hot reload
npm run dev
```

### Building
```bash
# Create production build
npm run build
```

### Preview
```bash
# Preview the production build locally
npm run preview
```

### Type Checking
```bash
# Run TypeScript type checking
npm run type-check
```

### Linting
```bash
# Run ESLint to check code quality
npm run lint

# Fix linting issues automatically
npm run lint:fix
```

## 🎨 Technology Stack

- **React 19** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe JavaScript for better development experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS v4** - Utility-first CSS framework for rapid styling
- **React Router** - Client-side routing for single-page application
- **Headless UI** - Unstyled, accessible UI components

## ♿ Accessibility Features

This project implements comprehensive accessibility features:

- **Semantic HTML** structure with proper heading hierarchy
- **ARIA attributes** for enhanced screen reader support
- **Keyboard navigation** support throughout the application
- **Focus management** with visible focus indicators
- **Color contrast** meeting WCAG AA standards
- **Skip links** for efficient navigation
- **Responsive design** that works on all devices
- **Screen reader testing** with real user feedback

## 🌍 Browser Support

This application supports all modern browsers:
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## 🔧 Troubleshooting

### Common Issues

**Port already in use:**
```bash
# Kill process on port 5173
npx kill-port 5173

# Or start on a different port
npm run dev -- --port 3000
```

**Node modules issues:**
```bash
# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

**TypeScript errors:**
```bash
# Run type checking
npm run type-check

# Check for missing types
npm install @types/node @types/react @types/react-dom --save-dev
```

### Development Tips

1. **Hot Reload**: The development server automatically refreshes when you make changes
2. **Console Errors**: Check browser developer console for any runtime errors
3. **Network Tab**: Monitor API calls and asset loading in browser dev tools
4. **Accessibility Testing**: Use browser accessibility audits (Chrome DevTools → Lighthouse)

## 📝 Contributing

This project was created for educational purposes as part of ALU's software engineering program.

### Local Development Workflow

1. **Create a new branch**: `git checkout -b feature/your-feature-name`
2. **Make changes**: Edit files and test locally
3. **Test thoroughly**: Run `npm run build` to ensure production build works
4. **Check accessibility**: Use screen readers and accessibility tools
5. **Commit changes**: `git commit -m "Add feature description"`
6. **Push to repository**: `git push origin feature/your-feature-name`

## 📚 Learning Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Web Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/)
- [A11y Project](https://www.a11yproject.com/)

## 📄 License

This project is for educational use.

## 👨‍💻 Author

**Bienvenu Cyuzuzo**  
Software Engineering Student at African Leadership University  
*Building inclusive technology for Rwanda and beyond*

---

## 🆘 Need Help?

If you encounter any issues:

1. **Check the console** for error messages
2. **Verify all prerequisites** are installed correctly
3. **Clear cache and reinstall** dependencies if needed
4. **Check browser compatibility** - use a modern browser
5. **Review troubleshooting section** above for common solutions

Remember: This is an accessibility-focused project, so test with screen readers and keyboard navigation to get the full experience!

---

*Last updated: November 2025*