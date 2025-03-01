import "./App.css";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import Products from "./Components/Products";
import GetInsp from "./Components/GetInsp/GetInsp";
import Footer from "./Components/Footer/Footer";
import PosterMsg from "./Components/PosterMsg/PosterMsg";
function App() {
  return (
    <>
      <Header />
      <Banner />
      <Products />
      <PosterMsg />

      <GetInsp />
      <Footer />
    </>
  );
}

export default App;
