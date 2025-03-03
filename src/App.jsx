import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cartpage from "./Components/cartDoc/Cartpage";
import Home from "./Components/Home/Home";
import Userpage from "./Components/UserPage/Userpage";
import About from "./Components/About/About";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cartpage" element={<Cartpage />} />
          <Route path="/userpage" element={<Userpage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
