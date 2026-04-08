export default function Testimonials() {
  const testimonials = [
    {
      name: "Mina Roberts",
      role: "Product Lead, Horizon Labs",
      quote:
        "Hassan helped us launch a brand new product experience with beautiful motion and fast performance.",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Jordan Lee",
      role: "Founder, Orchard",
      quote:
        "The portfolio redesign elevated our brand and simplified the product story for every user.",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Ayesha Khan",
      role: "Marketing Director, Nova Studio",
      quote:
        "Responsive, polished, and easy to maintain — the final site exceeded our expectations.",
      avatar:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80",
    },
  ];

  return (
    <section id="testimonials" className="section">
      <div className="section-title">
        <span className="section-eyebrow">Testimonials</span>
        <h2 className="section-heading">Partners who trust design, speed, and clarity.</h2>
      </div>

      <p className="section-subtitle">
        Feedback from teams that needed an elevated digital presence without sacrificing usability.
      </p>

      <div className="testimonials-grid" style={{ marginTop: "2.5rem" }}>
        {testimonials.map((item) => (
          <article key={item.name} className="testimonial-card">
            <div className="testimonial-avatar">
              <img src={item.avatar} alt={item.name} />
              <div>
                <p className="testimonial-name">{item.name}</p>
                <p className="testimonial-role">{item.role}</p>
              </div>
            </div>
            <p className="testimonial-copy">“{item.quote}”</p>
          </article>
        ))}
      </div>
    </section>
  );
}
