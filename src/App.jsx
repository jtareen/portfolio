import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import LinkBar from "./components/LinkBar";

import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";

import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-fira-code bg-background min-h-screen flex flex-col">
      <Navbar />

      <LinkBar />

      <main className="flex-grow px-4 md:px-20 lg:px-30 xl:px-40">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/aboutme" element={<AboutMe />} />
        </Routes>
      </main>
      <div className="w-full border-t border-gray mt-16"></div>
      <Footer />

      <ScrollToTop />
    </div>
  );
}

export default App;
