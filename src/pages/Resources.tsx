import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Resources: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('tools');

  return (
    <main id="main-content" className="min-h-[calc(100vh-80px)] py-8">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-tertiary)] mx-[-1rem] mb-16 rounded-none md:rounded-xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[var(--accent-primary)] to-blue-300 bg-clip-text text-transparent">
          Resources & Community
        </h1>
        <p className="text-lg md:text-2xl text-[var(--text-primary)] mb-4 font-medium">
          Tools, Learning Materials & Rwanda Community
        </p>
        <p className="text-base md:text-lg text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed px-4">
          Everything you need to continue your accessibility journey, from browser extensions to local communities in Rwanda.
        </p>
      </section>

      {/* Category Navigation */}
      <section className="mb-12">
        <div className="flex flex-wrap justify-center gap-2 bg-[var(--bg-secondary)] rounded-lg p-2 max-w-4xl mx-auto">
          {[
            { id: 'tools', label: '🛠️ Tools & Extensions', count: '15+' },
            { id: 'learning', label: '📚 Learning Resources', count: '20+' },
            { id: 'rwanda', label: '🇷🇼 Rwanda Community', count: '8+' },
            { id: 'guidelines', label: '📋 Guidelines & Standards', count: '12+' }
          ].map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-3 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-2 ${activeCategory === category.id
                  ? 'bg-[var(--accent-primary)] text-white shadow-lg'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)]'
                }`}
            >
              <span>{category.label}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${activeCategory === category.id
                  ? 'bg-white/20'
                  : 'bg-[var(--accent-primary)]/20 text-[var(--accent-primary)]'
                }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Tools & Extensions Section */}
      {activeCategory === 'tools' && (
        <section className="py-8">
          <h2 className="text-3xl font-semibold mb-8 text-center text-[var(--text-primary)]">
            Essential Tools & Browser Extensions
          </h2>

          {/* Testing Tools */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-[var(--text-primary)] flex items-center">
              <span className="w-8 h-8 bg-[var(--accent-primary)] rounded-lg flex items-center justify-center mr-3">🧪</span>
              Accessibility Testing Tools
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              <div className="bg-[var(--bg-secondary)] border border-[var(--border-default)] p-6 rounded-lg hover:border-[var(--accent-primary)] transition-colors duration-200">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white font-bold">W</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)]">WAVE</h4>
                    <p className="text-xs text-[var(--text-muted)]">WebAIM</p>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">
                  Visual accessibility evaluation tool that shows errors and warnings directly on your webpage.
                </p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">Free</span>
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">Browser Extension</span>
                </div>
              </div>

              <div className="bg-[var(--bg-secondary)] border border-[var(--border-default)] p-6 rounded-lg hover:border-[var(--accent-primary)] transition-colors duration-200">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white font-bold">A</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)]">axe DevTools</h4>
                    <p className="text-xs text-[var(--text-muted)]">Deque Systems</p>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">
                  Industry-standard accessibility testing integrated into browser developer tools.
                </p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">Free</span>
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded">DevTools</span>
                </div>
              </div>

              <div className="bg-[var(--bg-secondary)] border border-[var(--border-default)] p-6 rounded-lg hover:border-[var(--accent-primary)] transition-colors duration-200">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white font-bold">L</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)]">Lighthouse</h4>
                    <p className="text-xs text-[var(--text-muted)]">Google</p>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">
                  Built into Chrome DevTools, provides accessibility audits along with performance metrics.
                </p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">Free</span>
                  <span className="px-2 py-1 bg-gray-500/20 text-gray-400 text-xs rounded">Built-in</span>
                </div>
              </div>

              <div className="bg-[var(--bg-secondary)] border border-[var(--border-default)] p-6 rounded-lg hover:border-[var(--accent-primary)] transition-colors duration-200">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white font-bold">C</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)]">Colour Contrast Analyser</h4>
                    <p className="text-xs text-[var(--text-muted)]">TPG</p>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">
                  Desktop app for checking color contrast ratios and simulating color blindness.
                </p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">Free</span>
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded">Desktop App</span>
                </div>
              </div>

              <div className="bg-[var(--bg-secondary)] border border-[var(--border-default)] p-6 rounded-lg hover:border-[var(--accent-primary)] transition-colors duration-200">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white font-bold">S</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)]">Stark</h4>
                    <p className="text-xs text-[var(--text-muted)]">Stark Lab</p>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">
                  Design plugin for Figma, Sketch, and Adobe XD to check accessibility during design phase.
                </p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded">Freemium</span>
                  <span className="px-2 py-1 bg-pink-500/20 text-pink-400 text-xs rounded">Design Tools</span>
                </div>
              </div>

              <div className="bg-[var(--bg-secondary)] border border-[var(--border-default)] p-6 rounded-lg hover:border-[var(--accent-primary)] transition-colors duration-200">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white font-bold">T</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)]">taba11y</h4>
                    <p className="text-xs text-[var(--text-muted)]">Appt.org</p>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">
                  Browser extension that visualizes the tab order and keyboard navigation flow of web pages.
                </p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">Free</span>
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">Browser Extension</span>
                </div>
              </div>

            </div>
          </div>

          {/* Development Tools */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-[var(--text-primary)] flex items-center">
              <span className="w-8 h-8 bg-[var(--accent-primary)] rounded-lg flex items-center justify-center mr-3">⚡</span>
              Development & Code Tools
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              <div className="bg-[var(--bg-secondary)] border border-[var(--border-default)] p-6 rounded-lg hover:border-[var(--accent-primary)] transition-colors duration-200">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white font-bold">VS</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)]">axe Accessibility Linter</h4>
                    <p className="text-xs text-[var(--text-muted)]">VS Code Extension</p>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">
                  Real-time accessibility linting in your code editor as you write HTML and JSX.
                </p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">Free</span>
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">VS Code</span>
                </div>
              </div>

              <div className="bg-[var(--bg-secondary)] border border-[var(--border-default)] p-6 rounded-lg hover:border-[var(--accent-primary)] transition-colors duration-200">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white font-bold">E</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)]">eslint-plugin-jsx-a11y</h4>
                    <p className="text-xs text-[var(--text-muted)]">NPM Package</p>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">
                  ESLint plugin that catches accessibility issues in React JSX elements during development.
                </p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">Free</span>
                  <span className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs rounded">React</span>
                </div>
              </div>

              <div className="bg-[var(--bg-secondary)] border border-[var(--border-default)] p-6 rounded-lg hover:border-[var(--accent-primary)] transition-colors duration-200">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white font-bold">P</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)]">Pa11y</h4>
                    <p className="text-xs text-[var(--text-muted)]">Command Line Tool</p>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">
                  Command-line accessibility testing tool that can be integrated into CI/CD pipelines.
                </p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">Free</span>
                  <span className="px-2 py-1 bg-gray-500/20 text-gray-400 text-xs rounded">CLI</span>
                </div>
              </div>

            </div>
          </div>

        </section>
      )}

      {/* Learning Resources Section */}
      {activeCategory === 'learning' && (
        <section className="py-8">
          <h2 className="text-3xl font-semibold mb-8 text-center text-[var(--text-primary)]">
            Learning Resources & Documentation
          </h2>

          {/* Official Documentation */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-[var(--text-primary)] flex items-center">
              <span className="w-8 h-8 bg-[var(--accent-primary)] rounded-lg flex items-center justify-center mr-3">📚</span>
              Official Documentation & Guidelines
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div className="bg-[var(--bg-secondary)] border border-[var(--border-default)] p-6 rounded-lg">
                <h4 className="font-semibold text-[var(--text-primary)] mb-2">Web Content Accessibility Guidelines (WCAG) 2.1</h4>
                <p className="text-sm text-[var(--text-secondary)] mb-4">
                  The international standard for web accessibility. Comprehensive guidelines with success criteria and techniques.
                </p>
                <div className="flex gap-2 mb-3">
                  <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded">Level A</span>
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded">Level AA</span>
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">Level AAA</span>
                </div>
                <p className="text-xs text-[var(--text-muted)]">w3.org/WAI/WCAG21/quickref/</p>
              </div>

              <div className="bg-[var(--bg-secondary)] border border-[var(--border-default)] p-6 rounded-lg">
                <h4 className="font-semibold text-[var(--text-primary)] mb-2">MDN Web Accessibility</h4>
                <p className="text-sm text-[var(--text-secondary)] mb-4">
                  Practical accessibility documentation with code examples and best practices for web developers.
                </p>
                <div className="flex gap-2 mb-3">
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">Beginner Friendly</span>
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">Code Examples</span>
                </div>
                <p className="text-xs text-[var(--text-muted)]">developer.mozilla.org/en-US/docs/Web/Accessibility</p>
              </div>

              <div className="bg-[var(--bg-secondary)] border border-[var(--border-default)] p-6 rounded-lg">
                <h4 className="font-semibold text-[var(--text-primary)] mb-2">WebAIM Resources</h4>
                <p className="text-sm text-[var(--text-secondary)] mb-4">
                  Practical tutorials, articles, and tools for implementing web accessibility from Utah State University.
                </p>
                <div className="flex gap-2 mb-3">
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded">Screen Readers</span>
                  <span className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs rounded">Testing</span>
                </div>
                <p className="text-xs text-[var(--text-muted)]">webaim.org</p>
              </div>

              <div className="bg-[var(--bg-secondary)] border border-[var(--border-default)] p-6 rounded-lg">
                <h4 className="font-semibold text-[var(--text-primary)] mb-2">A11y Project</h4>
                <p className="text-sm text-[var(--text-secondary)] mb-4">
                  Community-driven effort to make digital accessibility easier with patterns and resources.
                </p>
                <div className="flex gap-2 mb-3">
                  <span className="px-2 py-1 bg-teal-500/20 text-teal-400 text-xs rounded">Community</span>
                  <span className="px-2 py-1 bg-pink-500/20 text-pink-400 text-xs rounded">Patterns</span>
                </div>
                <p className="text-xs text-[var(--text-muted)]">a11yproject.com</p>
              </div>

            </div>
          </div>

          {/* Online Courses */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-[var(--text-primary)] flex items-center">
              <span className="w-8 h-8 bg-[var(--accent-primary)] rounded-lg flex items-center justify-center mr-3">🎓</span>
              Online Courses & Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              <div className="bg-[var(--bg-secondary)] border border-[var(--border-default)] p-6 rounded-lg">
                <h4 className="font-semibold text-[var(--text-primary)] mb-2">Web Accessibility by Google</h4>
                <p className="text-sm text-[var(--text-secondary)] mb-3">Udacity course covering fundamentals of accessible web development.</p>
                <div className="flex gap-2 mb-3">
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">Free</span>
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">4 weeks</span>
                </div>
              </div>

              <div className="bg-[var(--bg-secondary)] border border-[var(--border-default)] p-6 rounded-lg">
                <h4 className="font-semibold text-[var(--text-primary)] mb-2">Digital Accessibility</h4>
                <p className="text-sm text-[var(--text-secondary)] mb-3">University of Southampton course on Futurelearn covering WCAG principles.</p>
                <div className="flex gap-2 mb-3">
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">Free</span>
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded">Certificate</span>
                </div>
              </div>

              <div className="bg-[var(--bg-secondary)] border border-[var(--border-default)] p-6 rounded-lg">
                <h4 className="font-semibold text-[var(--text-primary)] mb-2">Deque University</h4>
                <p className="text-sm text-[var(--text-secondary)] mb-3">Comprehensive accessibility training with certification programs for developers.</p>
                <div className="flex gap-2 mb-3">
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded">Paid</span>
                  <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded">Professional</span>
                </div>
              </div>

            </div>
          </div>

          {/* Books & Publications */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-[var(--text-primary)] flex items-center">
              <span className="w-8 h-8 bg-[var(--accent-primary)] rounded-lg flex items-center justify-center mr-3">📖</span>
              Recommended Books
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div className="bg-[var(--bg-secondary)] border border-[var(--border-default)] p-6 rounded-lg">
                <h4 className="font-semibold text-[var(--text-primary)] mb-2">"Inclusive Design Patterns" by Heydon Pickering</h4>
                <p className="text-sm text-[var(--text-secondary)] mb-3">
                  Practical patterns for creating accessible user interface components and layouts.
                </p>
                <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">Design Patterns</span>
              </div>

              <div className="bg-[var(--bg-secondary)] border border-[var(--border-default)] p-6 rounded-lg">
                <h4 className="font-semibold text-[var(--text-primary)] mb-2">"Accessibility for Everyone" by Laura Kalbag</h4>
                <p className="text-sm text-[var(--text-secondary)] mb-3">
                  A practical guide to building accessible websites that work for everyone.
                </p>
                <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">Beginner Friendly</span>
              </div>

            </div>
          </div>

        </section>
      )}

      {/* Rwanda Community Section */}
      {activeCategory === 'rwanda' && (
        <section className="py-8">
          <h2 className="text-3xl font-semibold mb-8 text-center text-[var(--text-primary)]">
            Rwanda Accessibility Community
          </h2>

          {/* Government & Policy */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-[var(--text-primary)] flex items-center">
              <span className="w-8 h-8 bg-[var(--accent-primary)] rounded-lg flex items-center justify-center mr-3">🏛️</span>
              Government & Policy Initiatives
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div className="bg-[var(--bg-secondary)] border border-[var(--border-default)] p-6 rounded-lg">
                <h4 className="font-semibold text-[var(--text-primary)] mb-2">Ministry of ICT and Innovation (MINICT)</h4>
                <p className="text-sm text-[var(--text-secondary)] mb-4">
                  Leading Rwanda's digital transformation with inclusive technology policies and accessibility standards.
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-[var(--text-secondary)]">• Digital Rwanda 2024 Strategy</p>
                  <p className="text-[var(--text-secondary)]">• ICT Accessibility Guidelines</p>
                  <p className="text-[var(--text-secondary)]">• Smart Rwanda Master Plan</p>
                </div>
                <p className="text-xs text-[var(--text-muted)] mt-3">minict.gov.rw</p>
              </div>

              <div className="bg-[var(--bg-secondary)] border border-[var(--border-default)] p-6 rounded-lg">
                <h4 className="font-semibold text-[var(--text-primary)] mb-2">Rwanda Utilities Regulatory Authority (RURA)</h4>
                <p className="text-sm text-[var(--text-secondary)] mb-4">
                  Regulating telecommunications and ICT services with focus on universal access and inclusion.
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-[var(--text-secondary)]">• ICT Accessibility Standards</p>
                  <p className="text-[var(--text-secondary)]">• Digital Inclusion Policies</p>
                  <p className="text-[var(--text-secondary)]">• Universal Access Fund</p>
                </div>
                <p className="text-xs text-[var(--text-muted)] mt-3">rura.rw</p>
              </div>

            </div>
          </div>

          {/* Organizations */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-[var(--text-primary)] flex items-center">
              <span className="w-8 h-8 bg-[var(--accent-primary)] rounded-lg flex items-center justify-center mr-3">🤝</span>
              Disability Rights & Advocacy Organizations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              <div className="bg-[var(--bg-secondary)] border border-[var(--border-default)] p-6 rounded-lg">
                <h4 className="font-semibold text-[var(--text-primary)] mb-2">National Union of Disability Organizations in Rwanda (NUDOR)</h4>
                <p className="text-sm text-[var(--text-secondary)] mb-3">
                  Umbrella organization advocating for disability rights and digital inclusion.
                </p>
                <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">Advocacy</span>
              </div>

              <div className="bg-[var(--bg-secondary)] border border-[var(--border-default)] p-6 rounded-lg">
                <h4 className="font-semibold text-[var(--text-primary)] mb-2">Rwanda National Union of the Deaf (RNUD)</h4>
                <p className="text-sm text-[var(--text-secondary)] mb-3">
                  Promoting sign language accessibility and digital inclusion for the deaf community.
                </p>
                <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded">Deaf Community</span>
              </div>

              <div className="bg-[var(--bg-secondary)] border border-[var(--border-default)] p-6 rounded-lg">
                <h4 className="font-semibold text-[var(--text-primary)] mb-2">Union of the Blind Rwanda (UBR)</h4>
                <p className="text-sm text-[var(--text-secondary)] mb-3">
                  Advocating for digital accessibility and assistive technology for visually impaired persons.
                </p>
                <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">Visual Impairment</span>
              </div>

            </div>
          </div>

          {/* Tech Community */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-[var(--text-primary)] flex items-center">
              <span className="w-8 h-8 bg-[var(--accent-primary)] rounded-lg flex items-center justify-center mr-3">💻</span>
              Tech Communities & Events
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div className="bg-[var(--bg-secondary)] border border-[var(--border-default)] p-6 rounded-lg">
                <h4 className="font-semibold text-[var(--text-primary)] mb-2">Kigali Tech Community</h4>
                <p className="text-sm text-[var(--text-secondary)] mb-4">
                  Local developers, designers, and tech enthusiasts promoting inclusive design practices.
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-[var(--text-secondary)]">• Monthly accessibility workshops</p>
                  <p className="text-[var(--text-secondary)]">• Code review sessions</p>
                  <p className="text-[var(--text-secondary)]">• Inclusive design hackathons</p>
                </div>
              </div>

              <div className="bg-[var(--bg-secondary)] border border-[var(--border-default)] p-6 rounded-lg">
                <h4 className="font-semibold text-[var(--text-primary)] mb-2">Women in Tech Rwanda</h4>
                <p className="text-sm text-[var(--text-secondary)] mb-4">
                  Empowering women in technology with focus on inclusive and accessible digital solutions.
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-[var(--text-secondary)]">• Accessibility training programs</p>
                  <p className="text-[var(--text-secondary)]">• Mentorship for inclusive design</p>
                  <p className="text-[var(--text-secondary)]">• Community outreach projects</p>
                </div>
              </div>

            </div>
          </div>

          {/* Educational Institutions */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-[var(--text-primary)] flex items-center">
              <span className="w-8 h-8 bg-[var(--accent-primary)] rounded-lg flex items-center justify-center mr-3">🎓</span>
              Educational Institutions & Programs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div className="bg-[var(--bg-secondary)] border border-[var(--border-default)] p-6 rounded-lg">
                <h4 className="font-semibold text-[var(--text-primary)] mb-2">African Leadership University (ALU)</h4>
                <p className="text-sm text-[var(--text-secondary)] mb-3">
                  Computing and software engineering programs emphasizing inclusive technology and social impact.
                </p>
                <span className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs rounded">Higher Education</span>
              </div>

              <div className="bg-[var(--bg-secondary)] border border-[var(--border-default)] p-6 rounded-lg">
                <h4 className="font-semibold text-[var(--text-primary)] mb-2">University of Rwanda - College of Science and Technology</h4>
                <p className="text-sm text-[var(--text-secondary)] mb-3">
                  ICT programs incorporating accessibility and universal design principles in curriculum.
                </p>
                <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded">Public University</span>
              </div>

            </div>
          </div>

        </section>
      )}

      {/* Guidelines & Standards Section */}
      {activeCategory === 'guidelines' && (
        <section className="py-8">
          <h2 className="text-3xl font-semibold mb-8 text-center text-[var(--text-primary)]">
            Guidelines & Standards Reference
          </h2>

          {/* WCAG Quick Reference */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-[var(--text-primary)] flex items-center">
              <span className="w-8 h-8 bg-[var(--accent-primary)] rounded-lg flex items-center justify-center mr-3">📋</span>
              WCAG 2.1 Quick Reference
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">

              <div className="bg-[var(--bg-secondary)] border border-[var(--border-default)] p-6 rounded-lg">
                <h4 className="font-semibold text-red-400 mb-4 flex items-center">
                  <span className="w-6 h-6 bg-red-500 rounded mr-2 flex items-center justify-center text-white text-xs font-bold">A</span>
                  Level A (Minimum)
                </h4>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li>• Provide text alternatives for images</li>
                  <li>• Provide captions for videos</li>
                  <li>• Ensure keyboard accessibility</li>
                  <li>• Use proper heading structure</li>
                  <li>• Provide meaningful link text</li>
                  <li>• Ensure page has valid HTML</li>
                </ul>
              </div>

              <div className="bg-[var(--bg-secondary)] border border-[var(--border-default)] p-6 rounded-lg">
                <h4 className="font-semibold text-yellow-400 mb-4 flex items-center">
                  <span className="w-6 h-6 bg-yellow-500 rounded mr-2 flex items-center justify-center text-white text-xs font-bold">AA</span>
                  Level AA (Standard)
                </h4>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li>• Color contrast ratio of 4.5:1</li>
                  <li>• Text can be resized to 200%</li>
                  <li>• Focus is clearly visible</li>
                  <li>• Audio content has text alternative</li>
                  <li>• Forms have proper labels</li>
                  <li>• Error identification and suggestions</li>
                </ul>
              </div>

              <div className="bg-[var(--bg-secondary)] border border-[var(--border-default)] p-6 rounded-lg">
                <h4 className="font-semibold text-green-400 mb-4 flex items-center">
                  <span className="w-6 h-6 bg-green-500 rounded mr-2 flex items-center justify-center text-white text-xs font-bold">AAA</span>
                  Level AAA (Enhanced)
                </h4>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li>• Color contrast ratio of 7:1</li>
                  <li>• Sign language interpretation</li>
                  <li>• Audio descriptions for video</li>
                  <li>• Context-sensitive help</li>
                  <li>• No timing restrictions</li>
                  <li>• Reading level appropriate</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Implementation Checklist */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-[var(--text-primary)] flex items-center">
              <span className="w-8 h-8 bg-[var(--accent-primary)] rounded-lg flex items-center justify-center mr-3">✅</span>
              Implementation Checklist
            </h3>
            <div className="bg-[var(--bg-secondary)] border border-[var(--border-default)] p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                <div>
                  <h4 className="font-semibold text-[var(--text-primary)] mb-4">🎨 Design Phase</h4>
                  <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                    <li className="flex items-start">
                      <span className="w-4 h-4 bg-[var(--accent-primary)] rounded-sm mr-2 mt-0.5 flex-shrink-0"></span>
                      Design with sufficient color contrast
                    </li>
                    <li className="flex items-start">
                      <span className="w-4 h-4 bg-[var(--accent-primary)] rounded-sm mr-2 mt-0.5 flex-shrink-0"></span>
                      Don't rely solely on color to convey information
                    </li>
                    <li className="flex items-start">
                      <span className="w-4 h-4 bg-[var(--accent-primary)] rounded-sm mr-2 mt-0.5 flex-shrink-0"></span>
                      Design clear focus indicators
                    </li>
                    <li className="flex items-start">
                      <span className="w-4 h-4 bg-[var(--accent-primary)] rounded-sm mr-2 mt-0.5 flex-shrink-0"></span>
                      Ensure interactive elements are large enough
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-[var(--text-primary)] mb-4">💻 Development Phase</h4>
                  <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                    <li className="flex items-start">
                      <span className="w-4 h-4 bg-[var(--accent-primary)] rounded-sm mr-2 mt-0.5 flex-shrink-0"></span>
                      Use semantic HTML elements
                    </li>
                    <li className="flex items-start">
                      <span className="w-4 h-4 bg-[var(--accent-primary)] rounded-sm mr-2 mt-0.5 flex-shrink-0"></span>
                      Add proper ARIA labels and roles
                    </li>
                    <li className="flex items-start">
                      <span className="w-4 h-4 bg-[var(--accent-primary)] rounded-sm mr-2 mt-0.5 flex-shrink-0"></span>
                      Implement keyboard navigation
                    </li>
                    <li className="flex items-start">
                      <span className="w-4 h-4 bg-[var(--accent-primary)] rounded-sm mr-2 mt-0.5 flex-shrink-0"></span>
                      Provide meaningful alt text for images
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-[var(--text-primary)] mb-4">🧪 Testing Phase</h4>
                  <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                    <li className="flex items-start">
                      <span className="w-4 h-4 bg-[var(--accent-primary)] rounded-sm mr-2 mt-0.5 flex-shrink-0"></span>
                      Test with keyboard navigation only
                    </li>
                    <li className="flex items-start">
                      <span className="w-4 h-4 bg-[var(--accent-primary)] rounded-sm mr-2 mt-0.5 flex-shrink-0"></span>
                      Test with screen reader software
                    </li>
                    <li className="flex items-start">
                      <span className="w-4 h-4 bg-[var(--accent-primary)] rounded-sm mr-2 mt-0.5 flex-shrink-0"></span>
                      Run automated accessibility audits
                    </li>
                    <li className="flex items-start">
                      <span className="w-4 h-4 bg-[var(--accent-primary)] rounded-sm mr-2 mt-0.5 flex-shrink-0"></span>
                      Test with users who have disabilities
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-[var(--text-primary)] mb-4">🚀 Launch & Maintenance</h4>
                  <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                    <li className="flex items-start">
                      <span className="w-4 h-4 bg-[var(--accent-primary)] rounded-sm mr-2 mt-0.5 flex-shrink-0"></span>
                      Provide accessibility statement
                    </li>
                    <li className="flex items-start">
                      <span className="w-4 h-4 bg-[var(--accent-primary)] rounded-sm mr-2 mt-0.5 flex-shrink-0"></span>
                      Monitor for accessibility issues
                    </li>
                    <li className="flex items-start">
                      <span className="w-4 h-4 bg-[var(--accent-primary)] rounded-sm mr-2 mt-0.5 flex-shrink-0"></span>
                      Gather user feedback
                    </li>
                    <li className="flex items-start">
                      <span className="w-4 h-4 bg-[var(--accent-primary)] rounded-sm mr-2 mt-0.5 flex-shrink-0"></span>
                      Regular accessibility audits
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>

        </section>
      )}

      {/* Call to Action */}
      <section className="py-16 text-center bg-[var(--bg-secondary)] mx-[-1rem] my-16 rounded-none md:rounded-xl">
        <div className="px-4">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-[var(--text-primary)]">
            Ready to Build Inclusive Rwanda?
          </h2>
          <p className="text-base md:text-lg text-[var(--text-secondary)] max-w-3xl mx-auto mb-8 leading-relaxed">
            You now have all the tools, knowledge, and community connections to start building accessible web experiences.
            Every small step towards accessibility makes a big difference for users in Rwanda and beyond.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              to="/quick-start"
              className="inline-flex items-center bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--accent-focus)] focus:ring-offset-2 focus:ring-offset-[var(--bg-secondary)]"
            >
              ← Start Your Accessibility Journey
            </Link>

            <Link
              to="/"
              className="inline-flex items-center bg-[var(--bg-tertiary)] hover:bg-[var(--bg-primary)] border border-[var(--border-default)] text-[var(--text-primary)] px-6 py-4 rounded-lg text-base font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--accent-focus)] focus:ring-offset-2 focus:ring-offset-[var(--bg-secondary)]"
            >
              Back to Home
            </Link>
          </div>

          <div className="text-sm text-[var(--text-muted)] space-y-1">
            <p>🌟 <span className="text-[var(--accent-primary)]">Remember:</span> Accessibility is not a destination, it's a journey</p>
            <p>🤝 <span className="text-[var(--accent-primary)]">Together:</span> We can make the web inclusive for all Rwandans</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Resources;