import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';

const QuickStart: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const toggleCheck = (item: string) => {
    setCheckedItems(prev =>
      prev.includes(item)
        ? prev.filter(i => i !== item)
        : [...prev, item]
    );
  };

  return (
    <main id="main-content" className="min-h-[calc(100vh-80px)] py-8">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-gray-900 to-gray-800 mx-[-1rem] mb-16 rounded-none md:rounded-xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent">
          Quick Start Guide
        </h1>
        <p className="text-lg md:text-2xl text-gray-50 mb-4 font-medium">
          7 Essential Steps to Accessible Web Development
        </p>
        <p className="text-base md:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed px-4">
          Practical tips you can implement today to make your websites more inclusive and accessible.
        </p>
      </section>

      {/* Quick Wins Checklist */}
      <section className="py-16">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center text-gray-50">
          Your Accessibility Checklist
        </h2>
        <p className="text-center text-gray-200 mb-12 max-w-2xl mx-auto">
          Start with these high-impact, easy-to-implement improvements. Check them off as you go!
        </p>

        <div className="max-w-4xl mx-auto space-y-4">
          {[
            { id: 'semantic', text: 'Use semantic HTML elements (header, nav, main, footer)', impact: 'High' },
            { id: 'alt-text', text: 'Add meaningful alt text to all images', impact: 'High' },
            { id: 'headings', text: 'Structure content with proper heading hierarchy (H1 → H2 → H3)', impact: 'High' },
            { id: 'contrast', text: 'Ensure color contrast meets WCAG AA standards (4.5:1 ratio)', impact: 'High' },
            { id: 'keyboard', text: 'Test all functionality with keyboard navigation only', impact: 'High' },
            { id: 'focus', text: 'Provide visible focus indicators for interactive elements', impact: 'Medium' },
            { id: 'labels', text: 'Add proper labels to all form inputs', impact: 'High' },
            { id: 'errors', text: 'Provide clear, helpful error messages', impact: 'Medium' },
            { id: 'captions', text: 'Add captions or transcripts to video content', impact: 'High' },
            { id: 'lang', text: 'Set the page language attribute (lang="en" or lang="rw")', impact: 'Low' }
          ].map((item) => (
            <div
              key={item.id}
              className="flex items-center p-4 bg-gray-900 border border-gray-600 rounded-lg hover:border-blue-500 transition-colors duration-200"
            >
              <button
                onClick={() => toggleCheck(item.id)}
                className={`w-6 h-6 rounded border-2 mr-4 flex items-center justify-center transition-all duration-200 ${checkedItems.includes(item.id)
                  ? 'bg-blue-500 border-blue-500 text-white'
                  : 'border-gray-600 hover:border-blue-500'
                  }`}
                aria-label={`Toggle ${item.text}`}
              >
                {checkedItems.includes(item.id) && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
              <div className="flex-1">
                <span className={`text-gray-50 ${checkedItems.includes(item.id) ? 'line-through opacity-60' : ''}`}>
                  {item.text}
                </span>
                <span className={`ml-3 px-2 py-1 rounded-full text-xs font-medium ${item.impact === 'High' ? 'bg-red-500/20 text-red-400' :
                  item.impact === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-green-500/20 text-green-400'
                  }`}>
                  {item.impact} Impact
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <div className="text-lg font-semibold text-gray-50">
            Progress: {checkedItems.length}/10 completed
          </div>
          <div className="w-full max-w-md mx-auto mt-2 bg-gray-900 rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(checkedItems.length / 10) * 100}%` }}
            ></div>
          </div>
        </div>
      </section>

      {/* Code Examples Tabs */}
      <section className="py-16 bg-gray-900 mx-[-1rem] my-16 rounded-none md:rounded-xl">
        <div className="px-4">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center text-gray-50">
            Code Examples & Best Practices
          </h2>

          <div className="max-w-6xl mx-auto">
            <TabGroup>
              <TabList className="flex flex-wrap max-w-fit justify-center mb-8 bg-gray-800 rounded-lg p-1 mx-auto">
                <Tab className="px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 data-[selected]:bg-blue-500 data-[selected]:text-white data-[hover]:text-gray-50 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300">
                  Semantic HTML
                </Tab>
                <Tab className="px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 data-[selected]:bg-blue-500 data-[selected]:text-white data-[hover]:text-gray-50 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300">
                  Accessible Forms
                </Tab>
                <Tab className="px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 data-[selected]:bg-blue-500 data-[selected]:text-white data-[hover]:text-gray-50 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300">
                  Images & Media
                </Tab>
                <Tab className="px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 data-[selected]:bg-blue-500 data-[selected]:text-white data-[hover]:text-gray-50 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300">
                  Navigation
                </Tab>
              </TabList>

              <TabPanels>
                {/* Semantic HTML Panel */}
                <TabPanel>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-red-400 mb-4">❌ Poor Structure</h3>
                      <div className="bg-gray-950 border border-gray-600 rounded-lg p-4 font-mono text-sm">
                        <pre className="text-gray-200">
                          {`<div class="header">
  <div class="logo">My Site</div>
  <div class="menu">
    <div>Home</div>
    <div>About</div>
  </div>
</div>
<div class="content">
  <div class="title">Welcome</div>
  <div class="text">Content here...</div>
</div>`}
                        </pre>
                      </div>
                      <p className="text-xs text-gray-400 mt-2">
                        Screen readers can't understand the page structure
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-green-400 mb-4">✅ Semantic Structure</h3>
                      <div className="bg-gray-950 border border-gray-600 rounded-lg p-4 font-mono text-sm">
                        <pre className="text-gray-200">
                          {`<header>
  <h1>My Site</h1>
  <nav aria-label="Main navigation">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  </nav>
</header>
<main>
  <h1>Welcome</h1>
  <p>Content here...</p>
</main>`}
                        </pre>
                      </div>
                      <p className="text-xs text-green-400 mt-2">
                        Clear structure that assistive technologies understand
                      </p>
                    </div>
                  </div>
                </TabPanel>

                {/* Forms Panel */}
                <TabPanel>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-red-400 mb-4">❌ Inaccessible Form</h3>
                      <div className="bg-gray-950 border border-gray-600 rounded-lg p-4 font-mono text-sm">
                        <pre className="text-gray-200">
                          {`<form>
  <div>Name</div>
  <input type="text">
  
  <div>Email</div>
  <input type="email">
  
  <div style="color: red">
    Error: Invalid email
  </div>
  
  <button>Submit</button>
</form>`}
                        </pre>
                      </div>
                      <p className="text-xs text-gray-400 mt-2">
                        No connection between labels and inputs
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-green-400 mb-4">✅ Accessible Form</h3>
                      <div className="bg-gray-950 border border-gray-600 rounded-lg p-4 font-mono text-sm">
                        <pre className="text-gray-200">
                          {`<form>
  <label for="name">Name *</label>
  <input 
    type="text" 
    id="name"
    required
    aria-describedby="name-error">
  
  <label for="email">Email *</label>
  <input 
    type="email" 
    id="email"
    required
    aria-describedby="email-error">
  
  <div id="email-error" 
       role="alert"
       aria-live="polite">
    Error: Please enter valid email
  </div>
  
  <button type="submit">
    Submit Form
  </button>
</form>`}
                        </pre>
                      </div>
                      <p className="text-xs text-green-400 mt-2">
                        Proper labels, error handling, and ARIA attributes
                      </p>
                    </div>
                  </div>
                </TabPanel>

                {/* Images Panel */}
                <TabPanel>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-red-400 mb-4">❌ Poor Alt Text</h3>
                      <div className="bg-gray-950 border border-gray-600 rounded-lg p-4 font-mono text-sm">
                        <pre className="text-gray-200">
                          {`<!-- No alt text -->
<img src="chart.png">

<!-- Redundant alt text -->
<img src="photo.jpg" 
     alt="Photo of person">

<!-- Unhelpful alt text -->
<img src="graph.png" 
     alt="Graph">`}
                        </pre>
                      </div>
                      <p className="text-xs text-gray-400 mt-2">
                        Screen readers can't convey meaningful information
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-green-400 mb-4">✅ Descriptive Alt Text</h3>
                      <div className="bg-gray-950 border border-gray-600 rounded-lg p-4 font-mono text-sm">
                        <pre className="text-gray-200">
                          {`<!-- Descriptive alt text -->
<img src="chart.png" 
     alt="Bar chart showing 60% 
     increase in mobile usage 
     from 2020 to 2024">

<!-- Person's role/context -->
<img src="ceo.jpg" 
     alt="Sarah Mukamana, CEO of 
     TechRwanda, speaking at 
     conference">

<!-- Decorative images -->
<img src="decoration.png" 
     alt="" 
     role="presentation">`}
                        </pre>
                      </div>
                      <p className="text-xs text-green-400 mt-2">
                        Meaningful descriptions that convey the image's purpose
                      </p>
                    </div>
                  </div>
                </TabPanel>

                {/* Navigation Panel */}
                <TabPanel>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-red-400 mb-4">❌ Poor Navigation</h3>
                      <div className="bg-gray-950 border border-gray-600 rounded-lg p-4 font-mono text-sm">
                        <pre className="text-gray-200">
                          {`<div class="nav">
  <span onclick="navigate()">
    Home
  </span>
  <span onclick="navigate()">
    About
  </span>
</div>

<!-- No skip link -->
<!-- No focus indicators -->`}
                        </pre>
                      </div>
                      <p className="text-xs text-gray-400 mt-2">
                        Not keyboard accessible, no semantic meaning
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-green-400 mb-4">✅ Accessible Navigation</h3>
                      <div className="bg-gray-950 border border-gray-600 rounded-lg p-4 font-mono text-sm">
                        <pre className="text-gray-200">
                          {`<!-- Skip link for screen readers -->
<a href="#main" class="skip-link">
  Skip to main content
</a>

<nav aria-label="Main navigation">
  <ul>
    <li>
      <a href="/" 
         aria-current="page">
        Home
      </a>
    </li>
    <li>
      <a href="/about">About</a>
    </li>
  </ul>
</nav>

<main id="main">
  <!-- Page content -->
</main>`}
                        </pre>
                      </div>
                      <p className="text-xs text-green-400 mt-2">
                        Keyboard accessible with proper ARIA labels
                      </p>
                    </div>
                  </div>
                </TabPanel>
              </TabPanels>
            </TabGroup>
          </div>
        </div>
      </section>

      {/* Testing Tools */}
      <section className="py-16">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center text-gray-50">
          Testing Your Work
        </h2>
        <p className="text-center text-gray-200 mb-12 max-w-2xl mx-auto">
          Use these tools to validate your accessibility improvements
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-gray-900 border border-gray-600 p-6 rounded-lg">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-50 mb-2">Keyboard Testing</h3>
            <p className="text-gray-200 text-sm mb-3">
              Navigate your entire site using only the Tab, Enter, and arrow keys. Can you reach everything?
            </p>
            <div className="text-xs text-blue-500">
              💡 Try it: Unplug your mouse and navigate this page!
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-600 p-6 rounded-lg">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-50 mb-2">Screen Reader</h3>
            <p className="text-gray-200 text-sm mb-3">
              Test with free screen readers like NVDA (Windows) or VoiceOver (Mac) to hear how your site sounds.
            </p>
            <div className="text-xs text-blue-500">
              💡 Mac: Cmd+F5 to enable VoiceOver
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-600 p-6 rounded-lg">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-50 mb-2">Browser DevTools</h3>
            <p className="text-gray-200 text-sm mb-3">
              Use Chrome/Firefox accessibility audits to automatically detect common issues.
            </p>
            <div className="text-xs text-blue-500">
              💡 Chrome: F12 → Lighthouse → Accessibility
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-600 p-6 rounded-lg">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-50 mb-2">Color Contrast</h3>
            <p className="text-gray-200 text-sm mb-3">
              Check contrast ratios with tools like WebAIM's contrast checker or Colour Contrast Analyser.
            </p>
            <div className="text-xs text-blue-500">
              💡 Minimum: 4.5:1 for normal text
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-600 p-6 rounded-lg">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-50 mb-2">WAVE Tool</h3>
            <p className="text-gray-200 text-sm mb-3">
              Web Accessibility Evaluation Tool provides visual feedback about accessibility issues.
            </p>
            <div className="text-xs text-blue-500">
              💡 Available as browser extension
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-600 p-6 rounded-lg">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-50 mb-2">User Testing</h3>
            <p className="text-gray-200 text-sm mb-3">
              Test with real users who have disabilities. Their feedback is invaluable for improvement.
            </p>
            <div className="text-xs text-blue-500">
              💡 Contact local disability organizations
            </div>
          </div>

        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 text-center bg-gray-900 mx-[-1rem] my-16 rounded-none md:rounded-xl">
        <div className="px-4">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-50">
            You're Making a Difference!
          </h2>
          <p className="text-base md:text-lg text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
            With these tools and techniques, you're well on your way to building more inclusive web experiences.
            Ready to dive deeper into resources and join the community?
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/resources"
              className="inline-flex items-center bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Explore Resources & Tools
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>

            <Link
              to="/why-it-matters"
              className="inline-flex items-center bg-gray-800 hover:bg-gray-950 border border-gray-600 text-gray-50 px-6 py-4 rounded-lg text-base font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              ← Back to Why It Matters
            </Link>
          </div>

          <div className="mt-8 text-sm text-gray-400">
            ⏱️ Final section: <span className="text-blue-500">Resources & Community</span> (20 minutes)
          </div>
        </div>
      </section>
    </main>
  );
};

export default QuickStart;