import styles from "./home.module.css";

import Header from "../../ui/header/header";
import Hero from "../../ui/hero/hero.jsx";
import Section1 from "../../ui/section1/section1.jsx";
import Section2 from "../../ui/section2/section2.jsx";
import Cards from "../../ui/section2/card.jsx";
import Section3 from "../../ui/section3/section3.jsx";
import Section4 from "../../ui/section4/section4.jsx";
import Section5 from "../../ui/section5/section5.jsx";
import Section6 from "../../ui/section6/section6.jsx";
import Section7 from "../../ui/section7/section7.jsx";
import Section8 from "../../ui/section8/section8.jsx";
import Section9 from "../../ui/section9/section9.jsx";
import Section10 from "../../ui/section10/section10.jsx";
import Footer from "../../ui/footer/footer.jsx";

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
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Footer />
    </>
  );
};

export default Home;
