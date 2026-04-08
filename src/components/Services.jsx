import { FaLaptopCode, FaPaintBrush, FaRocket } from "react-icons/fa";

const services = [
  {
    icon: FaLaptopCode,
    title: "Front-end Development",
    description:
      "Modern interfaces built with React, component libraries, and performance-first architecture.",
  },
  {
    icon: FaPaintBrush,
    title: "UI / UX Design",
    description:
      "High-fidelity layouts, design systems, and motion that help users feel confident and engaged.",
  },
  {
    icon: FaRocket,
    title: "Product Launch",
    description:
      "Fast prototypes and polished launches for websites, landing pages, and startup products.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="section-title">
        <span className="section-eyebrow">Services</span>
        <h2 className="section-heading">Services for ambitious digital products.</h2>
      </div>

      <p className="section-subtitle">
        From discovery to launch, I support teams with front-end build, design execution, and
        animation-led experiences that strengthen brand perception.
      </p>

      <div className="services-grid" style={{ marginTop: "2.5rem" }}>
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <article key={service.title} className="service-card">
              <div className="service-icon">
                <Icon size={20} />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-copy">{service.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
