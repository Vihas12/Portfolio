import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";

import "./Style/Style.css";

const infoProps = {
  name: "Vihas Poojari",
  title:
    "Full Stack Developer | Artificial Intelligence and Machine Learning Enthusiast",
  info: "I am a Full Stack Developer with a passion for Artificial Intelligence and Machine Learning. I am always eager to learn new technologies and explore new domains.",
  email: "alex@example.com",
  gitHub: "microsoft",
  instagram: "microsoft",
  linkedIn: "satyanadella",
  medium: "",
  twitter: "microsoft",
  youTube: "Code",
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
      </div>
    </div>
  );
}

export default App;
