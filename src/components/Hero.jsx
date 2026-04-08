import { motion } from "framer-motion";
import profilePhoto from "../picture/Image_2026-02-20_111327_278.jpg";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-copy-panel">
        <span className="hero-eyebrow">Designing growth-driven web experiences</span>
        <h1 className="hero-title">
          I turn bold ideas into beautiful, high-performing digital products.
        </h1>

        <p className="hero-subtitle">
          Front-end developer and creative partner trusted by brands to build fast,
          elegant websites with strong motion and modern UX.
        </p>

        <p className="hero-copy">
          Leveraging React, animation, and polished design to deliver websites and apps that look
          premium, feel fast, and convert visitors into customers.
        </p>

        <div className="hero-actions">
          <a className="btn btn-primary" href="#contact">
            Start a Project
          </a>
          <a className="btn btn-secondary" href="#projects">
            View Portfolio
          </a>
        </div>

        <div className="hero-badges">
          <span>React</span>
          <span>HTML</span>
          <span>Performance</span>
          <span>Vs Code</span>
        </div>
      </div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <div className="hero-image-glow" />
        <img
          className="hero-image"
          src={profilePhoto}
          alt="Hassan portrait"
        />
      </motion.div>
    </section>
  );
}
