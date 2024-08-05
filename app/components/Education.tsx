import React from 'react';
import { Title } from './ui/Title';

export const Education = ({ title }) => {
  return (
    <div className="flex flex-col   items-center">
      <Title title={title} />
      <ul>
        <li>
          <h4>Google Career Certificate in Cybrsecurity</h4>
          <span>Apr 2024 - Currently | Online</span>
        </li>
        <li>
          <h4>Web Programming Bootcamp</h4>
          <span>Adalab</span>
          <span>adalab.es | 2023-2024 | Online</span>
          <ul>
            <li>
              HTML5, CSS3, SCSS, JavaScript, React.js, Node.js y Express.js.
            </li>
            <li>MySQL, MySQL Workbench y MongoDB.</li>
            <li>Agile, Scrum y Git.</li>
            <li>
              <h4>Carlos III University</h4>
              <p>University Degree, Business Administration and Management </p>
              <span>2008-2011 | Madrid, Spain</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
