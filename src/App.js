import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Project from "./Components/Project";
import Footer from "./Components/Footer";

import "./Style/Style.css";

const infoProps = {
  name: "Vihas Poojari",
  title:
    "Full Stack Developer | Artificial Intelligence and Machine Learning Enthusiast",
  info: "I am a Full Stack Developer with a passion for Artificial Intelligence and Machine Learning. I am always eager to learn new technologies and explore new domains.",
  email: "vihas.poojari23@it.sce.edu.in",
  gitHub: "https://github.com/Vihas12",
  linkedIn: "https://www.linkedin.com/in/vihas-poojari"
};

function App() {
  return (
    <div className="main">
      <Header />
      <div className="container">
        <Home
          name={infoProps.name}
          title={infoProps.title}
          info={infoProps.info}
        />
        <About />
        <Skills />
        <Project />
      </div>
      <Footer {...infoProps} />
    </div>
  );
}

export default App;
