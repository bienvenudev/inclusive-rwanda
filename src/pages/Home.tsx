import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <main id="main-content" className="min-h-[calc(100vh-80px)] py-8">
      {/* Hero Section */}
      <section className="text-center py-16 bg-linear-to-br from-gray-900 to-gray-800 mx-4 mb-16 rounded-none md:rounded-xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-linear-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent">
          Inclusive Rwanda
        </h1>
        <p className="text-lg md:text-2xl text-white mb-4 font-medium">
          Building a more accessible web for everyone in Rwanda and beyond
        </p>
        <p className="text-base md:text-lg text-gray-100 max-w-2xl mx-auto leading-relaxed px-4">
          Learn why web accessibility <span><a className='underline text-blue-500' href="https://www.a11yproject.com/posts/a11y-and-other-numeronyms/" target='blank'>(A11Y)</a></span> matters and how you can make your websites
          usable by everyone, including people with disabilities.
        </p>
      </section>

      {/* Introduction Section */}
      <section className="py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-white">
          Introduction
        </h2>
        <p className="text-base md:text-lg text-gray-100 max-w-3xl mx-auto mb-8 leading-relaxed px-4">
          Web accessibility ensures that websites, tools, and technologies are designed
          and developed so that people with disabilities can use them effectively.
        </p>
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative aspect-video max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg shadow-black/30">
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
          <p id="intro-video-description" className="text-sm text-gray-400 mt-4 italic">
            This video provides an introduction to web accessibility and W3C standards.
          </p>
        </div>
      </section>

      {/* What is Web Accessibility Section */}
      <section className="py-16 text-center bg-gray-900 mx-4 my-16 rounded-none md:rounded-xl">
        <div className="px-4">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-white">
            What is Web Accessibility?
          </h2>
          <p className="text-base md:text-lg text-gray-100 max-w-3xl mx-auto mb-12 leading-relaxed">
            Web accessibility means that people with disabilities can equally perceive,
            understand, navigate, and interact with websites and tools. It also means
            that they can contribute equally without barriers.
          </p>

          {/* POUR Principles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-gray-800 border border-gray-600 p-6 rounded-lg transition-all duration-300 hover:border-blue-500 hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-blue-500 mb-2">Perceivable</h3>
              <p className="text-gray-100 text-sm leading-relaxed">Information must be presentable in ways users can perceive</p>
            </div>
            <div className="bg-gray-800 border border-gray-600 p-6 rounded-lg transition-all duration-300 hover:border-blue-500 hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-blue-500 mb-2">Operable</h3>
              <p className="text-gray-100 text-sm leading-relaxed">Interface components must be operable by all users</p>
            </div>
            <div className="bg-gray-800 border border-gray-600 p-6 rounded-lg transition-all duration-300 hover:border-blue-500 hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-blue-500 mb-2">Understandable</h3>
              <p className="text-gray-100 text-sm leading-relaxed">Information and UI operation must be understandable</p>
            </div>
            <div className="bg-gray-800 border border-gray-600 p-6 rounded-lg transition-all duration-300 hover:border-blue-500 hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-blue-500 mb-2">Robust</h3>
              <p className="text-gray-100 text-sm leading-relaxed">Content must be robust enough for various assistive technologies</p>
            </div>
          </div>

          {/* Second Video */}
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative aspect-video max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg shadow-black/30">
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
            <p id="perspectives-video-description" className="text-sm text-gray-400 mt-4 italic">
              This compilation video showcases 10 different perspectives on web accessibility.
            </p>
          </div>
        </div>
      </section>

      {/* Why Start Here Section */}
      <section className="py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-white">
          Why Start Here?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-900 border border-gray-600 p-8 rounded-xl transition-all duration-300 hover:border-blue-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/15">
            <h3 className="text-2xl font-semibold text-blue-500 mb-4">1 in 7 people</h3>
            <p className="text-gray-100 leading-relaxed">worldwide have a disability that affects how they use the web</p>
          </div>
          <div className="bg-gray-900 border border-gray-600 p-8 rounded-xl transition-all duration-300 hover:border-blue-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/15">
            <h3 className="text-2xl font-semibold text-blue-500 mb-4">Legal requirement</h3>
            <p className="text-gray-100 leading-relaxed">Many countries require websites to be accessible</p>
          </div>
          <div className="bg-gray-900 border border-gray-600 p-8 rounded-xl transition-all duration-300 hover:border-blue-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/15">
            <h3 className="text-2xl font-semibold text-blue-500 mb-4">Better for everyone</h3>
            <p className="text-gray-100 leading-relaxed">Accessible design improves usability for all users</p>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-16 text-center bg-gray-900 mx-4 my-16 rounded-none md:rounded-xl">
        <div className="px-4">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-gray-50">
            See Accessibility in Action
          </h2>
          <p className="text-base md:text-lg text-gray-200 max-w-3xl mx-auto mb-12 leading-relaxed">
            Experience the difference good accessibility makes. Try these interactive examples:
          </p>

          {/* Demo Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

            {/* Color Contrast Demo */}
            <div className="bg-gray-800 border border-gray-600 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-500 mb-4">Color Contrast Example</h3>
              <div className="space-y-4">
                <div className="p-4 bg-gray-200 rounded" style={{ backgroundColor: '#cccccc' }}>
                  <p className="text-gray-400 text-sm" style={{ color: '#999999' }}>
                    ❌ Poor contrast - Hard to read (Fails WCAG)
                  </p>
                </div>
                <div className="p-4 bg-white rounded">
                  <p className="text-gray-900 text-sm font-medium">
                    ✅ Good contrast - Easy to read (Passes WCAG AA)
                  </p>
                </div>
                <p className="text-xs text-gray-400 italic">
                  Color contrast ratio should be at least 4.5:1 for normal text
                </p>
              </div>
            </div>

            {/* Alt Text Demo */}
            <div className="bg-gray-800 border border-gray-600 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-500 mb-4">Alt Text Importance</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="w-20 h-20 bg-blue-500 rounded mx-auto flex items-center justify-center">
                    <span className="text-white font-bold">IMG</span>
                  </div>
                  <p className="text-sm text-gray-200">
                    🔊 Screen reader says: <em>"Image"</em> (not helpful!)
                  </p>
                </div>
                <div className="border-t border-gray-600 pt-4">
                  <div className="w-20 h-20 bg-green-500 rounded mx-auto flex items-center justify-center">
                    <span className="text-white font-bold">📊</span>
                  </div>
                  <p className="text-sm text-gray-200">
                    🔊 Screen reader says: <em>"Chart showing 75% increase in website accessibility compliance in Rwanda from 2020 to 2024"</em>
                  </p>
                </div>
              </div>
            </div>

            {/* Keyboard Navigation Demo */}
            <div className="bg-gray-800 border border-gray-600 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-500 mb-4">Keyboard Navigation</h3>
              <div className="space-y-4">
                <p className="text-sm text-gray-200 mb-3">
                  Try pressing Tab to navigate through these buttons:
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <button className="px-3 py-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-400 focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-800">
                    Button 1
                  </button>
                  <button className="px-3 py-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-400 focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-800">
                    Button 2
                  </button>
                  <button className="px-3 py-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-400 focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-800">
                    Button 3
                  </button>
                </div>
                <p className="text-xs text-gray-400 italic">
                  Notice the focus indicators (blue outline) as you tab through
                </p>
              </div>
            </div>

            {/* Heading Structure Demo */}
            <div className="bg-gray-800 border border-gray-600 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-500 mb-4">Proper Heading Structure</h3>
              <div className="text-left space-y-2">
                <div className="text-2xl font-bold text-gray-50">H1: Main Page Title</div>
                <div className="text-xl font-semibold text-gray-50 ml-4">H2: Section Title</div>
                <div className="text-lg font-medium text-gray-50 ml-8">H3: Subsection</div>
                <div className="text-base text-gray-50 ml-12">H4: Sub-subsection</div>
                <p className="text-xs text-gray-400 italic mt-3">
                  Screen readers use this hierarchy to help users navigate content
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Learning Path Visualization */}
      <section className="py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-gray-50">
          Your Learning Journey
        </h2>
        <p className="text-base md:text-lg text-gray-200 max-w-3xl mx-auto mb-12 leading-relaxed">
          Follow this path to become an accessibility champion in Rwanda's tech community
        </p>

        <div className="max-w-4xl mx-auto">
          {/* Progress Path */}
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-600 rounded-full transform -translate-y-1/2 hidden md:block"></div>
            <div className="absolute top-1/2 left-0 w-1/4 h-1 bg-blue-500 rounded-full transform -translate-y-1/2 hidden md:block"></div>

            {/* Learning Steps */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

              {/* Step 1: You Are Here */}
              <div className="relative">
                <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl shadow-lg">
                  ✓
                </div>
                <h3 className="text-lg font-semibold text-gray-50 mb-2">Getting Started</h3>
                <p className="text-sm text-gray-200 mb-3">Understanding the basics</p>
                <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  You are here!
                </div>
                <p className="text-xs text-gray-400 mt-2">⏱️ 10 minutes</p>
              </div>

              {/* Step 2: Why It Matters */}
              <div className="relative">
                <div className="bg-gray-900 border-2 border-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-500 font-bold text-xl">
                  2
                </div>
                <h3 className="text-lg font-semibold text-gray-50 mb-2">Why It Matters</h3>
                <p className="text-sm text-gray-200 mb-3">Learn the impact and importance</p>
                <Link
                  to="/why-it-matters"
                  className="bg-gray-900 hover:bg-gray-800 border border-gray-600 text-gray-50 px-4 py-2 rounded-md text-sm transition-colors duration-200 inline-block"
                >
                  Start Learning
                </Link>
                <p className="text-xs text-gray-400 mt-2">⏱️ 15 minutes</p>
              </div>

              {/* Step 3: Quick Start */}
              <div className="relative">
                <div className="bg-gray-900 border-2 border-gray-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400 font-bold text-xl">
                  3
                </div>
                <h3 className="text-lg font-semibold text-gray-400 mb-2">Quick Start Guide</h3>
                <p className="text-sm text-gray-400 mb-3">Hands-on implementation tips</p>
                <button disabled className="bg-gray-900 border border-gray-600 text-gray-400 px-4 py-2 rounded-md text-sm cursor-not-allowed opacity-60">
                  Locked
                </button>
                <p className="text-xs text-gray-400 mt-2">⏱️ 25 minutes</p>
              </div>

              {/* Step 4: Resources */}
              <div className="relative">
                <div className="bg-gray-900 border-2 border-gray-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400 font-bold text-xl">
                  4
                </div>
                <h3 className="text-lg font-semibold text-gray-400 mb-2">Resources & Tools</h3>
                <p className="text-sm text-gray-400 mb-3">Deep dive into tools and community</p>
                <button disabled className="bg-gray-900 border border-gray-600 text-gray-400 px-4 py-2 rounded-md text-sm cursor-not-allowed opacity-60">
                  Locked
                </button>
                <p className="text-xs text-gray-400 mt-2">⏱️ 20 minutes</p>
              </div>

            </div>
          </div>

          {/* Learning Stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-900 border border-gray-600 p-4 rounded-lg">
              <div className="text-2xl font-bold text-blue-500 mb-1">70min</div>
              <div className="text-sm text-gray-200">Total Learning Time</div>
            </div>
            <div className="bg-gray-900 border border-gray-600 p-4 rounded-lg">
              <div className="text-2xl font-bold text-blue-500 mb-1">4</div>
              <div className="text-sm text-gray-200">Learning Modules</div>
            </div>
            <div className="bg-gray-900 border border-gray-600 p-4 rounded-lg">
              <div className="text-2xl font-bold text-blue-500 mb-1">∞</div>
              <div className="text-sm text-gray-200">Impact Potential</div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-50">
          Ready to Start Your Journey?
        </h2>
        <p className="text-base md:text-lg text-gray-200 max-w-2xl mx-auto mb-8 px-4">
          Now that you understand the basics, let's explore why accessibility matters for Rwanda's digital future.
        </p>
        <Link
          to="/why-it-matters"
          className="inline-flex items-center bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-950"
        >
          Continue Learning: Why It Matters
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </section>
    </main>
  );
};

export default Home;