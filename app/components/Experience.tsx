import React from 'react';
import { Title } from '../ui/Title';

export const Experience = ({ title }) => {
  return (
    <div>
      <Title title={title} />
      <ul>
        <li>
          <h4> Volunteering at Adopta un Junior- Frontend</h4>
          <span>May 2024- July 2025 | Online</span>
          <p>
            Development of the blog for Adopt a Junior. Next, React, TypeScript,
            HTML y Tailwind.{' '}
          </p>
        </li>
        <li>
          <h4> Founder- rentalpadel</h4>
          <span>Mar 2023 - Sept 2023 | Madrid</span>
          <p>aaa</p>
        </li>
        <li>
          <h4> Barista- Starbucks</h4>
          <span>Feb 2017 - Jan 2019 | London, UK</span>
          <p>aa</p>
        </li>
        <li>
          <h4> Accountant - Humiclima, ACS Group</h4>
          <span>Mar 2014 - Dec 2016 | Palma de Mallorca</span>
          <p>aa</p>
        </li>
        <li>
          <h4> Accountant - Atil Cobra, ACS Group</h4>
          <span>May 2011- Mar 2014 - Madrid</span>
          <p>aa</p>
        </li>
      </ul>
    </div>
  );
};
