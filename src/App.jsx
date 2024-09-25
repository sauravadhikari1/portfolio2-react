import "./App.css";
import { Routes, Route, Outlet, Link } from "react-router-dom";

import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Project } from "./components/Project";
import { Skill } from "./components/Skill";
import Layout from "./components/layout";


function App() {
  return (
    <>
      {/* <!-- dar mode toggler --> */}


        {/* <!-- hero section  --> */}
        {/* <Hero /> */}

        {/* <!-- skills section  --> */}
        {/* <Skill /> */}

        {/* <!-- project section  --> */}
        {/* <Project /> */}

        {/* <!-- about me section  --> */}
        {/* <About /> */}

        {/* <!-- Contact section  --> */}
        {/* <Contact /> */}

        {/* <!-- Footer section  --> */}
        <Routes>
          <Route path="/" element ={<Layout />}>

          <Route path="/" element ={<Hero />} />
          <Route path="skills" element ={<Skill />} />
          <Route path="projects" element ={<Project />} />
          <Route path="about" element ={<About/>} />
          <Route path="contact" element ={<Contact />} />
            </Route>

        </Routes>

    </>
  );
}

export default App;
