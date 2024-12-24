import React from "react";
// import Navbar from "./components/Navbar/Navbar";


import AOS from "aos";
import "aos/dist/aos.css";
import Hero from './../components/Hero/Hero';
import Products from './../components/Products/Products';
import TopProducts from './../components/TopProducts/TopProducts';
import Banner from './../components/Banner/Banner';
import Subscribe from './../components/Subscribe/Subscribe';
import Testimonials from './../components/Testimonials/Testimonials';

import Popup from './../components/Popup/Popup';




const Main = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      {/* <Navbar handleOrderPopup={handleOrderPopup} /> */}
      <Hero handleOrderPopup={handleOrderPopup} />
      <Products />
      <TopProducts  />
      <Banner />
      <Subscribe />
      <Testimonials />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default Main;
