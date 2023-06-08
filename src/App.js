import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Women from "./component/Women";
import Kids from "./component/Kids";
import Men from "./component/Men";
import Jewellery from "./component/Jewellery";
import Wcart from "./component/Wcart";
import Mcart from "./component/Mcart";
import Login from "./Login";
import Registration from "./Registration";
// import Atb from "./component/Atb";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/component/men" element={<Men />} />
          <Route path="/component/women" element={<Women />} />
          <Route path="/component/kids" element={<Kids />} />
          <Route path="/component/jewellery" element={<Jewellery />} />
          <Route path="/component/wcart" element={<Wcart/>} />
          <Route path="/component/mcart" element={<Mcart/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/registration" element={<Registration/>} />
          {/* <Route path="/component/atb" element={<Atb/>} /> */}
        </Routes>
      </div>
        {/* <Footer /> */}
    </>
  );
}

export default App;
