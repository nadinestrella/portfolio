import React from 'react';
import { Title } from './ui/Title';

export const Experience = ({ title }) => {
  return (
    <div>
      <Title title={title} />
      <ul className="flex flex-col items-start">
        <li>
          <h4 className="font-semibold">
            {' '}
            Volunteering at Adopta un Junior- Frontend
          </h4>
          <span className="text-sm text-slate-500">
            May 2024- July 2025 | Online
          </span>
          <p>
            Development of the blog for Adopt a Junior. Next, React, TypeScript,
            HTML y Tailwind.{' '}
          </p>
        </li>
        <li>
          <h4 className="font-semibold"> Founder- rentalpadel</h4>
          <span className="text-sm text-slate-500">
            Mar 2023 - Sept 2023 | Madrid
          </span>
          <p>aaa</p>
        </li>
        <li>
          <h4 className="font-semibold"> Barista- Starbucks</h4>
          <span className="text-sm text-slate-500">
            Feb 2017 - Jan 2019 | London, UK
          </span>
          <p>aa</p>
        </li>
        <li>
          <h4 className="font-semibold"> Accountant - Humiclima, ACS Group</h4>
          <span className="text-sm text-slate-500">
            Mar 2014 - Dec 2016 | Palma de Mallorca
          </span>
          <p>aa</p>
        </li>
        <li>
          <h4 className="font-semibold"> Accountant - Atil Cobra, ACS Group</h4>
          <span className="text-sm text-slate-500">
            May 2011- Mar 2014 - Madrid
          </span>
          <p>aa</p>
        </li>
      </ul>
    </div>
  );
};
