import Image from 'next/image';
import React from 'react';

interface ExperienceItemProps {
  title: string;
  date: string;
  content?: string | JSX.Element;
  imageUrl: string;
}

export const ExperienceItem = ({
  title,
  date,
  content,
  imageUrl,
}: ExperienceItemProps) => {
  return (
    <li className="flex gap-4 ">
      <Image
        width={100}
        height={100}
        alt={`Logo of ${title}`}
        src={imageUrl}
        className="w-16 h-16 shadow-md"
      />
      <div>
        <h4 className="font-semibold"> {title}</h4>
        <span className="text-sm text-slate-500">{date}</span>
        <div className="text-sm text-grey">{content}</div>
      </div>
    </li>
  );
};
