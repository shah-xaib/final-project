import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Product from "./Product";
// import Resume from "./Resume";
import Contact from "./Contact";
import p1 from "./assets/bb.jpg";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        
        <nav className="a navbar-fixed">
          <Link to="/">
            <img src={p1} className="b" alt="AutoDrive Logo" />
          </Link>
          <h1 className="company-name">SK Mughal Suiting😃</h1>
          <ul className="c">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
            {/* <li>
              <Link to="/resume">Resume</Link>
            </li> */}
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>

      
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          {/* <Route path="/resume" element={<Resume />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
