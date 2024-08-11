import React from 'react';
import { Card } from './ui/Card';
import { Title, TitleProps } from './ui/Title';

export const MyProjects = ({ title }: TitleProps) => {
  return (
    <div className="flex flex-col p-3 mb-5">
      <Title title={title} />

      <div className="grid grid-flow-row md:grid-cols-2 lg:grid-cols-3 gap-2 mx-auto">
        <Card
          title="GiftList 🧒"
          text="Interactive application for kids that allows them to create a gift list."
          link="https://gift-list-eight.vercel.app/"
          repoLink="https://github.com/nadinestrella/GiftList"
          tech="HTML5, JavaScript, React, NextJS, TypeScript, NodeJS, Tailwind"
          imageUrl={'/giftList.png'}
        />
        <Card
          title="Harry Potter🪄"
          text="Web search engine for characters from the famous Harry Potter series."
          link="https://nadinestrella.github.io/HarryPotter/"
          repoLink="https://github.com/nadinestrella/HarryPotter"
          tech="HTML5, SASS, JavaScript, React"
          imageUrl={'/harryPotter.png'}
        />
        <Card
          title="My To Do List 🗒️"
          text="It allows y﻿ou to efficiently organize and keep monitor your tasks."
          link="https://nadinestrella.github.io/myToDoList/"
          repoLink="https://github.com/nadinestrella/myToDoList"
          tech="HTML5, SASS, JavaScript"
          imageUrl={'/myToDoList.png'}
        />
      </div>
    </div>
  );
};
