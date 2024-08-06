import React from 'react';
import { Title } from './ui/Title';

export const Education = ({ title }) => {
  return (
    <div className="flex flex-col items-center pb-3 ">
      <Title title={title} />
      <ul>
        <li>
          <h4 className="font-semibold">
            Google Career Certificate in Cybrsecurity
          </h4>
          <span className="text-sm text-slate-500">
            Apr 2024 - Currently | Online
          </span>
        </li>
        <li>
          <h4 className="font-semibold">Web Programming Bootcamp - Adalab</h4>
          <span className="text-sm text-slate-500">2023-2024 | Online</span>

          <ul>
            <li>
              HTML5, CSS3, SCSS, JavaScript, React.js, Node.js y Express.js.
            </li>
            <li>MySQL, MySQL Workbench y MongoDB.</li>
            <li>Agile, Scrum y Git.</li>
            <li>
              <h4 className="font-semibold">Carlos III University</h4>
              <p>University Degree, Business Administration and Management </p>
              <span className="text-sm text-slate-500">
                2008-2011 | Madrid, Spain
              </span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
