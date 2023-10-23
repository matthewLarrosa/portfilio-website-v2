import { useEffect, useRef } from "react";
import "./Hero.css";
// @ts-ignore
import headshot from "/src/assets/headshot.png";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Typed from "typed.js";
import { SiLinkedin, SiGithub } from "react-icons/si";

function Hero() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "I'm almost done with college!",
        "I love creating with React.",
        "Learn more about me below.",
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 100,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="heroContainer">
      <div className="heroContent">
        <img className="picture" src={headshot} alt="headshot" />
        <div className="heroWrap">
          <div className="name">Hello I'm Matt</div>
          <div className="typedContainer">
            <span className="typed" ref={el}></span>
          </div>
          <div className="socialsContainer">
            <div className="socialsText1">
              Stay in the loop with my activity
            </div>
            <div className="socialsText2">through my socials</div>
            <div className="socialsContent">
              <div className="linkedin">
                <a className="linkedinLogo" href="https://www.linkedin.com/in/matthew-larrosa-19-9999ml/"><SiLinkedin /></a>
              </div>
              <div className="github">
                <a className="githubLogo" href="https://github.com/matthewLarrosa"><SiGithub /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
