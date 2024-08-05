import React from 'react';
import Image from 'next/image';
export const Card = ({ titleCard, text, link, tech, image }) => {
  return (
    <article className="border-2 rounded w-full bg-zinc-200 p-2 ">
      <h4 className="flex flex-col items-center font-semibold p-3">
        {titleCard}
      </h4>
      <Image
        width={200}
        height={200}
        alt="project photo"
        src={image}
        className="p-3"
      />
      <p className="p-3">{text} </p>
      <span className="p-3">{tech}</span>
      <a className="p-3 block">{link}</a>
    </article>
  );
};
