import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <span>© 2026 Emam Hassan Abid. Crafted for modern digital brands.</span>
      <div className="social-list">
        <a className="social-link" href="https://github.com/hassan25bd" aria-label="GitHub">
          <FaGithub />
        </a>
        <a className="social-link" href="https://www.linkedin.com/in/emamhassanabid" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a className="social-link" href="https://twitter.com/hassan25bd" aria-label="Twitter">
          <FaTwitter />
        </a>
      </div>
    </footer>
  );
}
