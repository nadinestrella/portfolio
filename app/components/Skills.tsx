import React from 'react';
import { Title, TitleProps } from './ui/Title';
import {
  CSS,
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
  Figma,
} from '../components/ui/Logos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';

const Skills = ({ title }: TitleProps) => {
  return (
    <div id="skills" className="flex flex-col p-3 md:text-sm w-full">
      <Title title={title} />
      <div className="flex flex-col  md:items-start   md:flex-row gap-9 lg:flex-col md:mx-auto lg:m-0">
        <div>
          <h4 className="font-semibold text-lg pb-2">Frontend</h4>
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
        </div>
        <div>
          <h4 className="font-semibold text-lg pb-2">Backend</h4>
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
        </div>

        <div>
          <h4 className="font-semibold text-lg pb-2">Others</h4>
          <ul>
            <li className="flex flex-row gap-5 items-center">
              <Github /> <span>GitHub</span>
            </li>
            <li className="flex flex-row gap-5 items-center">
              <Figma /> <span>Figma</span>
            </li>
            <li className="flex flex-row gap-5 items-center">
              <FontAwesomeIcon icon={faTerminal} /> <span>Linux Terminal</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-lg pb-2">Soft Skills</h4>
          <ul>
            <li className="flex flex-row gap-5 items-center">
              👀 <span>Attention to detail</span>
            </li>
            <li className="flex flex-row gap-5 items-center">
              ✅ <span>Problem- solvin</span>
            </li>
            <li className="flex flex-row gap-5 items-center">
              👯‍♀️ <span>Team Work</span>
            </li>
            <li className="flex flex-row gap-5 items-center">
              ⏰<span>Time Management</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
