import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
export const Card = ({ titleCard, text, link, tech, image, linkrepo }) => {
  return (
    <article className="border-2 rounded-lg w-full p-2 shadow-lg border-background flex flex-col">
      <h4 className="flex flex-col justify-center items-center font-semibold p-3 ">
        {titleCard}
      </h4>

      <Image
        width={300}
        height={300}
        alt="project photo"
        src={image}
        className="p-3 w-full max-h-52 object-contain"
      />
      <div className="text-sm p-3 flex flex-col flex-grow justify-between ">
        <p className="mb-2">{text} </p>
        <p className=" text-grey text-xs mb-2">
          <strong>Tech:</strong> {tech}
        </p>
        <div className="flex gap-1 mt-auto pt-2">
          <a
            title="View project website"
            className="inline-flex justify-center items-center h-10 w-10 text-sm bg-darkBlue hover:bg-lightBlue rounded-full text-white"
            href={link}
            target="_blank"
          >
            <FontAwesomeIcon
              className="text-lg hover:text-darkBlue"
              icon={faLink}
            />
          </a>
          <a
            className="inline-flex justify-center items-center h-10 w-10 text-sm  bg-darkBlue  hover:bg-lightBlue rounded-full text-white"
            href={linkrepo}
            title="View code in github"
            target="_blank"
          >
            <FontAwesomeIcon
              className="text-lg  hover:text-darkBlue"
              icon={faGithub}
            />
          </a>
        </div>
      </div>
    </article>
  );
};
