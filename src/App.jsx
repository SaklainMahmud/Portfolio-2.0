import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* Animated background elements */}
      <div className="bg-particles" aria-hidden="true"></div>
      <div className="grid-overlay" aria-hidden="true"></div>

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
      </main>

      {/* Contact + Footer */}
      <Footer />
    </>
  );
}

export default App;
