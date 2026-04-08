import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Background from "./components/Background";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <div className="app-shell">
      <Background />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
