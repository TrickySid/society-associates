import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";
import About from "./components/About";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Services />
      <About />
      <Clients />
      <Contact />
    </div>
  );
}
