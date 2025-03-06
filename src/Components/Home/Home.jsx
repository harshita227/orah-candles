import Banner from "../Banner/Banner";
import Products from "../Productsection/Products";
import GetInsp from "../GetInsp/GetInsp";
import Footer from "../Footer/Footer";
import PosterMsg from "../PosterMsg/PosterMsg";
import Header from "../Header/Header";

function Home() {
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

export default Home;
