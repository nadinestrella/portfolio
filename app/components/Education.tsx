import React from 'react';
import { Title } from './ui/Title';

export const Education = ({ title }) => {
  return (
    <div id="education" className="mb-3">
      <Title title={title} />
      <ul className="flex flex-col items-start pb-3 gap-4 ">
        <li>
          <h4 className="font-semibold">
            Google Career Certificate in Cybersecurity
          </h4>
          <span className="text-sm text-slate-500">
            Apr 2024 - Currently | Online
          </span>
        </li>
        <li>
          <h4 className="font-semibold">Web Programming Bootcamp - Adalab</h4>
          <span className="text-sm text-slate-500">2023-2024 | Online</span>

          <ul className="text-sm text-grey">
            <li>
              <strong>Front:</strong> HTML5, CSS3, SCSS, JavaScript, React.js,
              Node.js y Express.js.
            </li>
            <li>
              <strong>Back:</strong> MySQL, MySQL Workbench y MongoDB.
            </li>
            <li>
              <strong>Others:</strong> Agile, Scrum y Git.
            </li>
          </ul>
        </li>
        <li>
          <h4 className="font-semibold">Carlos III University</h4>
          <p className="font-semibold">
            University Degree, Business Administration and Management{' '}
          </p>
          <span className="text-sm text-slate-500">
            2008-2011 | Madrid, Spain
          </span>
        </li>
      </ul>
    </div>
  );
};
