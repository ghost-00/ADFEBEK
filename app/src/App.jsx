import "./App.css";
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import Slider from "./components/slider";
import About from "./components/about";
import Services from "./components/services";
import Gallery from "./components/gallery";
import Contact from "./components/contact";

function App() {
  return (
    <>
      <Header />
      <Slider />
      <About />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
