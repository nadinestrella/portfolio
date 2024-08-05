import React from 'react';
import { Card } from './ui/Card';
import { Title } from './ui/Title';

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

      <div>
        <Card
          titleCard="GiftList"
          text="Interactive application for kids that allows them to create a gift list."
          link="https://gift-list-eight.vercel.app/"
          tech="HTML5, JavaScript, React, NextJS, TypeScript, NodeJS, Tailwind"
          image={'/giftList.png'}
        />
        <Card
          titleCard="Harry Potter"
          text="Web search engine for characters from the famous Harry Potter series."
          link="https://nadinestrella.github.io/HarryPotter/"
          tech="HTML5, SASS, JavaScript, React"
          image={'/harryPotter.png'}
        />
        <Card
          titleCard="My To Do List"
          text="It allows y﻿ou to efficiently organize and keep monitor your tasks."
          link="https://nadinestrella.github.io/myToDoList/"
          tech="HTML5, SASS, JavaScript"
          image={'/myToDoList.png'}
        />
      </div>
    </div>
  );
};
