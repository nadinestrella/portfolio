import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

interface CardProps {
  title: string;
  text: string;
  link: string;
  tech: string;
  imageUrl: string;
  repoLink: string;
}

export const Card = ({
  title,
  text,
  link,
  tech,
  imageUrl,
  repoLink,
}: CardProps) => {
  return (
    <article className="border-2 rounded-lg w-full p-2 shadow-lg border-background flex flex-col">
      <h4 className="flex flex-col justify-center items-center font-semibold p-3 ">
        {title}
      </h4>

      <Image
        width={300}
        height={300}
        alt="project photo"
        src={imageUrl}
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
            className="inline-flex justify-center items-center h-10 w-10 text-sm bg-darkBlue hover:bg-lightBlue  hover:text-darkBlue rounded-full text-white"
            href={link}
            target="_blank"
          >
            <FontAwesomeIcon className="text-lg" icon={faLink} />
          </a>
          <a
            className="inline-flex justify-center items-center h-10 w-10 text-sm  bg-darkBlue  hover:bg-lightBlue  hover:text-darkBlue rounded-full text-white"
            href={repoLink}
            title="View code in github"
            target="_blank"
          >
            <FontAwesomeIcon className="text-lg" icon={faGithub} />
          </a>
        </div>
      </div>
    </article>
  );
};
