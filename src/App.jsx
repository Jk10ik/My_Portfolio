import './app.scss'
import Topbar from "./components/topbar/Topbar";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonial from "./components/testimonial/Testimonial";
import Contact from "./components/contact/Contact";
import { useState } from "react";
import Menue from "./components/menue/Menue";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./components/about/About";
import Experience from './components/experience/Experience';
import Footer from './components/Footer/Footer';


function App() {
  const [openMenue, setOpenMenue] = useState(false)

  return (
    <div className="app">
      <Topbar
        openMenue={openMenue}
        setOpenMenue={setOpenMenue} />
      <Menue openMenue={openMenue}
        setOpenMenue={setOpenMenue} />
      <div className="sections">
      <Home/>
      <About/>
      <Portfolio />
      <Experience/>
      <Testimonial />
      <Contact />
      <Footer/>
      </div>


    </div>
  );
}

export default App;
