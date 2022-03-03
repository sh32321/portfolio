import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./styles/main.scss";
import WorksList from "./components/Works/WorksList";

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <About />
      <WorksList />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
