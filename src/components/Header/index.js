import React from "react";
import { Slider, Slide } from "../Slider";
import { Photo } from './styles'

const Header = () => {
  const settings = {
    spaceBetween: 50,
    slidesPerView: 3,
    navigation: true,
    pagination: true,
  };
  return (
    <Slider settings={settings}>
      <Slide>
        <Photo>
          <img width={350} src={require("../../assets/photo2.jpeg")} alt="" />
        </Photo>
      </Slide>
      <Slide>
        <img width={350} src={require("../../assets/photo2.jpeg")} alt="" />
      </Slide>
      <Slide>
        <img width={350} src={require("../../assets/photo2.jpeg")} alt="" />
      </Slide>
      <Slide>
        <img width={350} src={require("../../assets/photo2.jpeg")} alt="" />
      </Slide>
      <Slide>
        <img width={350} src={require("../../assets/photo2.jpeg")} alt="" />
      </Slide>
      <Slide>
        <img width={350} src={require("../../assets/photo2.jpeg")} alt="" />
      </Slide>
    </Slider>
  );
};

export default Header;
