import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, About, Projects, Contact } from "./pages";
import PreLoader from "./components/PreLoader";
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <PreLoader />
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </Router>
    </main>
  );
};

export default App;
