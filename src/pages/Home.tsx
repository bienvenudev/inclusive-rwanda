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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            <div className="bg-gray-800 border border-gray-600 p-6 rounded-lg transition-all duration-300 hover:border-blue-500 hover:-translate-y-1">
              <h3 className="text-2xl font-semibold text-blue-500 mb-3">Perceivable</h3>
              <p className="text-gray-100 text-base leading-relaxed">Information must be presentable in ways users can perceive</p>
            </div>
            <div className="bg-gray-800 border border-gray-600 p-6 rounded-lg transition-all duration-300 hover:border-blue-500 hover:-translate-y-1">
              <h3 className="text-2xl font-semibold text-blue-500 mb-3">Operable</h3>
              <p className="text-gray-100 text-base leading-relaxed">Interface components must be operable by all users</p>
            </div>
            <div className="bg-gray-800 border border-gray-600 p-6 rounded-lg transition-all duration-300 hover:border-blue-500 hover:-translate-y-1">
              <h3 className="text-2xl font-semibold text-blue-500 mb-3">Understandable</h3>
              <p className="text-gray-100 text-base leading-relaxed">Information and UI operation must be understandable</p>
            </div>
            <div className="bg-gray-800 border border-gray-600 p-6 rounded-lg transition-all duration-300 hover:border-blue-500 hover:-translate-y-1">
              <h3 className="text-2xl font-semibold text-blue-500 mb-3">Robust</h3>
              <p className="text-gray-100 text-base leading-relaxed">Content must be robust enough for various assistive technologies</p>
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
            <h3 className="text-3xl font-semibold text-blue-500 mb-4">1 in 7 people</h3>
            <p className="text-gray-100 leading-relaxed">worldwide have a disability that affects how they use the web</p>
          </div>
          <div className="bg-gray-900 border border-gray-600 p-8 rounded-xl transition-all duration-300 hover:border-blue-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/15">
            <h3 className="text-3xl font-semibold text-blue-500 mb-4">Legal requirement</h3>
            <p className="text-gray-100 leading-relaxed">Many countries require websites to be accessible</p>
          </div>
          <div className="bg-gray-900 border border-gray-600 p-8 rounded-xl transition-all duration-300 hover:border-blue-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/15">
            <h3 className="text-3xl font-semibold text-blue-500 mb-4">Better for everyone</h3>
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
              <h3 className="text-2xl font-semibold text-blue-500 mb-6">Color Contrast Example</h3>
              <div className="space-y-4">
                <div className="p-4 bg-gray-200 rounded" style={{ backgroundColor: '#cccccc' }}>
                  <p className="text-gray-400 text-base" style={{ color: '#999999' }}>
                    ❌ Poor contrast - Hard to read (Fails WCAG)
                  </p>
                </div>
                <div className="p-4 bg-white rounded">
                  <p className="text-gray-900 text-base font-medium">
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
              <h3 className="text-2xl font-semibold text-blue-500 mb-6">Alt Text Importance</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="w-20 h-20 bg-blue-500 rounded mx-auto flex items-center justify-center">
                    <span className="text-white font-bold">IMG</span>
                  </div>
                  <p className="text-base text-gray-200">
                    🔊 Screen reader says: <em>"Image"</em> (not helpful!)
                  </p>
                </div>
                <div className="border-t border-gray-600 pt-4">
                  <div className="w-20 h-20 bg-green-500 rounded mx-auto flex items-center justify-center">
                    <span className="text-white font-bold">📊</span>
                  </div>
                  <p className="text-base text-gray-200">
                    🔊 Screen reader says: <em>"Chart showing 75% increase in website accessibility compliance in Rwanda from 2020 to 2024"</em>
                  </p>
                </div>
              </div>
            </div>

            {/* Keyboard Navigation Demo */}
            <div className="bg-gray-800 border border-gray-600 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-blue-500 mb-6">Keyboard Navigation</h3>
              <div className="space-y-4">
                <p className="text-base text-gray-200 mb-3">
                  Try pressing Tab to navigate through these buttons:
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <button className="px-4 py-3 bg-blue-500 text-white rounded text-base hover:bg-blue-400 focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-800">
                    Button 1
                  </button>
                  <button className="px-4 py-3 bg-blue-500 text-white rounded text-base hover:bg-blue-400 focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-800">
                    Button 2
                  </button>
                  <button className="px-4 py-3 bg-blue-500 text-white rounded text-base hover:bg-blue-400 focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-800">
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
              <h3 className="text-2xl font-semibold text-blue-500 mb-6">Proper Heading Structure</h3>
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

      {/* Quick Actions Section */}
      <section className="py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-gray-50">
          Take Action Now
        </h2>
        <p className="text-base md:text-lg text-gray-200 max-w-3xl mx-auto mb-12 leading-relaxed">
          Ready to make a difference? Use these tools to test your site, join the community, or spread awareness about web accessibility
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Test Your Site */}
          <a
            href="https://wave.webaim.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gray-900 border border-gray-600 hover:border-blue-500 p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/15 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
          >
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-50 mb-3 group-hover:text-blue-400 transition-colors duration-300">Test Your Site</h3>
            <p className="text-base text-gray-300 leading-relaxed">Check your website's accessibility with WAVE - get instant feedback and actionable improvements</p>
            <div className="mt-3 flex items-center justify-center text-sm text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span>Open WAVE Tool</span>
              <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </a>

          {/* Join Rwanda A11Y Community */}
          <Link
            to="/resources"
            className="group bg-gray-900 border border-gray-600 hover:border-green-500 p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/15 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-950"
          >
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-50 mb-3 group-hover:text-green-400 transition-colors duration-300">Join Community</h3>
            <p className="text-base text-gray-300 leading-relaxed">Connect with Rwanda's accessibility advocates, developers, and organizations driving change</p>
            <div className="mt-3 flex items-center justify-center text-sm text-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span>View Resources</span>
              <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          {/* Download Accessibility Checklist */}
          <a
            href="https://www.a11yproject.com/checklist/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gray-900 border border-gray-600 hover:border-purple-500 p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/15 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-950"
          >
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-50 mb-3 group-hover:text-purple-400 transition-colors duration-300">Get Checklist</h3>
            <p className="text-base text-gray-300 leading-relaxed">Download a comprehensive accessibility checklist to guide your development process</p>
            <div className="mt-3 flex items-center justify-center text-sm text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span>View Checklist</span>
              <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </a>

          {/* Share This Resource */}
          <div className="group bg-gray-900 border border-gray-600 hover:border-orange-500 p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/15">
            <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-50 mb-3 group-hover:text-orange-400 transition-colors duration-300">Share Resource</h3>
            <p className="text-base text-gray-300 leading-relaxed mb-4">Help spread accessibility awareness in Rwanda's tech community</p>

            {/* Social Share Buttons */}
            <div className="flex flex-col gap-2">
              <a
                href="https://www.linkedin.com/feed/?linkOrigin=LI_BADGE&shareActive=true&text=Learn%20Web%20Accessibility%20with%20Inclusive%20Rwanda%20-%20Building%20accessible%20websites%20for%20everyone%20in%20Rwanda%20and%20beyond!%20%F0%9F%8C%90%E2%99%BF%EF%B8%8F%0A%0Ahttps://inclusive-rwanda.vercel.app%0A%0A%23Accessibility%20%23Rwanda%20%23WebDev%20%23A11y%20%23InclusiveDesign"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
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
                className="flex items-center justify-center bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-md text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
                Twitter
              </a>
              <a
                href={`https://www.instagram.com`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-linear-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-md text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                title="Share on Instagram Stories"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Instagram
              </a>
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