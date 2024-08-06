import React from 'react';
import { Card } from './ui/Card';
import { Title } from './ui/Title';

export const MyProjects = ({ title }) => {
  return (
    <div className="flex flex-col items-center p-3 boder b-2 b-zinc-200 rounded-lg ">
      <Title title={title} />

      <div>
        <Card
          titleCard="GiftList"
          text="Interactive application for kids that allows them to create a gift list."
          link="https://gift-list-eight.vercel.app/"
          linkrepo="https://github.com/nadinestrella/GiftList"
          tech="HTML5, JavaScript, React, NextJS, TypeScript, NodeJS, Tailwind"
          image={'/giftList.png'}
        />
        <Card
          titleCard="Harry Potter"
          text="Web search engine for characters from the famous Harry Potter series."
          link="https://nadinestrella.github.io/HarryPotter/"
          linkrepo="https://github.com/nadinestrella/HarryPotter"
          tech="HTML5, SASS, JavaScript, React"
          image={'/harryPotter.png'}
        />
        <Card
          titleCard="My To Do List"
          text="It allows y﻿ou to efficiently organize and keep monitor your tasks."
          link="https://nadinestrella.github.io/myToDoList/"
          linkrepo="https://github.com/nadinestrella/myToDoList"
          tech="HTML5, SASS, JavaScript"
          image={'/myToDoList.png'}
        />
      </div>
    </div>
  );
};
