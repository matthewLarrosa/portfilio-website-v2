import "./Fiu.css";
import Education from "/src/assets/TitleHeaders/EducationTitle.svg";
import CrestMobile from "/src/assets/fiuCrestMobile.svg";
import FiuTitleMobile from "/src/assets/fiuMobile.svg";
import init from "/src/assets/init.svg";
import btt from "/src/assets/btt.svg";
import hackathon from "/src/assets/hackathon.jpg"

function Fiu() {
  return (
    <div className="sectionContainer">
      <div className="educationContainer">
        <img className="educationTitle" src={Education} alt="educationTitle" />
        <div className="fiuContainer">
          <img className="fiuCrest" src={CrestMobile} alt="FIU crest" />
          <img className="fiuTitle" src={FiuTitleMobile} alt="FIU Title" />
        </div>
        <p>
          I am presently a senior at Florida International University, pursuing
          a Bachelor of Science in Computer Science. Throughout my college
          journey, I have actively participated in several organizations, with a
          primary focus on two key ones: BreakThroughTech MIA and INIT. In my
          involvement with BreakThroughTech, I successfully completed their
          development workshops and the 2023 internship program. Moreover, my
          accomplishments with INIT include being recognized as a 2023
          ShellHacks Winner for the Statefarm Challenge.
        </p>
        <div className="orgContainer">
          <img className="init" src={init} alt="init logo" />
          <img className="breakThroughTech" src={btt} alt="btt logo" />
        </div>
        <div className="shellhacksContainer">
          <img className="shellhacksPicture" src={hackathon} alt="hackathon picture" />
          <p>- ShellHacks 2023</p>
        </div>
      </div>
    </div>
  );
}

export default Fiu;
