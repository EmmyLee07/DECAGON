import styles from "./home.module.css";

import Header from "../../ui/header/header";
import Hero from "../../ui/hero/hero.jsx";
import Section1 from "../../ui/section1/section1.jsx";
import Section2 from "../../ui/section2/section2.jsx";
import Cards from "../../ui/section2/card.jsx";
import Section3 from "../../ui/section3/section3.jsx";
import Section4 from "../../ui/section4/section4.jsx";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Section1 />
      <Section2 />
      <Cards />
      <Section3 />
      <Section4 />
    </>
  );
};

export default Home;
