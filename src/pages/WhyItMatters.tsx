import React from 'react';
import { Link } from 'react-router-dom';
import { IoAccessibility } from 'react-icons/io5';

const WhyItMatters: React.FC = () => {
  return (
    <main id="main-content" aria-label="Main content: Why accessibility matters - impact and benefits" className="min-h-[calc(100vh-80px)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 rounded-full bg-linear-to-br from-blue-500/20 to-cyan-500/20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-32 w-80 h-80 rounded-full bg-linear-to-br from-purple-500/20 to-pink-500/20 blur-3xl"></div>
        </div>

        <div className="container relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 floating-element">
              <IoAccessibility className="w-8 h-8 text-blue-300" />
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight font-display">
              <span className="text-blue-400">
                Why Accessibility
              </span>
              <br />
              <span className="text-white">Matters</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-6 font-medium leading-relaxed font-alt">
              The impact goes far beyond compliance
            </p>

            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              Discover how accessible design creates opportunities, drives innovation, and builds a more inclusive digital Rwanda.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/quick-start"
                className="group px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl focus-ring"
              >
                <span className="flex items-center">
                  Start Building
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>

              <Link
                to="/"
                className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/20 focus-ring"
              >
                ← Back to Overview
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHO Video Introduction */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              <span className="text-white">
                Understanding Disability
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              The World Health Organization explains the global perspective on disability and why digital inclusion matters for everyone.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="glass-card rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/BEFgnYktC7U"
                  title="WHO: Disability and Health - World Health Organization"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  aria-describedby="who-video-description"
                ></iframe>
              </div>
              <div className="p-6 bg-white/5 backdrop-blur-sm">
                <p id="who-video-description" className="text-sm text-gray-400 text-center italic">
                  World Health Organization's overview of disability as a global health and human rights issue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Impact Statistics */}
      <section className="py-20 lg:py-32 relative">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-linear-to-br from-blue-500/10 to-cyan-500/10 blur-3xl"></div>

        <div className="container relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              <span className="text-white">
                The Numbers Don't Lie
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Global statistics that underscore the importance of digital accessibility
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="https://www.who.int/news-room/fact-sheets/detail/disability-and-health"
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-card p-8 rounded-2xl glow-on-hover border border-white/10 text-center focus-ring"
              aria-label="1.3 billion people worldwide have a disability that affects their web experience - Source: World Health Organization - Opens in new window"
            >
              <div className="text-5xl font-bold text-blue-400 mb-4 group-hover:text-blue-300 transition-colors duration-300">1.3B</div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">People Worldwide</h3>
              <p className="text-gray-300 leading-relaxed mb-4">have a disability that affects their web experience</p>
              <div className="text-sm text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span>Source: WHO</span>
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>
            <a
              href="https://alpha.statistics.gov.rw/sites/default/files/documents/2014-07/RPHC4_%20Disability.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-card p-8 rounded-2xl glow-on-hover border border-white/10 text-center focus-ring"
              aria-label="15% of Rwanda's population live with some form of disability - Source: Rwanda Census 2012 - Opens in new window"
            >
              <div className="text-5xl font-bold text-emerald-400 mb-4 group-hover:text-emerald-300 transition-colors duration-300">15%</div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors duration-300">Of Rwanda's Population</h3>
              <p className="text-gray-300 leading-relaxed mb-4">live with some form of disability</p>
              <div className="text-sm text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span>Source: Rwanda Census 2012</span>
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>
            <a
              href="https://webaim.org/projects/million/"
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-card p-8 rounded-2xl glow-on-hover border border-white/10 text-center focus-ring"
              aria-label="94.8% of websites have accessibility barriers that exclude users - Source: WebAIM Million Report - Opens in new window"
            >
              <div className="text-5xl font-bold text-red-400 mb-4 group-hover:text-red-300 transition-colors duration-300">94.8%</div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-300 transition-colors duration-300">Of Websites</h3>
              <p className="text-gray-300 leading-relaxed mb-4">have accessibility barriers that exclude users</p>
              <div className="text-sm text-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span>Source: WebAIM Million Report</span>
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>
            <a
              href="https://www.rod-group.com/wp-content/uploads/2024/09/The-Global-Economics-of-Disability-2024-The-Return-on-Disability-Group-September-24-2024.pdf?https%3A%2F%2Fwww.rod-group.com%2Fresearch-insights%2Fannual-report-2024%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-card p-8 rounded-2xl glow-on-hover border border-white/10 text-center focus-ring"
              aria-label="18 trillion dollar global spending power of people with disabilities worldwide - Source: Return on Disability Group - Opens in new window"
            >
              <div className="text-5xl font-bold text-green-400 mb-4 group-hover:text-green-300 transition-colors duration-300">$18T</div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors duration-300">Global Market</h3>
              <p className="text-gray-300 leading-relaxed mb-4">spending power of people with disabilities worldwide</p>
              <div className="text-sm text-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span>Source: Return on Disability Group</span>
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* WebAIM Accessibility Video */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              <span className="text-white">
                The Business Case
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Learn why accessibility isn't just the right thing to do—it's the smart business decision that drives innovation and growth.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="glass-card rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/eFkhFxJZvho"
                  title="The Business Case for Digital Accessibility"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  aria-describedby="business-video-description"
                ></iframe>
              </div>
              <div className="p-6 bg-white/5 backdrop-blur-sm">
                <p id="business-video-description" className="text-sm text-gray-400 text-center italic">
                  Expert insights on how accessibility drives business value, innovation, and competitive advantage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="py-20 lg:py-32 relative">
        <div className="container relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              <span className="text-purple-400">
                The ROI of Accessibility
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover the measurable benefits of accessible design
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group glass-card p-8 rounded-2xl glow-on-hover border border-white/10 text-center">
              <div className="w-16 h-16 rounded-2xl bg-purple-600 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Expanded Market Reach</h3>
              <p className="text-gray-300 leading-relaxed">
                Accessible websites reach 15% more customers. In Rwanda's growing digital economy,
                that's thousands of potential users you can't afford to exclude.
              </p>
            </div>

            <div className="group glass-card p-8 rounded-2xl glow-on-hover border border-white/10 text-center">
              <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Legal Protection</h3>
              <p className="text-gray-300 leading-relaxed">
                Rwanda's Law on Rights and Protection of Persons with Disabilities requires equal access.
                Accessible websites help ensure compliance and avoid legal risks.
              </p>
            </div>

            <div className="group glass-card p-8 rounded-2xl glow-on-hover border border-white/10 text-center">
              <div className="w-16 h-16 rounded-2xl bg-purple-600 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Better Performance</h3>
              <p className="text-gray-300 leading-relaxed">
                Accessible websites are often faster, more SEO-friendly, and provide better user experience
                for everyone, including mobile users with slow connections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rwanda Context */}
      <section className="py-20 lg:py-32 relative">
        <div className="container relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              <span className="text-white">
                Rwanda's Digital Vision
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              As Rwanda transforms into a knowledge-based economy, digital inclusion isn't optional—it's essential for sustainable development.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="group glass-card p-8 rounded-2xl glow-on-hover border border-white/10">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4" aria-hidden="true">🇷🇼</span>
                <h3 className="text-2xl font-bold text-green-400">Vision 2050 Alignment</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Rwanda's Vision 2050 emphasizes leaving no one behind in development. Accessible digital services
                ensure people with disabilities participate fully in the knowledge economy.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-400">
                  <div className="w-2 h-2 rounded-full bg-green-400 mr-3 shrink-0" aria-hidden="true"></div>
                  Digital government services for all citizens
                </li>
                <li className="flex items-center text-gray-400">
                  <div className="w-2 h-2 rounded-full bg-green-400 mr-3 shrink-0" aria-hidden="true"></div>
                  Inclusive education through technology
                </li>
                <li className="flex items-center text-gray-400">
                  <div className="w-2 h-2 rounded-full bg-green-400 mr-3 shrink-0" aria-hidden="true"></div>
                  Equal economic opportunities
                </li>
              </ul>
            </div>

            <div className="group glass-card p-8 rounded-2xl glow-on-hover border border-white/10">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4" aria-hidden="true">🌍</span>
                <h3 className="text-2xl font-bold text-cyan-400">Global Competitiveness</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                International companies increasingly require accessibility compliance. Rwandan tech companies
                with accessibility expertise will have competitive advantages in global markets.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-400">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mr-3 shrink-0" aria-hidden="true"></div>
                  Access to international contracts
                </li>
                <li className="flex items-center text-gray-400">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mr-3 shrink-0" aria-hidden="true"></div>
                  Higher-value service offerings
                </li>
                <li className="flex items-center text-gray-400">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mr-3 shrink-0" aria-hidden="true"></div>
                  Reputation as inclusive innovators
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 lg:py-32 relative">
        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full bg-linear-to-br from-purple-500/5 to-blue-500/5 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

        <div className="container relative text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
            <span className="text-purple-400">
              Ready to Make a Difference?
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            You now understand the impact. Let's turn that understanding into action with practical skills
            you can implement immediately.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/quick-start"
              className="group px-10 py-5 bg-purple-600 hover:bg-purple-500 text-white rounded-2xl text-xl font-semibold transition-all duration-300 hover:shadow-xl focus-ring"
            >
              <span className="flex items-center">
                Start Building Accessible Sites
                <svg className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            <Link
              to="/resources"
              className="group px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white rounded-2xl text-xl font-semibold transition-all duration-300 hover:bg-white/20 hover:border-white/30 focus-ring"
            >
              Explore Resources
            </Link>
          </div>

          <div className="mt-8 text-sm text-gray-400">
            <span aria-hidden="true">⏱️ </span>Next section: <span className="text-purple-400">Quick Start Guide</span> (25 minutes)
          </div>
        </div>
      </section>
    </main>
  );
};

export default WhyItMatters;