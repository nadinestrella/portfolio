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
          content={
            <div>
              <p className="mb-2">
                Development of the page for Adopta un Junior. Next, React,
                TypeScript, HTML y Tailwind.
              </p>
              <ul className="list-disc pl-3">
                Using:
                <li>Typescript, NextJS, React, Tailwind for the Frontend</li>
                <li>Java, Spring, MySQL for the Backend</li>
                <li>Figma for Designs.</li>
              </ul>
            </div>
          }
          imageUrl="/companies/adoptaunjunior_logo.jpeg"
        />
        <ExperienceItem
          title="Volunteering at Adopta un Junior - Frontend"
          date=" May 2024- July 2025 | Online"
          imageUrl="/companies/adoptaunjunior_logo.jpeg"
          content={
            <div>
              <p>Collaborated on the Frontend side of the blog.</p>
              <p>
                Creation of reusable components that were used throughout the
                codebase.
              </p>
              <p>
                Created a scalable folder structure the project in where
                everyone was comfortable.
              </p>
              <p>
                Introduced Typescript to the project, making the code more
                reliable and easier to maintain.
              </p>
              <p>
                Collaborated with the designers in order to align styles and
                create mainteniable code.
              </p>
              <p>
                Presented the project to the AdoptaUnJunior staff along with my
                team.
              </p>
              <ul className="list-disc pl-3">
                Using:
                <li>Typescript, NextJS, React, Tailwind for the Frontend</li>
                <li>Java, Spring, MySQL for the Backend</li>
                <li>Figma for Designs.</li>
              </ul>
            </div>
          }
        />
        <ExperienceItem
          title="Founder - rentalpadel"
          date="Mar 2023 - Sept 2023 | Madrid"
          imageUrl="/companies/rentalpadel.png"
          content={
            <ul>
              <li>
                Founded a company that offered a service of renting Padel
                rackets
              </li>
              <li>
                Created a website in which people could sign up for early beta
                so I could know if people were interested, in which specific
                rackets I needed to focus and to get early customers.
              </li>
              <li>
                Created a Shopify website and managed all necessary plugins to
                make the sell happen.
              </li>
              <li>
                Responsible for social management and advertising campaigns.
              </li>
              <li>Created a financial plan for the company.</li>
              <li>Management of customer service and satisfaction.</li>
              <li>
                Supported on-site events and network with important people on
                the Padel industry.
              </li>
            </ul>
          }
        />
        <ExperienceItem
          title="Barista - Starbucks"
          date="Feb 2017 - Jan 2019 | London, UK"
          imageUrl="/companies/starbucks.jpeg"
          content={
            <div>
              <p>In charge of opening the store everyday.</p>
              <p>Till Management.</p>
              <p>Displays merchandise properly in all areas.</p>
              <p>Customer facing communication.</p>
            </div>
          }
        />

        <ExperienceItem
          title="Accountant - Humiclima, ACS Group"
          date="Mar 2014 - Dec 2016 | Palma de Mallorca"
          imageUrl="/companies/humiclima.jpeg"
          content={
            <div>
              <p>
                Process the day to day accounting transactions & maintaining the
                general ledgers.
              </p>
              <p>
                Carrying out daily, weekly, monthly reconciliations, management
                accounts & quarterly VAT returns.{' '}
              </p>
              <p>
                Preparing customers and subcontractors statements & dealing with
                credit control.{' '}
              </p>
              <p>Ensuring suppliers paid within the agreed terms.</p>
              <p>Preparing budgets, cash flow statements & related reports.</p>
              <p>General office administration duties & support.</p>
              <p>Monthly reconciliation of supplier and customer accounts. </p>
              <p>
                Monthly reconciliation of bank account and major balance sheet
                codes.
              </p>
              <p>
                Weekly update of cash flow report to include forecast period.
              </p>
            </div>
          }
        />
        <ExperienceItem
          title="Accountant - Atil Cobra, ACS Group"
          date="May 2011- Mar 2014 - Madrid"
          imageUrl="/companies/cobra.jpeg"
          content={
            <div>
              <p>
                Process the day to day accounting transactions & maintaining the
                general ledgers.
              </p>
              <p>
                Carrying out daily, weekly, monthly reconciliations, management
                accounts & quarterly VAT returns.
              </p>
              <p>
                Preparing customers and subcontractors statements & dealing with
                credit control.
              </p>
              <p>Ensuring suppliers paid within the agreed terms. </p>
              <p>Monthly reconciliation of supplier and customer accounts.</p>
              <p>
                Monthly reconciliation of bank account and major balance sheet
                codes.{' '}
              </p>
              <p>Having control of the company vehicles.</p>
              <p>Telephone support.</p>
              <p>General office administration duties & support. </p>
            </div>
          }
        />
      </ul>
    </div>
  );
};
