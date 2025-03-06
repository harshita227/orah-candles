import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cartpage from "./Components/cartDoc/Cartpage";
import Home from "./Components/Home/Home";
import Userpage from "./Components/UserPage/Userpage";
import About from "./Components/About/About";
import Shopnowpage from "./Components/Shop/Shopnowpage";
import Orahbyyou from "./Components/Orah/Orahbyyou";
import Collabrations from "./Components/Collab/Collabrations";
import Cartpaymentpage from "./Components/cartDoc/Cartpaymentpage";
import Buynowpayment from "./Components/Productsection/Buynowpayment";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cartpage" element={<Cartpage />} />
          <Route path="/userpage" element={<Userpage />} />
          <Route path="/about" element={<About />} />
          <Route path="/shopnow" element={<Shopnowpage />} />
          <Route path="/orah" element={<Orahbyyou />} />
          <Route path="/collabaration" element={<Collabrations />} />
          <Route path="/cartpayment" element={<Cartpaymentpage />} />
          <Route path="/buynowpayment" element={<Buynowpayment />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
