import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-title">
        <span className="section-eyebrow">About</span>
        <h2 className="section-heading">Designing polished web experiences with clarity and speed.</h2>
      </div>

      <p className="section-subtitle">
        I’m a front-end developer specializing in modern interfaces for ambitious brands and startups.
        My work blends motion, responsive layouts, and accessible code to create websites that feel
        fast and delightful.
      </p>

      <div className="info-grid">
        <div className="glass-card">
          <h3>What I do</h3>
          <p>
            I build intuitive interfaces and design systems for web applications, SaaS products, and
            marketing websites using React, animation, and component-based best practices.
          </p>
        </div>

        <div className="glass-card">
          <h3>How I work</h3>
          <p>
            I focus on fast iteration, polished details, and clear collaboration. Every design is
            tested for responsiveness, accessibility, and performance.
          </p>
        </div>
      </div>

      <motion.div
        className="glass-card"
        style={{ marginTop: "2rem" }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h3>Core strengths</h3>
        <div className="info-grid">
          <span className="info-pill">React / React Router</span>
          <span className="info-pill">Animation / Motion</span>
          <span className="info-pill">Responsive design</span>
          <span className="info-pill">API integration</span>
        </div>
      </motion.div>
    </section>
  );
}
