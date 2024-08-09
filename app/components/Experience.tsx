import React from 'react';
import { Title } from './ui/Title';
import { ExperienceItem } from './ui/ExperienceItem';

export const Experience = ({ title }) => {
  return (
    <div id="experience">
      <Title title={title} />
      <ul className="flex flex-col items-start pb-3 gap-4">
        <ExperienceItem
          title="Volunteering at Adopta un Junior- Frontend"
          date="Aug 2024 - Currently | Online"
          content="Development of the page for Adopt a Junior. Next, React, TypeScript,
            HTML y Tailwind."
        />
        <ExperienceItem
          title="Volunteering at Adopta un Junior- Frontend"
          date=" May 2024- July 2025 | Online"
          content="Development of the blog for Adopt a Junior. Next, React, TypeScript,
            HTML y Tailwind."
        />
        <ExperienceItem
          title="Founder- rentalpadel"
          date="Mar 2023 - Sept 2023 | Madrid"
          content="aaa"
        />
        <ExperienceItem
          title="Barista- Starbucks"
          date="Feb 2017 - Jan 2019 | London, UK"
          content="aa"
        />

        <ExperienceItem
          title="Accountant - Humiclima, ACS Group"
          date="Mar 2014 - Dec 2016 | Palma de Mallorca"
          content="aa"
        />
        <ExperienceItem
          title="Accountant - Atil Cobra, ACS Group"
          date="May 2011- Mar 2014 - Madrid"
          content="aa"
        />
      </ul>
    </div>
  );
};
