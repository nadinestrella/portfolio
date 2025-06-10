import React from 'react';

import { Title, TitleProps } from './ui/Title';
import { ExperienceItem } from './ui/ExperienceItem';

export const Experience = ({ title }: TitleProps) => {
  return (
    <div id="experience">
      <Title title={title} />
      <ul className="flex flex-col items-start pb-3 gap-4">
        <ExperienceItem
          title="Junior Frontend Developer - APlanet"
          date="Oct 2024 - May 2025 | Online"
          imageUrl="/companies/aPlanet.jpeg"
          content={
            <div>
              <ul className="mb-2">
                <li>
                  Contributed to the platform’s design system by creating
                  reusable components for use in both new and existing pages.
                </li>
                <li>
                  Fixed bugs and collaborated on ongoing improvements to the
                  user interface (UI) and user experience (UX).{' '}
                </li>
                <li>
                  Translated Figma designs into accessible, production-ready
                  interfaces.
                </li>
                <li>
                  Refactored core components (Buttons, Cards, Checkboxes, Radio
                  Buttons) to enhance maintainability and accessibility.
                </li>
                <li>
                  Used React Query to efficiently and scalably fetch and manage
                  data.
                </li>
                <li>Documented components using Storybook.</li>
                <li>
                  Consumed RESTful APIs and used/created custom and React hooks
                  to manage state and side effects.
                </li>
              </ul>
              <p>Using:</p>
              <ul className="list-disc pl-3">
                <li>
                  React, JavaScript, Sass and Typescript for the Frontend.
                </li>
                <li>Storybook for documentation.</li>
                <li>Figma for Designs.</li>
              </ul>
            </div>
          }
        />
        <ExperienceItem
          title="Volunteering at Adopta un Junior - Frontend"
          date="Aug 2024 - Oct 2024 | Online"
          content={
            <div>
              <p className="mb-2">
                Development of the page for Adopta un Junior. Next, React,
              </p>
              <p>Using:</p>
              <ul className="list-disc pl-3">
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
              <p className="mb-2">
                Presented the project to the AdoptaUnJunior staff along with my
                team.
              </p>
              <p>Using:</p>
              <ul className="list-disc pl-3">
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
