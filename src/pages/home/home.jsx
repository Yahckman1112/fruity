import React from "react";
import Banner from "./baner/banner";

import Produc from "./products/produc";
import AboutLand from "./about/aboutLand";
import NewsLand from "./news/newsLand";
import Loader from "../../components/loader/loader";

function Home(props) {
  return (
    <div>
     
      <Banner />
      <Produc />
      <AboutLand />
      <NewsLand />
    </div>
  );
}

export default Home;
