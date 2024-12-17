import React from "react";
import { useParams } from "react-router-dom";
import Hero2 from "./Hero2";
import ImageSection from "./Image";
import LocationSection from "./MoreInformations";
import RatingSection from "./Rating";
import Cared2 from "./Cared2";
import Card3 from "./Card3";
import FooterSection from "../Home/Footer";

const RestaurantDetail = () => {
  const { id } = useParams();

  return (
    
      <main>
      
        <Hero2 /> 
        <ImageSection />
        <LocationSection />
        <RatingSection />
        <Cared2 />
        <Card3 />
        <FooterSection />
        
         {id}
      </main>
    
  );
};

export default RestaurantDetail;
