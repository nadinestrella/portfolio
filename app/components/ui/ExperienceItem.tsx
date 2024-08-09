import React from 'react';

interface ExperienceItemProps {
  title: string;
  date: string;
  content: string | JSX.Element;
}

export const ExperienceItem = ({
  title,
  date,
  content,
}: ExperienceItemProps) => {
  return (
    <li>
      <h4 className="font-semibold"> {title}</h4>
      <span className="text-sm text-slate-500">{date}</span>
      <p className="text-sm text-grey">{content}</p>
    </li>
  );
};
