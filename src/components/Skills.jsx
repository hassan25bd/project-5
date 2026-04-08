const skills = [
  { name: "React & React Router", level: 95 },
  { name: "JavaScript & TypeScript", level: 92 },
  { name: "Responsive UI Design", level: 90 },
  { name: "Animation & Motion", level: 86 },
  { name: "API Integration", level: 88 },
  { name: "Performance Optimization", level: 84 },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-title">
        <span className="section-eyebrow">Skills</span>
        <h2 className="section-heading">Technical strengths that power every product.</h2>
      </div>

      <p className="section-subtitle">
        I bring a strong front-end foundation with modern tooling, animation, and high-quality
        architecture for responsive web experiences.
      </p>

      <div className="skills-grid" style={{ marginTop: "2.5rem" }}>
        {skills.map((skill) => (
          <div key={skill.name} className="skill-card">
            <div className="skill-name">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="skill-track">
              <span className="skill-fill" style={{ width: `${skill.level}%` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}