// // src/pages/Home.js
// import React from "react";
// import Header from "../components/Header";

// import ImageGrid from "../components/ImageGrid"; // Import the ImageGrid component
// import CarouselCard from "../components/CarouselCard";
// import ShoeInfoSection from "../components/ShoeInfoSection";
// // import ProductGallery from './PromoAndProducts';

// const Home = () => {
//   return (
//     <>
//       <CarouselCard />
//       {/* <ShoeInfoSection /> */}
//       {/* <ProductGallery/> */}
     
//     </>
//   );
// };

// export default Home;
import React from 'react';
import '../styles/Home.css';

import ImageSlider from '../components/ImageSlider';


function Home() {
  return (
    <div className="home">
      <h2>Welcome to My Sneaker Site</h2>
      <p>Discover the best products and shop with ease.</p>
      <div className="hero">
        <ImageSlider></ImageSlider>
      </div>
    </div>
  );
}

export default Home;
