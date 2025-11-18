import React from 'react';
import { Link } from 'react-router-dom';
import { IoAccessibility } from 'react-icons/io5';

const Home: React.FC = () => {
  return (
    <main id="main-content" aria-label="Main content: Inclusive Rwanda accessibility guide homepage" className="min-h-[calc(100vh-80px)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 rounded-full bg-linear-to-br from-purple-500/20 to-pink-500/20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-32 w-80 h-80 rounded-full bg-linear-to-br from-blue-500/20 to-cyan-500/20 blur-3xl"></div>
        </div>

        <div className="container relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 floating-element">
              <IoAccessibility className="w-8 h-8 text-purple-300" />
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight font-display">
              <span className="text-purple-400">
                Inclusive
              </span>
              <br />
              <span className="text-white">Rwanda</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-6 font-medium leading-relaxed font-alt">
              Building a more accessible web for everyone in Rwanda and beyond
            </p>

            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              Learn why web accessibility{' '}
              <a
                className="text-purple-400 hover:text-purple-300 underline underline-offset-4 decoration-purple-400/50 hover:decoration-purple-300 transition-colors duration-300"
                href="https://www.a11yproject.com/posts/a11y-and-other-numeronyms/"
                target="_blank"
                rel="noopener noreferrer"
              >
                (A11Y)
              </a>{' '}
              matters and how you can make your websites usable by everyone, including people with disabilities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/quick-start"
                className="group px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl focus-ring"
              >
                <span className="flex items-center">
                  Get Started
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>

              <Link
                to="/why-it-matters"
                className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/20 focus-ring"
              >
                Why It Matters
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              <span className="text-blue-400">
                Introduction
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Web accessibility ensures that websites, tools, and technologies are designed
              and developed so that people with disabilities can use them effectively.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="glass-card rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/20SHvU2PKsM"
                  title="Introduction to Web Accessibility and W3C Standards"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  aria-describedby="intro-video-description"
                ></iframe>
              </div>
              <div className="p-6 bg-white/5 backdrop-blur-sm">
                <p id="intro-video-description" className="text-sm text-gray-400 text-center italic">
                  This video provides an introduction to web accessibility and W3C standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Web Accessibility Section */}
      <section className="py-20 lg:py-32 relative">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-linear-to-br from-emerald-500/10 to-cyan-500/10 blur-3xl"></div>

        <div className="container relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              <span className="text-emerald-400">
                What is Web Accessibility?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Web accessibility means that people with disabilities can equally perceive,
              understand, navigate, and interact with websites and tools.
            </p>
          </div>

          {/* POUR Principles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="group glass-card p-8 rounded-2xl glow-on-hover border border-white/10">
              <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Perceivable</h3>
              <p className="text-gray-300 leading-relaxed">Information must be presentable in ways users can perceive</p>
            </div>

            <div className="group glass-card p-8 rounded-2xl glow-on-hover border border-white/10">
              <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Operable</h3>
              <p className="text-gray-300 leading-relaxed">Interface components must be operable by all users</p>
            </div>

            <div className="group glass-card p-8 rounded-2xl glow-on-hover border border-white/10">
              <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Understandable</h3>
              <p className="text-gray-300 leading-relaxed">Information and UI operation must be understandable</p>
            </div>

            <div className="group glass-card p-8 rounded-2xl glow-on-hover border border-white/10">
              <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Robust</h3>
              <p className="text-gray-300 leading-relaxed">Content must be robust enough for various assistive technologies</p>
            </div>
          </div>

          {/* Second Video */}
          <div className="max-w-5xl mx-auto">
            <div className="glass-card rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/3f31oufqFSM"
                  title="Web Accessibility Perspectives - Compilation of 10 Topics/Videos"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  aria-describedby="perspectives-video-description"
                ></iframe>
              </div>
              <div className="p-6 bg-white/5 backdrop-blur-sm">
                <p id="perspectives-video-description" className="text-sm text-gray-400 text-center italic">
                  This compilation video showcases 10 different perspectives on web accessibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Start Here Section */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              <span className="text-orange-400">
                Why Start Here?
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="group glass-card p-10 rounded-2xl text-center glow-on-hover border border-white/10">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-bold text-white">1/7</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">1 in 7 people</h3>
              <p className="text-gray-300 text-lg leading-relaxed">worldwide have a disability that affects how they use the web</p>
            </div>

            <div className="group glass-card p-10 rounded-2xl text-center glow-on-hover border border-white/10">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Legal requirement</h3>
              <p className="text-gray-300 text-lg leading-relaxed">Many countries require websites to be accessible</p>
            </div>

            <div className="group glass-card p-10 rounded-2xl text-center glow-on-hover border border-white/10">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-linear-to-br from-emerald-500 to-yellow-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Better for everyone</h3>
              <p className="text-gray-300 text-lg leading-relaxed">Accessible design improves usability for all users</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 lg:py-32 relative">
        {/* Background decoration */}
        <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-linear-to-br from-purple-500/10 to-blue-500/10 blur-3xl -translate-y-1/2"></div>

        <div className="container relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              <span className="text-purple-400">
                See Accessibility in Action
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Experience the difference good accessibility makes. Try these interactive examples:
            </p>
          </div>

          {/* Demo Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Color Contrast Demo */}
            <div className="glass-card rounded-2xl p-8 border border-white/10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-yellow-500 to-orange-500 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Color Contrast Example</h3>
              </div>

              <div className="space-y-6">
                <div className="p-6 rounded-xl border-2 border-red-500/50 bg-red-500/10">
                  <div className="flex items-center mb-2">
                    <span className="text-red-400 mr-2 font-bold" aria-hidden="true">✗</span>
                    <span className="font-semibold text-red-400">Poor Contrast Example</span>
                  </div>
                  <p className="text-gray-500 text-base" style={{ color: '#999999' }}>
                    This text is hard to read and fails WCAG guidelines
                  </p>
                </div>

                <div className="p-6 rounded-xl border-2 border-emerald-500/50 bg-emerald-500/10">
                  <div className="flex items-center mb-2">
                    <span className="text-emerald-400 mr-2 font-bold" aria-hidden="true">✓</span>
                    <span className="font-semibold text-emerald-400">Good Contrast Example</span>
                  </div>
                  <p className="text-white font-medium">
                    This text is easy to read and passes WCAG AA standards
                  </p>
                </div>

                <div className="text-center">
                  <div className="text-sm text-gray-400">
                    <span aria-hidden="true">💡 </span>
                    <span className="sr-only">Tip: </span>Color contrast ratio should be at least <span className="text-purple-400 font-semibold">4.5:1</span> for normal text
                  </div>
                </div>
              </div>
            </div>

            {/* Alt Text Demo */}
            <div className="glass-card rounded-2xl p-8 border border-white/10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Alt Text Importance</h3>
              </div>

              <div className="space-y-6">
                <div className="p-6 rounded-xl border-2 border-red-500/50 bg-red-500/10">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-24 h-24 bg-red-500 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-lg">IMG</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="text-purple-400 mr-2 font-bold" aria-hidden="true">🔊</span>
                    <span className="text-gray-300">Screen reader announces: </span>
                    <em className="text-red-400">"Image"</em>
                    <span className="text-gray-400"> (not helpful!)</span>
                  </div>
                </div>

                <div className="p-6 rounded-xl border-2 border-emerald-500/50 bg-emerald-500/10">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-24 h-24 bg-emerald-500 rounded-xl flex items-center justify-center">
                      <span className="text-4xl">📊</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="text-emerald-400 mr-2 font-bold" aria-hidden="true">🔊</span>
                    <span className="text-gray-300">Screen reader announces: </span>
                    <em className="text-emerald-400">"Chart showing 75% increase in website accessibility compliance in Rwanda from 2020 to 2024"</em>
                  </div>
                </div>
              </div>
            </div>

            {/* Keyboard Navigation Demo */}
            <div className="glass-card rounded-2xl p-8 border border-white/10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Keyboard Navigation</h3>
              </div>

              <div className="space-y-6">
                <p className="text-gray-300">
                  Try pressing <kbd className="px-2 py-1 bg-white/20 rounded text-sm font-mono">Tab</kbd> to navigate through these buttons:
                </p>

                <div className="flex flex-wrap gap-3 justify-center">
                  <button className="px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white rounded-xl font-medium transition-all duration-200 focus-ring hover:scale-105">
                    Button 1
                  </button>
                  <button className="px-6 py-3 bg-purple-500 hover:bg-purple-400 text-white rounded-xl font-medium transition-all duration-200 focus-ring hover:scale-105">
                    Button 2
                  </button>
                  <button className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white rounded-xl font-medium transition-all duration-200 focus-ring hover:scale-105">
                    Button 3
                  </button>
                </div>

                <div className="text-center">
                  <div className="text-sm text-gray-400">
                    <span aria-hidden="true">💡 </span><span className="sr-only">Tip: </span>Notice the focus indicators (purple glow) as you tab through
                  </div>
                </div>
              </div>
            </div>

            {/* Heading Structure Demo */}
            <div className="glass-card rounded-2xl p-8 border border-white/10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-emerald-500 to-yellow-500 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Proper Heading Structure</h3>
              </div>

              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="w-8 text-purple-400 font-mono text-sm">H1</span>
                  <span className="text-2xl font-bold text-white ml-2">Main Page Title</span>
                </div>
                <div className="flex items-center ml-4">
                  <span className="w-8 text-blue-400 font-mono text-sm">H2</span>
                  <span className="text-xl font-semibold text-gray-200 ml-2">Section Title</span>
                </div>
                <div className="flex items-center ml-8">
                  <span className="w-8 text-emerald-400 font-mono text-sm">H3</span>
                  <span className="text-lg font-medium text-gray-300 ml-2">Subsection</span>
                </div>
                <div className="flex items-center ml-12">
                  <span className="w-8 text-orange-400 font-mono text-sm">H4</span>
                  <span className="text-base text-gray-400 ml-2">Sub-subsection</span>
                </div>

                <div className="mt-6 p-4 bg-white/5 rounded-xl">
                  <div className="text-sm text-gray-400 italic">
                    <span aria-hidden="true">💡 </span><span className="sr-only">Tip: </span>Screen readers use this hierarchy to help users navigate content efficiently
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="py-20 lg:py-32 relative">
        {/* Background decoration */}
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-linear-to-br from-pink-500/10 to-orange-500/10 blur-3xl"></div>

        <div className="container relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              <span className="text-pink-400">
                Take Action Now
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Ready to make a difference? Use these tools to test your site, join the community, or spread awareness
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Test Your Site */}
            <a
              href="https://wave.webaim.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-card p-8 rounded-2xl glow-on-hover border border-white/10 text-center focus-ring"
              aria-label="Test Your Website with WAVE Accessibility Checker - Opens in new window"
            >
              <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">Test Your Site</h3>
              <p className="text-gray-300 leading-relaxed mb-4">Check your website's accessibility with WAVE - get instant feedback and actionable improvements</p>
              <div className="flex items-center justify-center text-sm text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Open WAVE Tool</span>
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>

            {/* Join Rwanda A11Y Community */}
            <Link
              to="/resources"
              className="group glass-card p-8 rounded-2xl glow-on-hover border border-white/10 text-center focus-ring"
              aria-label="Join Rwanda Accessibility Community - View resources and organizations"
            >
              <div className="w-16 h-16 bg-linear-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300">Join Community</h3>
              <p className="text-gray-300 leading-relaxed mb-4">Connect with Rwanda's accessibility advocates, developers, and organizations driving change</p>
              <div className="flex items-center justify-center text-sm text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>View Resources</span>
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            {/* Download Accessibility Checklist */}
            <a
              href="https://www.a11yproject.com/checklist/"
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-card p-8 rounded-2xl glow-on-hover border border-white/10 text-center focus-ring"
              aria-label="Download Accessibility Checklist from A11Y Project - Opens in new window"
            >
              <div className="w-16 h-16 bg-linear-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">Get Checklist</h3>
              <p className="text-gray-300 leading-relaxed mb-4">Download a comprehensive accessibility checklist to guide your development process</p>
              <div className="flex items-center justify-center text-sm text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>View Checklist</span>
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>

            {/* Share This Resource */}
            <div className="group glass-card p-8 rounded-2xl glow-on-hover border border-white/10 text-center">
              <div className="w-16 h-16 bg-linear-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">Share Resource</h3>
              <p className="text-gray-300 leading-relaxed mb-6">Help spread accessibility awareness in Rwanda's tech community</p>

              {/* Social Share Buttons */}
              <div className="flex flex-col gap-3">
                <a
                  href="https://www.linkedin.com/feed/?linkOrigin=LI_BADGE&shareActive=true&text=Learn%20Web%20Accessibility%20with%20Inclusive%20Rwanda%20-%20Building%20accessible%20websites%20for%20everyone%20in%20Rwanda%20and%20beyond!%20%F0%9F%8C%90%E2%99%BF%EF%B8%8F%0A%0Ahttps://inclusive-rwanda.vercel.app%0A%0A%23Accessibility%20%23Rwanda%20%23WebDev%20%23A11y%20%23InclusiveDesign"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 focus-ring hover:scale-105"
                  aria-label="Share Inclusive Rwanda accessibility guide on LinkedIn - Opens in new window"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="https://twitter.com/intent/tweet?text=Learn%20Web%20Accessibility%20with%20Inclusive%20Rwanda%20%F0%9F%8C%90%E2%99%BF%EF%B8%8F%20Building%20accessible%20websites%20for%20everyone%20in%20Rwanda%20and%20beyond!%20https%3A//inclusive-rwanda.vercel.app&hashtags=Accessibility,Rwanda,WebDev,A11y"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-sky-500 hover:bg-sky-400 text-white px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 focus-ring hover:scale-105"
                  aria-label="Share Inclusive Rwanda accessibility guide on Twitter - Opens in new window"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-20 lg:py-32 relative">
        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full bg-linear-to-br from-purple-500/5 to-blue-500/5 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

        <div className="container relative text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
            <span className="text-purple-400">
              Ready to Start Your Journey?
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Now that you understand the basics, let's explore why accessibility matters for Rwanda's digital future.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/why-it-matters"
              className="group px-10 py-5 bg-purple-600 hover:bg-purple-500 text-white rounded-2xl text-xl font-semibold transition-all duration-300 hover:shadow-xl focus-ring"
            >
              <span className="flex items-center">
                Continue Learning: Why It Matters
                <svg className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            <Link
              to="/quick-start"
              className="group px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white rounded-2xl text-xl font-semibold transition-all duration-300 hover:bg-white/20 hover:border-white/30 focus-ring"
            >
              Start Building
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;