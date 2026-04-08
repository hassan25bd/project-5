import profilePhoto from "../picture/Image_2026-02-20_111327_278.jpg";

const navigation = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="nav-shell">
      <a className="nav-brand" href="#home">
        <img
          className="nav-logo"
          src={profilePhoto}
          alt="Hassan logo"
        />
        <div>
          <strong>Emam Hassan Abid</strong>
          <span>Frontend Architect</span>
        </div>
      </a>

      <nav className="nav-links">
        {navigation.map((item) => (
          <a key={item.href} className="nav-link" href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="btn btn-primary nav-cta" href="#contact">
        Hire Me
      </a>
    </header>
  );
}
