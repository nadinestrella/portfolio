import React from 'react';
import { Title, TitleProps } from './ui/Title';
import { ExperienceItem } from './ui/ExperienceItem';

export const Education = ({ title }: TitleProps) => {
  return (
    <div id="education" className="mb-3">
      <Title title={title} />
      <ul className="flex flex-col items-start pb-3 gap-4 ">
        <ExperienceItem
          title="Google Career Certificate in Cybersecurity"
          date="Apr 2024 - Currently | Online"
          imageUrl="/companies/google.jpeg"
        />
        <ExperienceItem
          title="Web Programming Bootcamp - Adalab"
          date="2023-2024 | Online"
          imageUrl="/companies/adalab_logo.jpeg"
          content={
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
          }
        />
        <ExperienceItem
          title="University Degree, Business Administration and Management - Carlos III University"
          date="2008-2011 | Madrid, Spain"
          imageUrl="/companies/carlos_iii.jpeg"
        />
      </ul>
    </div>
  );
};
