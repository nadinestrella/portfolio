import React from 'react';
import { Title } from './ui/Title';
import {
  CSS,
  Git,
  Github,
  HTML5,
  JavaScript,
  MySQL,
  Next,
  Node,
  Reactt,
  Sass,
  TailwindCSS,
} from '../components/ui/Logos';

const Skills = ({ title }) => {
  return (
    <div>
      <Title title={title} />

      <h4 className="font-semibold">Frontend</h4>
      <li>
        <ul>
          <li>HTML5</li>
          <li>CSS</li>
          <li>
            <Sass />
            SASS
          </li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Next</li>
          <li>Tailwind</li>
          <li>TypeScript</li>
        </ul>
      </li>
      <h4 className="font-semibold">Backend</h4>

      <ul>
        <li>Node.js</li>
        <li>MySQL</li>
        <li>Mongo DB</li>
      </ul>
      <h4 className="font-semibold">Others</h4>
      <ul>
        <li>GitHub</li>
      </ul>
      <h4 className="font-semibold">Soft Skills</h4>

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
