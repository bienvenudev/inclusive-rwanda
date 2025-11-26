# Contributing to Inclusive Rwanda

Thank you for your interest in contributing to Inclusive Rwanda! This guide provides detailed information for developers who want to contribute improvements, fixes, and new features.

## Table of Contents
- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Types of Contributions](#types-of-contributions)
- [Accessibility Guidelines](#accessibility-guidelines)
- [Testing Requirements](#testing-requirements)
- [Pull Request Process](#pull-request-process)
- [Community & Support](#community--support)

## Code of Conduct

This project follows our [Code of Conduct](../CODE_OF_CONDUCT.md). By participating, you agree to uphold this code.

## Getting Started

### Prerequisites
- Node.js 18.0+ 
- Git
- Modern browser for testing
- Screen reader for accessibility testing (NVDA, JAWS, VoiceOver, or browser extensions)

### Development Setup
1. **Fork** the repository on GitHub
2. **Clone** your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/inclusive-rwanda.git
   cd inclusive-rwanda
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start development server**:
   ```bash
   npm run dev
   ```
5. **Verify setup**: Visit `http://localhost:5173`

## Development Workflow

### Branch Strategy
- `main` - Production-ready code
- `develop` - Integration branch for features
- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation updates

### Commit Standards
Use conventional commits:
- `feat: add new accessibility feature`
- `fix: resolve keyboard navigation issue`
- `docs: update installation guide`
- `style: improve contrast ratios`
- `refactor: simplify navigation component`
- `test: add screen reader tests`

## Types of Contributions

### 🐛 Bug Fixes
- Accessibility violations (WCAG compliance)
- Cross-browser compatibility issues
- Mobile responsiveness problems
- Performance bottlenecks

### ✨ New Features
- Interactive learning tools
- New educational content sections
- Enhanced navigation features
- Additional accessibility examples

### 📚 Documentation
- Code documentation improvements
- Tutorial enhancements
- Example code updates
- Translation contributions

### 🎨 Design & UX
- Accessibility improvements
- Performance optimizations
- Mobile experience enhancements
- Visual design refinements

## Accessibility Guidelines

### WCAG Compliance
All contributions must meet **WCAG 2.1 AA standards**:
- Color contrast ratio ≥ 4.5:1 for normal text
- Color contrast ratio ≥ 3:1 for large text
- Keyboard accessibility for all interactive elements
- Proper heading hierarchy (h1 → h2 → h3)
- Alternative text for images
- Focus indicators visible and logical

### Testing with Screen Readers

**Desktop Testing:**
- **Windows**: NVDA (free) or JAWS
- **macOS**: VoiceOver (built-in)
- **Linux**: Orca (built-in)

**Mobile Testing:**
- **iOS**: VoiceOver
- **Android**: TalkBack

**Browser Extensions:**
- Screen Reader for Google Chrome
- WAVE Web Accessibility Evaluator
- axe DevTools

### Keyboard Navigation
Test all functionality using only:
- `Tab` / `Shift+Tab` - Navigate between elements
- `Enter` / `Space` - Activate buttons/links
- `Escape` - Close modals/menus
- `Arrow keys` - Navigate within components

## Testing Requirements

### Before Submitting
Run these checks:

```bash
# Build verification
npm run build

# Type checking
npm run type-check

# Linting
npm run lint

# Fix auto-fixable issues
npm run lint:fix
```

### Accessibility Testing Checklist
- [ ] **Keyboard navigation** works throughout
- [ ] **Screen reader** announces content properly
- [ ] **Color contrast** meets WCAG AA standards
- [ ] **Focus indicators** are visible
- [ ] **Headings** follow logical hierarchy
- [ ] **Alt text** provided for images
- [ ] **ARIA labels** used appropriately
- [ ] **Mobile responsive** on various devices
- [ ] **Browser compatibility** (Chrome, Firefox, Safari, Edge)

### Manual Testing
1. **Disable JavaScript** - ensure basic functionality
2. **Increase text size** to 200% - verify layout
3. **Test with high contrast mode** - ensure visibility
4. **Navigate without mouse** - keyboard only
5. **Test with slow network** - verify performance

## Pull Request Process

### Before Creating PR
1. **Update your fork**:
   ```bash
   git checkout main
   git pull upstream main
   git checkout your-feature-branch
   git rebase main
   ```
2. **Test thoroughly** using accessibility checklist
3. **Update documentation** if needed
4. **Add/update tests** for new functionality

### PR Guidelines
- **Clear title**: Describe what you've changed
- **Detailed description**: Explain why and how
- **Link related issues**: Use `Fixes #123` syntax
- **Screenshots**: Include for UI changes
- **Test results**: Confirm accessibility testing completed
- **Breaking changes**: Clearly document any

### PR Template
When creating a PR, include:
- Description of changes
- Type of change (bug fix, feature, docs, etc.)
- Accessibility testing completed
- Screenshots (if applicable)
- Additional context

## Code Style Guidelines

### TypeScript
- Use TypeScript for all new code
- Follow existing patterns and interfaces
- Add JSDoc comments for complex functions
- Prefer explicit types over `any`

### React Components
- Use functional components with hooks
- Follow naming conventions: `PascalCase`
- Use semantic HTML elements
- Include proper ARIA attributes
- Implement keyboard event handlers

### CSS/Tailwind
- Use Tailwind CSS classes
- Maintain consistent spacing scale
- Ensure sufficient color contrast
- Test responsive breakpoints
- Use semantic color names

### File Structure
```
src/
├── components/          # Reusable UI components
├── pages/              # Page-level components
├── config/             # Configuration files
├── assets/             # Static assets
└── types/              # TypeScript type definitions
```

## Educational Content Guidelines

### Writing Standards
- **Clear and accessible language** (8th-grade reading level)
- **Practical examples** with real code
- **Step-by-step instructions** for implementations
- **Rwanda-specific context** where relevant
- **Inclusive language** throughout

### Code Examples
- **Complete, runnable examples** 
- **Accessibility best practices** demonstrated
- **Clear comments** explaining key concepts
- **Multiple implementation approaches** when helpful

## Community & Support

### Getting Help
- **GitHub Discussions**: Questions and community chat
- **Issues**: Bug reports and feature requests  
- **Email**: For sensitive matters

### Recognition
Contributors will be:
- Added to README.md contributors section
- Credited in release notes
- Mentioned in project updates

### Learning Resources
- [WCAG 2.1 Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/)
- [A11y Project](https://www.a11yproject.com/)
- [WebAIM](https://webaim.org/)
- [React Accessibility Docs](https://react.dev/learn/accessibility)

## Issue Labels

- `good first issue` - Beginner-friendly
- `help wanted` - Community input needed
- `accessibility` - A11y related
- `bug` - Something isn't working
- `enhancement` - New feature request
- `documentation` - Documentation improvements

Thank you for contributing to making the web more accessible! 🌍♿