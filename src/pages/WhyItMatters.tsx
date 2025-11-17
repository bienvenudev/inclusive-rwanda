import React from 'react';
import { Link } from 'react-router-dom';

const WhyItMatters: React.FC = () => {
  return (
    <main id="main-content" className="min-h-[calc(100vh-80px)] py-8">
      {/* Hero Section */}
      <section className="text-center py-16 bg-linear-to-br from-gray-900 to-gray-800 mx-4 mb-16 rounded-none md:rounded-xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-linear-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent">
          Why Accessibility Matters
        </h1>
        <p className="text-lg md:text-2xl text-gray-50 mb-4 font-medium">
          The impact goes far beyond compliance
        </p>
        <p className="text-base md:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed px-4">
          Discover how accessible design creates opportunities, drives innovation, and builds a more inclusive digital Rwanda.
        </p>
      </section>

      {/* WHO Video Introduction */}
      <section className="py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-gray-50">
          Understanding Disability and Accessibility
        </h2>
        <p className="text-base md:text-lg text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed px-4">
          The World Health Organization explains the global perspective on disability and why digital inclusion matters for everyone.
        </p>
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative aspect-video max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg shadow-black/30">
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
          <p id="who-video-description" className="text-sm text-gray-400 mt-4 italic">
            World Health Organization's overview of disability as a global health and human rights issue.
          </p>
        </div>
      </section>

      {/* Global Impact Statistics */}
      <section className="py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-gray-50">
          The Numbers Don't Lie
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <a
            href="https://www.who.int/news-room/fact-sheets/detail/disability-and-health"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-900 border border-gray-600 p-8 rounded-xl transition-all duration-300 hover:border-blue-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/15 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-950"
          >
            <div className="text-4xl font-bold text-blue-500 mb-2">1.3B</div>
            <h3 className="text-lg font-semibold text-gray-50 mb-2">People Worldwide</h3>
            <p className="text-gray-200 text-sm leading-relaxed mb-3">have a disability that affects their web experience</p>
            <div className="text-xs text-blue-400 hover:text-blue-300 font-medium flex items-center">
              Source: WHO
              <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </a>
          <a
            href="https://www.statistics.gov.rw/publication/disability-rwanda-census-2012"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-900 border border-gray-600 p-8 rounded-xl transition-all duration-300 hover:border-blue-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/15 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-950"
          >
            <div className="text-4xl font-bold text-blue-500 mb-2">15%</div>
            <h3 className="text-lg font-semibold text-gray-50 mb-2">Of Rwanda's Population</h3>
            <p className="text-gray-200 text-sm leading-relaxed mb-3">live with some form of disability</p>
            <div className="text-xs text-blue-400 hover:text-blue-300 font-medium flex items-center">
              Source: Rwanda Census 2012
              <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </a>
          <a
            href="https://webaim.org/projects/million/"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-900 border border-gray-600 p-8 rounded-xl transition-all duration-300 hover:border-blue-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/15 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-950"
          >
            <div className="text-4xl font-bold text-blue-500 mb-2">94.8%</div>
            <h3 className="text-lg font-semibold text-gray-50 mb-2">Of Websites</h3>
            <p className="text-gray-200 text-sm leading-relaxed mb-3">have accessibility barriers that exclude users</p>
            <div className="text-xs text-blue-400 hover:text-blue-300 font-medium flex items-center">
              Source: WebAIM Million Report
              <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </a>
          <a
            href="https://www.accenture.com/us-en/insights/consulting/disability-inclusion-research"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-900 border border-gray-600 p-8 rounded-xl transition-all duration-300 hover:border-blue-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/15 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-950"
          >
            <div className="text-4xl font-bold text-blue-500 mb-2">$13T</div>
            <h3 className="text-lg font-semibold text-gray-50 mb-2">Global Market</h3>
            <p className="text-gray-200 text-sm leading-relaxed mb-3">spending power of people with disabilities worldwide</p>
            <div className="text-xs text-blue-400 hover:text-blue-300 font-medium flex items-center">
              Source: Accenture Research
              <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </a>
        </div>
      </section>

      {/* Human Stories */}
      <section className="py-16 bg-gray-900 mx-4 my-16 rounded-none md:rounded-xl">
        <div className="px-4">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center text-gray-50">
            Real People, Real Impact
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

            {/* Story 1 */}
            <div className="bg-gray-800 border border-gray-600 p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-50 mb-2">Amara, Visual Impairment</h3>
                  <p className="text-gray-200 text-sm leading-relaxed mb-3">
                    "I use a screen reader to navigate websites. When developers add proper alt text and heading structure,
                    I can access information just as quickly as anyone else. But when they don't, simple tasks like
                    online banking or shopping become impossible."
                  </p>
                  <div className="text-xs text-blue-500 font-medium">
                    💡 Impact: Proper semantic HTML unlocks independence
                  </div>
                </div>
              </div>
            </div>

            {/* Story 2 */}
            <div className="bg-gray-800 border border-gray-600 p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  J
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-50 mb-2">Jean-Claude, Motor Disability</h3>
                  <p className="text-gray-200 text-sm leading-relaxed mb-3">
                    "I can only use a keyboard to navigate. Websites with good keyboard support let me apply for jobs,
                    learn new skills, and stay connected with my community. It's about dignity and opportunity."
                  </p>
                  <div className="text-xs text-blue-500 font-medium">
                    💡 Impact: Keyboard navigation enables participation
                  </div>
                </div>
              </div>
            </div>

            {/* Story 3 */}
            <div className="bg-gray-800 border border-gray-600 p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-50 mb-2">Marie, Hearing Impairment</h3>
                  <p className="text-gray-200 text-sm leading-relaxed mb-3">
                    "Captions on videos aren't just nice to have - they're essential for my education and career.
                    When educational content lacks captions, I miss out on learning opportunities."
                  </p>
                  <div className="text-xs text-blue-500 font-medium">
                    💡 Impact: Captions create equal access to information
                  </div>
                </div>
              </div>
            </div>

            {/* Story 4 */}
            <div className="bg-gray-800 border border-gray-600 p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  E
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-50 mb-2">Emmanuel, Cognitive Disability</h3>
                  <p className="text-gray-200 text-sm leading-relaxed mb-3">
                    "Clear, simple language and consistent navigation help me understand and use websites.
                    Complex layouts and jargon make it frustrating to access services I need."
                  </p>
                  <div className="text-xs text-blue-500 font-medium">
                    💡 Impact: Clear design benefits everyone's comprehension
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WebAIM Accessibility Video */}
      <section className="py-16 text-center bg-gray-900 mx-4 my-16 rounded-none md:rounded-xl">
        <div className="px-4">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-gray-50">
            The Business Case for Accessibility
          </h2>
          <p className="text-base md:text-lg text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
            Learn why accessibility isn't just the right thing to do—it's the smart business decision that drives innovation and growth.
          </p>
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative aspect-video max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg shadow-black/30">
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
            <p id="business-video-description" className="text-sm text-gray-400 mt-4 italic">
              Expert insights on how accessibility drives business value, innovation, and competitive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="py-16">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center text-gray-50">
          The ROI of Accessibility
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-50 mb-3">Expanded Market Reach</h3>
            <p className="text-gray-200 leading-relaxed">
              Accessible websites reach 15% more customers. In Rwanda's growing digital economy,
              that's thousands of potential users you can't afford to exclude.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-50 mb-3">Legal Protection</h3>
            <p className="text-gray-200 leading-relaxed">
              Rwanda's Law on Rights and Protection of Persons with Disabilities requires equal access.
              Accessible websites help ensure compliance and avoid legal risks.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-50 mb-3">Better Performance</h3>
            <p className="text-gray-200 leading-relaxed">
              Accessible websites are often faster, more SEO-friendly, and provide better user experience
              for everyone, including mobile users with slow connections.
            </p>
          </div>

        </div>
      </section>

      {/* Rwanda Context */}
      <section className="py-16 bg-gray-900 mx-4 my-16 rounded-none md:rounded-xl">
        <div className="px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-gray-50">
            Rwanda's Digital Inclusion Vision
          </h2>
          <p className="text-base md:text-lg text-gray-200 max-w-4xl mx-auto mb-12 leading-relaxed">
            As Rwanda transforms into a knowledge-based economy, digital inclusion isn't optional—it's essential for sustainable development.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-800 border border-gray-600 p-6 rounded-lg text-left">
              <h3 className="text-lg font-semibold text-blue-500 mb-3">🇷🇼 Vision 2050 Alignment</h3>
              <p className="text-gray-200 text-sm leading-relaxed mb-3">
                Rwanda's Vision 2050 emphasizes leaving no one behind in development. Accessible digital services
                ensure people with disabilities participate fully in the knowledge economy.
              </p>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>• Digital government services for all citizens</li>
                <li>• Inclusive education through technology</li>
                <li>• Equal economic opportunities</li>
              </ul>
            </div>

            <div className="bg-gray-800 border border-gray-600 p-6 rounded-lg text-left">
              <h3 className="text-lg font-semibold text-blue-500 mb-3">🌍 Global Competitiveness</h3>
              <p className="text-gray-200 text-sm leading-relaxed mb-3">
                International companies increasingly require accessibility compliance. Rwandan tech companies
                with accessibility expertise will have competitive advantages in global markets.
              </p>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>• Access to international contracts</li>
                <li>• Higher-value service offerings</li>
                <li>• Reputation as inclusive innovators</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-50">
          Ready to Make a Difference?
        </h2>
        <p className="text-base md:text-lg text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed px-4">
          You now understand the impact. Let's turn that understanding into action with practical skills
          you can implement immediately.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/quick-start"
            className="inline-flex items-center bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-950"
          >
            Start Building Accessible Sites
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          <Link
            to="/"
            className="inline-flex items-center bg-gray-900 hover:bg-gray-800 border border-gray-600 text-gray-50 px-6 py-4 rounded-lg text-base font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-950"
          >
            ← Back to Overview
          </Link>
        </div>

        <div className="mt-8 text-sm text-gray-400">
          ⏱️ Next section: <span className="text-blue-500">Quick Start Guide</span> (25 minutes)
        </div>
      </section>
    </main>
  );
};

export default WhyItMatters;