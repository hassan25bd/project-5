import { FaExternalLinkAlt, FaCode } from "react-icons/fa";

const projects = [
  {
    title: "Modern Portfolio Experience",
    category: "Personal Brand",
    description:
      "A polished developer portfolio with strong branding, animated interactions, and responsive layout that highlights professional work.",
    tech: "React · Motion · UI Design",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
    live: "#",
    code: "#",
  },
  {
    title: "Tourism Booking Site",
    category: "Travel Experience",
    description:
      "A destination booking website designed for immersive travel discovery, mobile-first usability, and easy itinerary planning.",
    tech: "React · Tailwind · API Integration",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80",
    live: "#",
    code: "#",
  },
  {
    title: "E-commerce Storefront",
    category: "Retail Platform",
    description:
      "A sleek e-commerce storefront focused on conversion, product discovery, and a seamless checkout experience.",
    tech: "React · Commerce · Animations",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80",
    live: "#",
    code: "#",
  },
  {
    title: "Analytics Dashboard",
    category: "Data Platform",
    description:
      "A clean dashboard interface that helps teams track performance metrics, visualize trends, and stay focused on key insights.",
    tech: "React · Charts · UX",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
    live: "#",
    code: "#",
  },
  {
    title: "SaaS Growth Landing Page",
    category: "Conversion Funnel",
    description:
      "A high-converting landing page for a SaaS product with lead capture, social proof, and a clean marketing layout.",
    tech: "React · UI/UX · Animation",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    live: "#",
    code: "#",
  },
  {
    title: "Finance Tracker App",
    category: "Productivity Tool",
    description:
      "A polished finance tracking experience with budget summaries, transaction history, and clear visual insights.",
    tech: "React · Charts · Responsive",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=900&q=80",
    live: "#",
    code: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-title">
        <span className="section-eyebrow">Projects</span>
        <h2 className="section-heading">Featured work that tells a strong product story.</h2>
      </div>

      <p className="section-subtitle">
        These examples show polished UI, strong interaction, and a focus on modern product experience.
        Each concept is presented as a complete, production-ready portfolio piece.
      </p>

      <div className="projects-grid" style={{ marginTop: "2.5rem" }}>
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <img src={project.image} alt={project.title} />
            <div className="project-card-content">
              <span className="project-label">{project.category}</span>
              <h3 className="project-heading">{project.title}</h3>
              <p className="project-copy">{project.description}</p>
              <p className="project-tech">{project.tech}</p>
              <div className="project-actions">
                <a className="project-action" href={project.live}>
                  Live <FaExternalLinkAlt size={14} />
                </a>
                <a className="project-action" href={project.code}>
                  Code <FaCode size={14} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
