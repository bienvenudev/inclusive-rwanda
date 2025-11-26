import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import FeedbackForm from '../components/FeedbackForm';

const Resources: React.FC = () => {
  const [showFeedback, setShowFeedback] = useState(false);

  const categories = [
    { id: 'tools', label: 'Tools & Extensions', icon: '🛠️', count: '15+', description: 'Browser extensions and development tools' },
    { id: 'learning', label: 'Learning Resources', icon: '📚', count: '20+', description: 'Courses, documentation, and guides' },
    { id: 'rwanda', label: 'Rwanda Community', icon: '🇷🇼', count: '8+', description: 'Local organizations and initiatives' },
    { id: 'guidelines', label: 'Guidelines & Standards', icon: '📋', count: '12+', description: 'WCAG standards and checklists' }
  ];

  return (
    <main id="main-content" aria-label="Accessibility Resources and Tools" className="min-h-[calc(100vh-80px)] bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 border border-white/20 mb-8">
            <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.168 18.477 18.582 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-purple-400">Your Accessibility</span>
            <br />
            <span className="text-white">Toolkit</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Everything you need to continue your accessibility journey — from professional tools
            to Rwanda's growing inclusive tech community.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>40+ Tools & Resources</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Rwanda Community Network</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Expert Guidelines</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation and Content */}
      <TabGroup defaultIndex={0}>
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <TabList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                {categories.map((category) => (
                  <Tab
                    key={category.id}
                    className="group relative p-6 rounded-2xl text-left transition-all duration-300 data-selected:bg-purple-500/20 data-selected:border-purple-500/30 bg-gray-800/50 border border-gray-700/50 hover:bg-gray-700/50 hover:border-gray-600/50 focus-ring"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-2xl">{category.icon}</span>
                      <div className="px-2 py-1 text-xs font-medium rounded-full bg-gray-700/50 text-gray-400 group-data-selected:bg-purple-500/30 group-data-selected:text-purple-300">
                        {category.count}
                      </div>
                    </div>
                    <h3 className="font-semibold mb-2 text-gray-200 group-hover:text-white group-data-selected:text-white">
                      {category.label}
                    </h3>
                    <p className="text-sm text-gray-400 group-data-selected:text-gray-300">
                      {category.description}
                    </p>

                  </Tab>
                ))}
              </TabList>
            </div>
          </div>
        </section>

        <TabPanels>
          {/* Tools & Extensions Panel */}
          <TabPanel>
            <section className="py-20 lg:py-32">
              <div className="container mx-auto px-6">
                <div className="max-w-7xl mx-auto">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                      Essential Tools & Extensions
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                      Professional-grade tools to test, analyze, and improve web accessibility
                    </p>
                  </div>

                  {/* Testing Tools */}
                  <div className="mb-20">
                    <div className="flex items-center mb-8">
                      <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mr-4">
                        <span className="text-2xl">🧪</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">Accessibility Testing Tools</h3>
                        <p className="text-gray-400">Discover issues and validate your implementations</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                      {[
                        {
                          name: "WAVE",
                          company: "WebAIM",
                          icon: "W",
                          color: "from-purple-500 to-purple-600",
                          hoverColor: "purple-500",
                          description: "Visual accessibility evaluation tool that shows errors and warnings directly on your webpage.",
                          tags: [{ label: "Free", color: "green" }, { label: "Browser Extension", color: "blue" }],
                          url: "https://wave.webaim.org/extension/",
                          cta: "Install Extension"
                        },
                        {
                          name: "axe DevTools",
                          company: "Deque Systems",
                          icon: "A",
                          color: "from-blue-500 to-blue-600",
                          hoverColor: "blue-500",
                          description: "Industry-standard accessibility testing integrated into browser developer tools.",
                          tags: [{ label: "Free", color: "green" }, { label: "DevTools", color: "purple" }],
                          url: "https://www.deque.com/axe/devtools/",
                          cta: "Get axe DevTools"
                        },
                        {
                          name: "Lighthouse",
                          company: "Google",
                          icon: "L",
                          color: "from-purple-500 to-purple-600",
                          hoverColor: "purple-500",
                          description: "Built into Chrome DevTools, provides accessibility audits along with performance metrics.",
                          tags: [{ label: "Free", color: "green" }, { label: "Built-in", color: "gray" }],
                          url: "https://developers.google.com/web/tools/lighthouse/",
                          cta: "Learn More"
                        }
                      ].map((tool, index) => (
                        <a
                          key={index}
                          href={tool.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative bg-gray-800/50 border border-gray-700/50 p-8 rounded-2xl hover:border-gray-600/50 transition-all duration-300"
                        >

                          <div className="relative z-10">
                            <div className="flex items-center mb-4">
                              <div className={`w-12 h-12 bg-linear-to-r ${tool.color} rounded-lg flex items-center justify-center mr-4`}>
                                <span className="text-white font-bold text-lg">{tool.icon}</span>
                              </div>
                              <div>
                                <h4 className="text-xl font-bold text-white">{tool.name}</h4>
                                <p className="text-gray-400 text-sm">{tool.company}</p>
                              </div>
                            </div>

                            <p className="text-gray-300 mb-6 leading-relaxed">
                              {tool.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                              {tool.tags.map((tag, tagIndex) => (
                                <span key={tagIndex} className={`px-3 py-1 bg-${tag.color}-500/20 text-${tag.color}-400 text-sm rounded-full border border-${tag.color}-500/30`}>
                                  {tag.label}
                                </span>
                              ))}
                            </div>

                            <div className="flex items-center text-purple-400 font-medium">
                              {tool.cta}
                              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Development Tools */}
                  <div className="mb-12">
                    <div className="flex items-center mb-8">
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                        <span className="text-2xl">⚡</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">Development & Code Tools</h3>
                        <p className="text-gray-400">Integrate accessibility into your development workflow</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                      {[
                        {
                          name: "axe Accessibility Linter",
                          company: "VS Code Extension",
                          icon: "VS",
                          color: "from-blue-600 to-blue-700",
                          description: "Real-time accessibility linting in your code editor as you write HTML and JSX.",
                          tags: [{ label: "Free", color: "green" }, { label: "VS Code", color: "blue" }],
                          url: "https://marketplace.visualstudio.com/items?itemName=deque-systems.vscode-axe-linter",
                          cta: "Install Extension"
                        },
                        {
                          name: "eslint-plugin-jsx-a11y",
                          company: "NPM Package",
                          icon: "E",
                          color: "from-green-600 to-green-700",
                          description: "ESLint plugin that catches accessibility issues in React JSX elements during development.",
                          tags: [{ label: "Free", color: "green" }, { label: "React", color: "orange" }],
                          url: "https://www.npmjs.com/package/eslint-plugin-jsx-a11y",
                          cta: "View on NPM"
                        },
                        {
                          name: "Pa11y",
                          company: "Command Line Tool",
                          icon: "P",
                          color: "from-purple-600 to-purple-700",
                          description: "Command-line accessibility testing tool that can be integrated into CI/CD pipelines.",
                          tags: [{ label: "Free", color: "green" }, { label: "CLI", color: "gray" }],
                          url: "https://pa11y.org/",
                          cta: "Visit Pa11y"
                        }
                      ].map((tool, index) => (
                        <a
                          key={index}
                          href={tool.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative bg-gray-800/50 border border-gray-700/50 p-8 rounded-2xl hover:border-gray-600/50 transition-all duration-300"
                        >
                          <div>
                            <div className="flex items-center mb-4">
                              <div className={`w-12 h-12 bg-linear-to-r ${tool.color} rounded-lg flex items-center justify-center mr-4`}>
                                <span className="text-white font-bold text-sm">{tool.icon}</span>
                              </div>
                              <div>
                                <h4 className="text-xl font-bold text-white">{tool.name}</h4>
                                <p className="text-gray-400 text-sm">{tool.company}</p>
                              </div>
                            </div>

                            <p className="text-gray-300 mb-6 leading-relaxed">
                              {tool.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                              {tool.tags.map((tag, tagIndex) => (
                                <span key={tagIndex} className={`px-3 py-1 bg-${tag.color}-500/20 text-${tag.color}-400 text-sm rounded-full border border-${tag.color}-500/30`}>
                                  {tag.label}
                                </span>
                              ))}
                            </div>

                            <div className="flex items-center text-blue-400 font-medium">
                              {tool.cta}
                              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </TabPanel>

          {/* Learning Resources Panel */}
          <TabPanel>
            <section className="py-20 lg:py-32">
              <div className="container mx-auto px-6">
                <div className="max-w-7xl mx-auto">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                      Learning Resources
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                      Comprehensive guides, courses, and documentation to master accessibility
                    </p>
                  </div>

                  {/* Quick Learning Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {[
                      {
                        title: "WCAG 2.1 Guidelines",
                        description: "International standard for web accessibility with comprehensive guidelines",
                        icon: "📋",
                        color: "from-blue-500 to-cyan-500",
                        url: "https://www.w3.org/WAI/WCAG21/quickref/",
                        tags: ["Official", "Complete"]
                      },
                      {
                        title: "MDN Accessibility Docs",
                        description: "Practical documentation with code examples for web developers",
                        icon: "📚",
                        color: "from-green-500 to-emerald-500",
                        url: "https://developer.mozilla.org/en-US/docs/Web/Accessibility",
                        tags: ["Beginner-friendly", "Examples"]
                      },
                      {
                        title: "WebAIM Resources",
                        description: "Tutorials and tools from Utah State University accessibility experts",
                        icon: "🎓",
                        color: "from-purple-500 to-violet-500",
                        url: "https://webaim.org/",
                        tags: ["Tutorials", "Testing"]
                      }
                    ].map((resource, index) => (
                      <a
                        key={index}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative bg-gray-800/50 border border-gray-700/50 p-8 rounded-2xl hover:border-gray-600/50 transition-all duration-300"
                      >
                        <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
                          <span className="text-3xl">{resource.icon}</span>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3">
                          {resource.title}
                        </h3>

                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {resource.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {resource.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </a>
                    ))}
                  </div>

                  {/* Free Courses Section */}
                  <div className="bg-gray-800/30 border border-gray-700/50 rounded-3xl p-12">
                    <div className="text-center mb-12">
                      <h3 className="text-3xl font-bold text-white mb-4">Free Online Courses</h3>
                      <p className="text-gray-300 text-lg">Start your accessibility education with these excellent free courses</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {[
                        {
                          title: "Web Accessibility by Google",
                          platform: "Udacity",
                          duration: "4 weeks",
                          level: "Beginner",
                          description: "Comprehensive course covering fundamentals of accessible web development.",
                          url: "https://www.udacity.com/course/web-accessibility--ud891"
                        },
                        {
                          title: "Digital Accessibility",
                          platform: "FutureLearn",
                          duration: "3 weeks",
                          level: "Intermediate",
                          description: "University of Southampton course covering WCAG principles and implementation.",
                          url: "https://www.futurelearn.com/courses/digital-accessibility"
                        }
                      ].map((course, index) => (
                        <a
                          key={index}
                          href={course.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group bg-gray-800/50 border border-gray-700/50 p-8 rounded-2xl hover:border-gray-600/50 transition-all duration-300"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h4 className="text-xl font-bold text-white mb-2">
                                {course.title}
                              </h4>
                              <p className="text-blue-400 font-medium">{course.platform}</p>
                            </div>
                            <div className="text-right">
                              <div className="text-sm text-gray-400">{course.duration}</div>
                              <div className="text-sm text-green-400">{course.level}</div>
                            </div>
                          </div>

                          <p className="text-gray-300 mb-6">
                            {course.description}
                          </p>

                          <div className="flex items-center text-blue-400 group-hover:text-blue-300 font-medium">
                            Start Learning
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </TabPanel>

          {/* Rwanda Community Panel */}
          <TabPanel>
            <section className="py-20 lg:py-32">
              <div className="container mx-auto px-6">
                <div className="max-w-7xl mx-auto">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                      Rwanda Accessibility Community
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                      Connect with local organizations, government initiatives, and tech communities building inclusive Rwanda
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                    {/* Government & Policy */}
                    <div className="space-y-8">
                      <div className="flex items-center mb-8">
                        <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mr-4">
                          <span className="text-2xl">🏛️</span>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">Government & Policy</h3>
                          <p className="text-gray-400">Leading digital transformation initiatives</p>
                        </div>
                      </div>

                      <div className="space-y-6">
                        {[
                          {
                            name: "Ministry of ICT and Innovation (MINICT)",
                            description: "Leading Rwanda's digital transformation with inclusive technology policies",
                            initiatives: ["Digital Rwanda 2024", "ICT Accessibility Guidelines", "Smart Rwanda Master Plan"],
                            url: "https://www.minict.gov.rw/"
                          },
                          {
                            name: "Rwanda Utilities Regulatory Authority (RURA)",
                            description: "Regulating telecommunications with focus on universal access",
                            initiatives: ["ICT Accessibility Standards", "Digital Inclusion Policies", "Universal Access Fund"],
                            url: "https://www.rura.rw/"
                          }
                        ].map((org, index) => (
                          <a
                            key={index}
                            href={org.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-gray-800/50 border border-gray-700/50 p-6 rounded-2xl hover:border-gray-600/50 transition-all duration-300"
                          >
                            <h4 className="text-lg font-bold text-white mb-3">
                              {org.name}
                            </h4>
                            <p className="text-gray-300 mb-4">{org.description}</p>
                            <ul className="space-y-1">
                              {org.initiatives.map((initiative, idx) => (
                                <li key={idx} className="text-sm text-gray-400 flex items-center">
                                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                                  {initiative}
                                </li>
                              ))}
                            </ul>
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Tech Community */}
                    <div className="space-y-8">
                      <div className="flex items-center mb-8">
                        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                          <span className="text-2xl">💻</span>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">Tech Communities</h3>
                          <p className="text-gray-400">Building inclusive technology together</p>
                        </div>
                      </div>

                      <div className="space-y-6">
                        {[
                          {
                            name: "Kigali Tech Community",
                            description: "Local developers promoting inclusive design practices",
                            activities: ["Monthly accessibility workshops", "Code review sessions", "Inclusive design hackathons"]
                          },
                          {
                            name: "Women in Tech Rwanda",
                            description: "Empowering women with focus on accessible solutions",
                            activities: ["Accessibility training programs", "Mentorship for inclusive design", "Community outreach projects"]
                          },
                          {
                            name: "African Leadership University (ALU)",
                            description: "Computing programs emphasizing inclusive technology",
                            activities: ["Social impact projects", "Accessibility research", "Student-led initiatives"]
                          }
                        ].map((community, index) => (
                          <div
                            key={index}
                            className="bg-gray-800/50 border border-gray-700/50 p-6 rounded-2xl"
                          >
                            <h4 className="text-lg font-bold text-white mb-3">
                              {community.name}
                            </h4>
                            <p className="text-gray-300 mb-4">{community.description}</p>
                            <ul className="space-y-1">
                              {community.activities.map((activity, idx) => (
                                <li key={idx} className="text-sm text-gray-400 flex items-center">
                                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                                  {activity}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </TabPanel>

          {/* Guidelines & Standards Panel */}
          <TabPanel>
            <section className="py-20 lg:py-32">
              <div className="container mx-auto px-6">
                <div className="max-w-7xl mx-auto">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                      Guidelines & Standards
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                      Master WCAG standards and implementation best practices
                    </p>
                  </div>

                  {/* WCAG Levels Overview */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
                    {[
                      {
                        level: "A",
                        title: "Level A (Minimum)",
                        color: "from-purple-500 to-purple-600",
                        bgColor: "purple-500",
                        items: [
                          "Text alternatives for images",
                          "Captions for videos",
                          "Keyboard accessibility",
                          "Proper heading structure",
                          "Meaningful link text",
                          "Valid HTML markup"
                        ]
                      },
                      {
                        level: "AA",
                        title: "Level AA (Standard)",
                        color: "from-blue-500 to-blue-600",
                        bgColor: "blue-500",
                        items: [
                          "Color contrast ratio 4.5:1",
                          "Text resizable to 200%",
                          "Visible focus indicators",
                          "Audio transcriptions",
                          "Proper form labels",
                          "Error identification & help"
                        ]
                      },
                      {
                        level: "AAA",
                        title: "Level AAA (Enhanced)",
                        color: "from-purple-500 to-purple-600",
                        bgColor: "purple-500",
                        items: [
                          "Color contrast ratio 7:1",
                          "Sign language interpretation",
                          "Audio descriptions",
                          "Context-sensitive help",
                          "No timing restrictions",
                          "Appropriate reading level"
                        ]
                      }
                    ].map((wcagLevel, index) => (
                      <div key={index} className="bg-gray-800/50 border border-gray-700/50 p-8 rounded-2xl">
                        <div className="flex items-center mb-6">
                          <div className={`w-12 h-12 bg-linear-to-r ${wcagLevel.color} rounded-xl flex items-center justify-center mr-4`}>
                            <span className="text-white font-bold text-xl">{wcagLevel.level}</span>
                          </div>
                          <div>
                            <h3 className={`text-xl font-bold text-${wcagLevel.bgColor}-400`}>{wcagLevel.title}</h3>
                          </div>
                        </div>

                        <ul className="space-y-3">
                          {wcagLevel.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-gray-300 flex items-start">
                              <span className={`w-2 h-2 bg-${wcagLevel.bgColor}-400 rounded-full mr-3 mt-2 shrink-0`}></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Implementation Checklist */}
                  <div className="bg-linear-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/50 rounded-3xl p-12">
                    <div className="text-center mb-12">
                      <h3 className="text-3xl font-bold text-white mb-4">Implementation Checklist</h3>
                      <p className="text-gray-300 text-lg">A practical workflow for building accessible web experiences</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                      {[
                        {
                          phase: "Design",
                          icon: "🎨",
                          tasks: [
                            "Design with sufficient color contrast",
                            "Don't rely solely on color",
                            "Design clear focus indicators",
                            "Ensure interactive elements are large enough"
                          ]
                        },
                        {
                          phase: "Development",
                          icon: "💻",
                          tasks: [
                            "Use semantic HTML elements",
                            "Add proper ARIA labels and roles",
                            "Implement keyboard navigation",
                            "Provide meaningful alt text"
                          ]
                        },
                        {
                          phase: "Testing",
                          icon: "🧪",
                          tasks: [
                            "Test with keyboard navigation",
                            "Test with screen readers",
                            "Run automated audits",
                            "User testing with disabilities"
                          ]
                        },
                        {
                          phase: "Maintenance",
                          icon: "🚀",
                          tasks: [
                            "Provide accessibility statement",
                            "Monitor for issues",
                            "Gather user feedback",
                            "Regular accessibility audits"
                          ]
                        }
                      ].map((phase, index) => (
                        <div key={index} className="text-center">
                          <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <span className="text-3xl">{phase.icon}</span>
                          </div>

                          <h4 className="text-xl font-bold text-white mb-6">{phase.phase} Phase</h4>

                          <ul className="space-y-3 text-left">
                            {phase.tasks.map((task, taskIndex) => (
                              <li key={taskIndex} className="text-gray-300 flex items-start text-sm">
                                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 shrink-0"></span>
                                {task}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </TabPanel>
        </TabPanels>
      </TabGroup>

      {/* Contribute to this Project Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-3xl p-12">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-2/3">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/20 border border-blue-500/30 mb-6">
                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    Contribute to This Project
                  </h2>
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    Found a bug? Have an idea for improvement? This project is open source and welcomes contributions from developers who want to make accessibility education better for everyone.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 shrink-0"></span>
                      <div>
                        <h4 className="text-white font-medium">Fix Issues</h4>
                        <p className="text-gray-400 text-sm">Submit PRs for bugs, accessibility improvements, or performance optimizations</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 shrink-0"></span>
                      <div>
                        <h4 className="text-white font-medium">Add Features</h4>
                        <p className="text-gray-400 text-sm">Contribute new educational content, tools, or interactive features</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 shrink-0"></span>
                      <div>
                        <h4 className="text-white font-medium">Improve Docs</h4>
                        <p className="text-gray-400 text-sm">Enhance documentation, examples, or add translations</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 shrink-0"></span>
                      <div>
                        <h4 className="text-white font-medium">Share Knowledge</h4>
                        <p className="text-gray-400 text-sm">Add Rwanda-specific resources or accessibility insights</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/3">
                  <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-8">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-700 mb-4">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.918.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.479C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">GitHub Repository</h3>
                      <p className="text-gray-400 text-sm mb-6">View the source code, submit issues, or create pull requests</p>
                    </div>

                    <div className="space-y-3">
                      <a
                        href="https://github.com/bienvenudev/inclusive-rwanda"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 group"
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.918.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.479C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z" />
                        </svg>
                        View on GitHub
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>

                      <div className="flex gap-2">
                        <a
                          href="https://github.com/bienvenudev/inclusive-rwanda/issues"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center bg-gray-700 hover:bg-gray-600 text-gray-200 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                        >
                          Report Issue
                        </a>
                        <a
                          href="https://github.com/bienvenudev/inclusive-rwanda/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center bg-gray-700 hover:bg-gray-600 text-gray-200 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                        >
                          First Issues
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Help Us Improve Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center bg-purple-600/10 border border-purple-500/20 rounded-3xl p-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-500/20 border border-purple-500/30 mb-8">
              <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Share Your Feedback
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Have questions, suggestions, or want to share your accessibility challenges? For quick feedback or questions, use our feedback form. For code contributions or detailed issues, visit our GitHub repository above.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => setShowFeedback(true)}
                className="inline-flex items-center bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-xl text-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Send Quick Feedback
              </button>

              <p className="text-gray-400 text-sm">
                Your input helps make this resource better for everyone
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center bg-gray-800/50 border border-gray-700/50 rounded-3xl p-12">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to Build Inclusive Rwanda?
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                You now have all the tools, knowledge, and community connections to start building
                accessible web experiences. Every small step towards accessibility makes a big difference
                for users in Rwanda and beyond.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link
                to="/quick-start"
                className="inline-flex items-center bg-purple-500 hover:bg-purple-400 text-white px-8 py-4 rounded-xl text-lg font-medium transition-all duration-200"
              >
                ← Start Your Journey
              </Link>

              <Link
                to="/"
                className="inline-flex items-center bg-gray-800 hover:bg-gray-700 border border-gray-600 text-gray-200 px-6 py-4 rounded-xl font-medium transition-all duration-200"
              >
                Back to Home
              </Link>
            </div>

            <div className="space-y-2 text-gray-400">
              <p>🌟 <span className="text-purple-400">Remember:</span> Accessibility is a journey, not a destination</p>
              <p>🤝 <span className="text-purple-400">Together:</span> We can make the web inclusive for all Rwandans</p>
            </div>
          </div>
        </div>
      </section>

      {showFeedback && <FeedbackForm onClose={() => setShowFeedback(false)} />}
    </main>
  );
};

export default Resources;