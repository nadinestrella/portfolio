import React from 'react';
import { Card } from './ui/Card';
import { Title } from './ui/Title';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// import Slider from 'react-slick';

export const MyProjects = ({ title }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="flex flex-col items-center p-3">
      <Title title={title} />
      {/* <Slider
        className=" bg-background2 flex flex-col min-h-96 w-80 md:w-tablet rounded-lg m-auto p-2  "
        {...settings}
      > */}
      <div>
        <Card titleCard="GiftList" text="aaa" link="aaalink" />
        <Card titleCard="Harry Potter" text="aaa" link="aaalink" />
        <Card titleCard="My To Do List" text="aaa" link="aaalink" />
      </div>
      {/* </Slider> */}
    </div>
  );
};
