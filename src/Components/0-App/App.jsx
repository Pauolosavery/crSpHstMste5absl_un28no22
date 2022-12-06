// import { useDispatch, useSelector } from "react-redux";

// import { useEffect } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "../1-NavBar/NavBar.jsx";
import Home from "../2-Home/Home.jsx";
import Skill from "../3-Skill/Skill.jsx";
import Portfolio from "../4-Portfolio/Portfolio.jsx";
import About from "../5-About/About.jsx";
// import Services from "../6-Services/Services.jsx";
// import Education from "../7-Education/Education.jsx";
// import Achievements from "../8-Achievements/Achievements.jsx";
// import SocialNetwork from "../9-SocialNetwork/SocialNetwork.jsx";
import Contacts from "../91-Contacts/Contacts.jsx";
import Footer from "../92-Footer/Footer.jsx";
// import { fetchGetUser } from "../redux/thunk/thunk";

function App() {
  // const { user } = useSelector((state) => state.user);

  return (
    <div className="App">
      <NavBar />
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
