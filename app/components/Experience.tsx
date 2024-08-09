import React from 'react';
import { Title, TitleProps } from './ui/Title';
import { ExperienceItem } from './ui/ExperienceItem';

export const Experience = ({ title }: TitleProps) => {
  return (
    <div id="experience">
      <Title title={title} />
      <ul className="flex flex-col items-start pb-3 gap-4">
        <ExperienceItem
          title="Volunteering at Adopta un Junior - Frontend"
          date="Aug 2024 - Currently | Online"
          content="Development of the page for Adopta un Junior. Next, React, TypeScript,
            HTML y Tailwind."
          imageUrl="/companies/adoptaunjunior_logo.jpeg"
        />
        <ExperienceItem
          title="Volunteering at Adopta un Junior- Frontend"
          date=" May 2024- July 2025 | Online"
          imageUrl="/companies/adoptaunjunior_logo.jpeg"
          content="Development of the blog for Adopta un Junior. Next, React, TypeScript,
            HTML y Tailwind."
        />
        <ExperienceItem
          title="Founder- rentalpadel"
          date="Mar 2023 - Sept 2023 | Madrid"
          imageUrl="/companies/adoptaunjunior_logo.jpeg"
          content="aaa"
        />
        <ExperienceItem
          title="Barista- Starbucks"
          date="Feb 2017 - Jan 2019 | London, UK"
          imageUrl="/companies/starbucks.jpeg"
          content="aa"
        />

        <ExperienceItem
          title="Accountant - Humiclima, ACS Group"
          date="Mar 2014 - Dec 2016 | Palma de Mallorca"
          imageUrl="/companies/humiclima.jpeg"
          content="aa"
        />
        <ExperienceItem
          title="Accountant - Atil Cobra, ACS Group"
          date="May 2011- Mar 2014 - Madrid"
          imageUrl="/companies/cobra.jpeg"
          content="aa"
        />
      </ul>
    </div>
  );
};
