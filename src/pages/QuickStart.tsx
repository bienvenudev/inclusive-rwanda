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
    <main id="main-content" aria-label="Main content: Quick Start Guide - tips for accessibility" className="min-h-[calc(100vh-80px)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 rounded-full bg-linear-to-br from-emerald-500/20 to-cyan-500/20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-32 w-80 h-80 rounded-full bg-linear-to-br from-blue-500/20 to-purple-500/20 blur-3xl"></div>
        </div>

        <div className="container relative text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 floating-element">
            <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight font-display">
            <span className="text-emerald-400">Quick Start</span>
            <br />
            <span className="text-white">Guide</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-6 font-medium leading-relaxed font-alt">
            7 Essential Steps to Accessible Web Development
          </p>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Practical tips you can implement today to make your websites more inclusive and accessible for everyone.
          </p>
        </div>
      </section>

      {/* Quick Wins Checklist */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              <span className="text-white">Your Accessibility Checklist</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Start with these high-impact, easy-to-implement improvements. Check them off as you go!
            </p>
          </div>

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
                className="group flex items-center p-6 glass-card rounded-2xl glow-on-hover border border-white/10"
              >
                <button
                  onClick={() => toggleCheck(item.id)}
                  className={`w-8 h-8 rounded-xl border-2 mr-6 flex items-center justify-center transition-all duration-300 focus-ring ${checkedItems.includes(item.id)
                    ? 'bg-purple-500 border-purple-500 text-white scale-110'
                    : 'border-white/30 hover:border-purple-500 group-hover:scale-110'
                    }`}
                  aria-label={`Toggle ${item.text}`}
                >
                  {checkedItems.includes(item.id) && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className={`text-lg font-medium text-white ${checkedItems.includes(item.id) ? 'line-through opacity-60' : ''}`}>
                      {item.text}
                    </span>
                    <span className={`w-fit px-3 py-1 rounded-full text-xs font-semibold ${item.impact === 'High' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                      item.impact === 'Medium' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                        'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                      }`}>
                      {item.impact} Impact
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="glass-card rounded-2xl p-8 max-w-md mx-auto border border-white/10">
              <div className="text-2xl font-bold text-white mb-4">
                Progress: <span className="text-purple-400">{checkedItems.length}/10</span> completed
              </div>
              <div className="w-full bg-white/10 rounded-full h-3 mb-2">
                <div
                  className="bg-purple-500 h-3 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${(checkedItems.length / 10) * 100}%` }}
                ></div>
              </div>
              <div className="text-sm text-gray-400">
                {checkedItems.length === 10 ? '🎉 Congratulations! You\'re ready to build accessible websites!' :
                  checkedItems.length >= 7 ? '🚀 Almost there! Keep going!' :
                    checkedItems.length >= 4 ? '💪 Great progress!' :
                      '📚 Let\'s get started!'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Tips Video */}
      <section className="py-20 lg:py-32 relative">
        <div className="container relative text-center">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              <span className="text-white">Essential Implementation Tips</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Now that you know what to implement, watch these practical tips to learn <em className="text-blue-400">how</em> to do it effectively.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="glass-card rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/qr0ujkLLgmE"
                  title="Web Accessibility: 7 Easy Tips for Developers"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  aria-describedby="tips-video-description"
                ></iframe>
              </div>
              <div className="p-6 bg-white/5 backdrop-blur-sm">
                <p id="tips-video-description" className="text-sm text-gray-400 text-center italic">
                  Seven practical accessibility tips that developers can implement quickly to improve user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Examples Tabs */}
      <section className="py-20 lg:py-32 relative">
        <div className="container relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              <span className="text-white">Code Examples & Best Practices</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              See practical before-and-after examples of accessible code implementation.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="glass-card rounded-2xl p-8 border border-white/10">
              <TabGroup>
                <TabList className="flex flex-wrap justify-center mb-12 bg-white/5 backdrop-blur-sm rounded-2xl p-2 border border-white/10">
                  <Tab className="px-6 py-3 rounded-xl text-base font-semibold transition-all duration-300 data-selected:bg-purple-500 data-selected:text-white data-selected:shadow-lg data-hover:text-gray-50 text-gray-300 focus-ring">
                    Semantic HTML
                  </Tab>
                  <Tab className="px-6 py-3 rounded-xl text-base font-semibold transition-all duration-300 data-selected:bg-purple-500 data-selected:text-white data-selected:shadow-lg data-hover:text-gray-50 text-gray-300 focus-ring">
                    Accessible Forms
                  </Tab>
                  <Tab className="px-6 py-3 rounded-xl text-base font-semibold transition-all duration-300 data-selected:bg-purple-500 data-selected:text-white data-selected:shadow-lg data-hover:text-gray-50 text-gray-300 focus-ring">
                    Images & Media
                  </Tab>
                  <Tab className="px-6 py-3 rounded-xl text-base font-semibold transition-all duration-300 data-selected:bg-purple-500 data-selected:text-white data-selected:shadow-lg data-hover:text-gray-50 text-gray-300 focus-ring">
                    Navigation
                  </Tab>
                </TabList>

                <TabPanels>
                  {/* Semantic HTML Panel */}
                  <TabPanel>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-400 mb-4">❌ Poor Structure</h3>
                        <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-xl p-6 font-mono text-sm">
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
                        <p className="text-sm text-red-400 mt-3 font-medium">
                          Screen readers can't understand the page structure
                        </p>
                      </div>

                      <div>
                        <h3 className="text-2xl font-semibold text-white mb-4">✅ Semantic Structure</h3>
                        <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-xl p-6 font-mono text-sm">
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
                        <p className="text-sm text-emerald-400 mt-3 font-medium">
                          Clear structure that assistive technologies understand
                        </p>
                      </div>
                    </div>
                  </TabPanel>

                  {/* Forms Panel */}
                  <TabPanel>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-2xl font-semibold text-red-400 mb-4">❌ Inaccessible Form</h3>
                        <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-xl p-6 font-mono text-sm">
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
                        <p className="text-sm text-red-400 mt-3 font-medium">
                          No connection between labels and inputs
                        </p>
                      </div>

                      <div>
                        <h3 className="text-2xl font-semibold text-emerald-400 mb-4">✅ Accessible Form</h3>
                        <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-xl p-6 font-mono text-sm">
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
                        <p className="text-sm text-emerald-400 mt-3 font-medium">
                          Proper labels, error handling, and ARIA attributes
                        </p>
                      </div>
                    </div>
                  </TabPanel>

                  {/* Images Panel */}
                  <TabPanel>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-2xl font-semibold text-red-400 mb-4">❌ Poor Alt Text</h3>
                        <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-xl p-6 font-mono text-sm">
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
                        <p className="text-sm text-red-400 mt-3 font-medium">
                          Screen readers can't convey meaningful information
                        </p>
                      </div>

                      <div>
                        <h3 className="text-2xl font-semibold text-emerald-400 mb-4">✅ Descriptive Alt Text</h3>
                        <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-xl p-6 font-mono text-sm">
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
                        <p className="text-sm text-emerald-400 mt-3 font-medium">
                          Meaningful descriptions that convey the image's purpose
                        </p>
                      </div>
                    </div>
                  </TabPanel>

                  {/* Navigation Panel */}
                  <TabPanel>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-2xl font-semibold text-red-400 mb-4">❌ Poor Navigation</h3>
                        <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-xl p-6 font-mono text-sm">
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
                        <p className="text-sm text-red-400 mt-3 font-medium">
                          Not keyboard accessible, no semantic meaning
                        </p>
                      </div>

                      <div>
                        <h3 className="text-2xl font-semibold text-emerald-400 mb-4">✅ Accessible Navigation</h3>
                        <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-xl p-6 font-mono text-sm">
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
                        <p className="text-sm text-emerald-400 mt-3 font-medium">
                          Keyboard accessible with proper ARIA labels
                        </p>
                      </div>
                    </div>
                  </TabPanel>
                </TabPanels>
              </TabGroup>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Testing Video */}
      <section className="py-20 lg:py-32 relative">
        <div className="container relative text-center">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              <span className="text-white">Validate Your Implementation</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              You've learned what to implement and seen the code examples. Now learn how to test and validate that your accessibility features work correctly.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="glass-card rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/cOmehxAU_4s"
                  title="How to Test a Website for Accessibility"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  aria-describedby="testing-video-description"
                ></iframe>
              </div>
              <div className="p-6 bg-white/5 backdrop-blur-sm">
                <p id="testing-video-description" className="text-sm text-gray-400 text-center italic">
                  Comprehensive guide to testing websites for accessibility using various tools and techniques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Tools */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              <span className="text-white">Essential Testing Tools</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Here are the specific tools and techniques mentioned in the video to help you validate your accessibility improvements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group glass-card p-8 rounded-2xl glow-on-hover border border-white/10">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">Keyboard Testing</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Navigate your entire site using only the Tab, Enter, and arrow keys. Can you reach everything?
              </p>
              <div className="text-sm text-purple-400 font-medium">
                💡 Try it: Unplug your mouse and navigate this page!
              </div>
            </div>

            <div className="group glass-card p-8 rounded-2xl glow-on-hover border border-white/10">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">Screen Reader</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Test with free screen readers like NVDA (Windows) or VoiceOver (Mac) to hear how your site sounds.
              </p>
              <div className="text-sm text-blue-400 font-medium">
                💡 Mac: Cmd+F5 to enable VoiceOver
              </div>
            </div>

            <div className="group glass-card p-8 rounded-2xl glow-on-hover border border-white/10">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">Browser DevTools</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Use Chrome/Firefox accessibility audits to automatically detect common issues.
              </p>
              <div className="text-sm text-purple-400 font-medium">
                💡 Chrome: F12 → Lighthouse → Accessibility
              </div>
            </div>

            <div className="group glass-card p-8 rounded-2xl glow-on-hover border border-white/10">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">Color Contrast</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Check contrast ratios with tools like WebAIM's contrast checker or Colour Contrast Analyser.
              </p>
              <div className="text-sm text-blue-400 font-medium">
                💡 Minimum: 4.5:1 for normal text
              </div>
            </div>

            <div className="group glass-card p-8 rounded-2xl glow-on-hover border border-white/10">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">WAVE Tool</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Web Accessibility Evaluation Tool provides visual feedback about accessibility issues.
              </p>
              <div className="text-sm text-purple-400 font-medium">
                💡 Available as browser extension
              </div>
            </div>

            <div className="group glass-card p-8 rounded-2xl glow-on-hover border border-white/10">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">User Testing</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Test with real users who have disabilities. Their feedback is invaluable for improvement.
              </p>
              <div className="text-sm text-blue-400 font-medium">
                💡 Contact local disability organizations
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20 lg:py-32 relative">
        <div className="container relative text-center">
          <div className="glass-card rounded-2xl p-12 border border-white/10 max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-500/20 border border-purple-500/30 mb-8">
              <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              <span className="text-white">You're Making a Difference!</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              With these tools and techniques, you're well on your way to building more inclusive web experiences.
              Ready to dive deeper into resources and join the community?
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Link
                to="/resources"
                className="group px-10 py-5 bg-purple-600 hover:bg-purple-500 text-white rounded-2xl text-xl font-semibold transition-all duration-300 hover:shadow-xl focus-ring"
              >
                <span className="flex items-center">
                  Explore Resources & Tools
                  <svg className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>

              <Link
                to="/why-it-matters"
                className="group px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white rounded-2xl text-xl font-semibold transition-all duration-300 hover:bg-white/20 hover:border-white/30 focus-ring"
              >
                <span className="flex items-center">
                  <svg className="mr-3 w-6 h-6 group-hover:-translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Why It Matters
                </span>
              </Link>
            </div>

            <div className="text-lg text-gray-400">
              ⏱️ Final section: <span className="text-purple-400 font-semibold">Resources & Community</span> (20 minutes)
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default QuickStart;