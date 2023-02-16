import NavBar from "../1-NavBar/NavBar.jsx";
import Home from "../2-Home/Home.jsx";
import Skill from "../3-Skill/Skill.jsx";
import Portfolio from "../4-Portfolio/Portfolio.jsx";
import About from "../5-About/About.jsx";
import Contacts from "../91-Contacts/Contacts.jsx";
import Footer from "../92-Footer/Footer.jsx";
import style from "./App.module.css";
function App() {
  return (
    <div className={style.app}>
      <NavBar />
      <Home />
      <Skill />
      <Portfolio />
      <About />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
