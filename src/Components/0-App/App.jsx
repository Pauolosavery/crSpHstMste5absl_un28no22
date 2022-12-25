import NavBar from "../1-NavBar/NavBar.jsx";
import Home from "../2-Home/Home.jsx";
import Skill from "../3-Skill/Skill.jsx";
import Portfolio from "../4-Portfolio/Portfolio.jsx";
import About from "../5-About/About.jsx";
import Contacts from "../91-Contacts/Contacts.jsx";
import Footer from "../92-Footer/Footer.jsx";
import ScrollTop from "./ScrollTop.jsx";
import style from "./App.module.css";
function App() {
  return (
    <div className={style.app}>
      <NavBar />
      <ScrollTop />
      <Home />
      <Skill />
      <Portfolio />
      <About />

      {/* <Services /> */}
      {/* <Education /> */}
      {/* <Achievements /> */}
      {/* <SocialNetwork /> */}
      <Contacts />
      <Footer />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
