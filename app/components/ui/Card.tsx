import React from 'react';
import Image from 'next/image';
export const Card = ({ titleCard, text, link, tech, image, linkrepo }) => {
  return (
    <article className="border-2 rounded-lg w-full p-2 m-2 shadow-lg border-background">
      <h4 className="flex flex-col justify-center md:flex-row items-center font-semibold p-3 ">
        {titleCard}
      </h4>

      <Image
        width={300}
        height={300}
        alt="project photo"
        src={image}
        className="p-3 w-full max-h-52  rounded"
      />

      <p className="p-3">{text} </p>
      <span className="p-3 text-sm">Tech:{tech}</span>
      <a className="block text-sm" href={link} target="_blank">
        Visit live project
      </a>
      <a className="pb-3 block text-sm" href={linkrepo} target="_blank">
        View code
      </a>
    </article>
  );
};
