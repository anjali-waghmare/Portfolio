import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Projects />
        <Experience />
        <About />
        <Contact />
      </main>
    </>
  );
}

export default App;
