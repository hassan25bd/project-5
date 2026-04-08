export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section-title">
        <span className="section-eyebrow">Contact</span>
        <h2 className="section-heading">Ready to launch your next project?</h2>
      </div>

      <p className="section-subtitle">
        I’m available for freelance work and new opportunities. Send a message with your goal,
        timeline, or idea and I’ll respond promptly.
      </p>

      <div className="contact-grid">
        <div className="contact-card glass-card">
          <h3>Get in touch</h3>
          <p>
            Prefer email? I check messages daily and always aim to answer within one business day.
          </p>

          <div className="contact-list">
            <div className="contact-item">
              <strong>Email</strong>
              <a className="contact-link" href="mailto:abid2024bd@gmail.com">
                abid2024bd@gmail.com
              </a>
            </div>
            <div className="contact-item">
              <strong>Location</strong>
              <span>Remote / Worldwide</span>
            </div>
            <div className="contact-item">
              <strong>Availability</strong>
              <span>Open for new work</span>
            </div>
          </div>
          
        </div>

        <form className="contact-form glass-card" onSubmit={(event) => event.preventDefault()}>
          <input className="contact-input" type="text" placeholder="Your name" required />
          <input className="contact-input" type="email" placeholder="Your email" required />
          <textarea
            className="contact-textarea"
            rows="5"
            placeholder="Tell me about your project"
            required
          />
          <button type="submit" className="btn btn-primary contact-submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}