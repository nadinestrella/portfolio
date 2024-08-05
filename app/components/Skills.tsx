import React from 'react';
import { Title } from './ui/Title';
import {
  CSS,
  Git,
  Github,
  HTML5,
  JavaScript,
  MongoDB,
  MySQL,
  Next,
  Node,
  Reactt,
  Sass,
  TailwindCSS,
  TypeScript,
} from '../components/ui/Logos';

const Skills = ({ title }) => {
  return (
    <div className="flex flex-col   items-center">
      <Title title={title} />
      <h4 className="font-semibold text-lg">Frontend</h4>

      <ul>
        <li className="flex flex-row gap-5 items-center">
          <HTML5 />
          <span>HTML5</span>
        </li>
        <li className="flex flex-row gap-5 items-center">
          <CSS />
          <span>CSS</span>
        </li>
        <li className="flex flex-row gap-5 items-center">
          <Sass />
          <span>SASS</span>
        </li>
        <li className="flex flex-row gap-5 items-center">
          <JavaScript />
          <span>JavaScript</span>
        </li>
        <li className="flex flex-row gap-5 items-center">
          <Reactt />
          <span>React</span>
        </li>
        <li className="flex flex-row gap-5 items-center">
          <Next />
          <span>Next</span>
        </li>
        <li className="flex flex-row gap-5 items-center">
          <TailwindCSS />
          <span>Tailwind</span>
        </li>

        <li className="flex flex-row gap-5 items-center">
          <TypeScript />
          <span>TypeScript</span>
        </li>
      </ul>

      <h4 className="font-semibold text-lg">Backend</h4>
      <ul>
        <li className="flex flex-row gap-5 items-center">
          <Node />
          <span>Node.js</span>
        </li>
        <li className="flex flex-row gap-5 items-center">
          <MySQL />
          <span>MySQL</span>
        </li>
        <li className="flex flex-row gap-5 items-center">
          <MongoDB />
          Mongo DB
        </li>
      </ul>
      <h4 className="font-semibold text-lg ">Others</h4>
      <ul>
        <li className="flex flex-row gap-5 items-center">
          <Github /> <span>GitHub</span>
        </li>
      </ul>
      <h4 className="font-semibold text-lg">Soft Skills</h4>
      <ul>
        <li>Attention to detail</li>
        <li>Problem- solvin</li>
        <li>Team Work</li>
        <li>Time Management</li>
      </ul>
    </div>
  );
};

export default Skills;
