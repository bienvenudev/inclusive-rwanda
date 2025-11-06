import React from 'react';

const Home: React.FC = () => {
  return (
    <main id="main-content">
      <section className="hero">
        <h1>Inclusive Rwanda</h1>
        <p className="hero-subtitle">
          Building a more accessible web for everyone in Rwanda and beyond
        </p>
        <p className="hero-description">
          Learn why web accessibility matters and how you can make your websites
          usable by everyone, including people with disabilities.
        </p>
      </section>

      <section className="overview">
        <h2>Why Start Here?</h2>
        <div className="overview-cards">
          <div className="card">
            <h3>1 in 7 people</h3>
            <p>worldwide have a disability that affects how they use the web</p>
          </div>
          <div className="card">
            <h3>Legal requirement</h3>
            <p>Many countries require websites to be accessible</p>
          </div>
          <div className="card">
            <h3>Better for everyone</h3>
            <p>Accessible design improves usability for all users</p>
          </div>
        </div>
      </section>

      <section className="introduction">
        <h2>Introduction</h2>
        <p>
          Web accessibility ensures that websites, tools, and technologies are designed
          and developed so that people with disabilities can use them effectively.
        </p>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/20SHvU2PKsM"
            title="Introduction to Web Accessibility and W3C Standards"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            aria-describedby="intro-video-description"
          ></iframe>
          <p id="intro-video-description" className="video-description">
            This video provides an introduction to web accessibility and W3C standards.
          </p>
        </div>
      </section>

      <section className="what-is-accessibility">
        <h2>What is Web Accessibility?</h2>
        <p>
          Web accessibility means that people with disabilities can equally perceive,
          understand, navigate, and interact with websites and tools. It also means
          that they can contribute equally without barriers.
        </p>
        <div className="accessibility-points">
          <div className="point">
            <h3>Perceivable</h3>
            <p>Information must be presentable in ways users can perceive</p>
          </div>
          <div className="point">
            <h3>Operable</h3>
            <p>Interface components must be operable by all users</p>
          </div>
          <div className="point">
            <h3>Understandable</h3>
            <p>Information and UI operation must be understandable</p>
          </div>
          <div className="point">
            <h3>Robust</h3>
            <p>Content must be robust enough for various assistive technologies</p>
          </div>
        </div>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/3f31oufqFSM"
            title="Web Accessibility Perspectives - Compilation of 10 Topics/Videos"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            aria-describedby="perspectives-video-description"
          ></iframe>
          <p id="perspectives-video-description" className="video-description">
            This compilation video showcases 10 different perspectives on web accessibility.
          </p>
        </div>
      </section>

      <section className="get-started">
        <h2>Ready to Learn More?</h2>
        <p>Explore our guides to start building more inclusive web experiences.</p>
      </section>
    </main>
  );
};

export default Home;