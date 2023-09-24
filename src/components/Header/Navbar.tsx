import { useState, useEffect } from "react";
import resume from "/Users/mattf/Projects/portfilio-website-v2/src/assets/Matthew Larrosa Resume.pdf";
import "./Navbar.css";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openInNewTab = (url: string | URL | undefined) => {
    window.open(url, "_blank", "noreferrer");
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600 && isNavOpen) {
        setIsNavOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isNavOpen]);

  return (
    <>
      <div className="navContainer">
        <div className="navBar">
          <a href="#home" className="headerTitle">
            Matthew Larrosa.
          </a>
          <div className="navLinks">
            <li className="navLinksText">
              <a href="#home">Home</a>
            </li>
            <li className="navLinksText">
              <a href="#education">Education</a>
            </li>
            <li className="navLinksText">
              <a href="#projects">Projects</a>
            </li>
            <li className="navLinksText">
              <a href="#experience">Experience</a>
            </li>
            <li className="navLinksText">
              <a href="#contact">Contact</a>
            </li>
            <li className="navLinksTextResume">
              <a
                onClick={() => openInNewTab(resume)}
                href=""
              >
                Resume
              </a>
            </li>
          </div>
        </div>
        <div>
          <button
            className="sidebarToggle"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <div id="nav-icon3" className={isNavOpen ? "open" : ""}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          <nav className={`nav ${isNavOpen ? "nav-open" : "nav-closed"}`}>
            <ul>
              <li className="links">
                <a onClick={() => setIsNavOpen(!isNavOpen)} href="#home">
                  Home
                </a>
              </li>
              <li className="links">
                <a onClick={() => setIsNavOpen(!isNavOpen)} href="#education">
                  Education
                </a>
              </li>
              <li className="links">
                <a onClick={() => setIsNavOpen(!isNavOpen)} href="#projects">
                  Projects
                </a>
              </li>
              <li className="links">
                <a onClick={() => setIsNavOpen(!isNavOpen)} href="#experience">
                  Experience
                </a>
              </li>
              <li className="links">
                <a onClick={() => setIsNavOpen(!isNavOpen)} href="#contact">
                  Contact
                </a>
              </li>
              <li className="links">
                <a
                  onClick={() => openInNewTab(resume)}
                  className="resume"
                  href=""
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
