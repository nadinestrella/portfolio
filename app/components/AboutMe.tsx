import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export const AboutMe = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-screen-md mx-auto mt-7">
      <div className="flex flex-col md:flex-row md:gap-7 justify-center items-center pb-3">
        <Link href={`/`}>
          <Image
            width={150}
            height={150}
            alt="myself photo"
            src={'/nadineProfile.jpg'}
            className="object-cover w-28 md:w-40 h-28 md:h-40 overflow-hidden rounded-full mb-3 hover:transform hover:scale-105"
          />
        </Link>

        <div className="flex flex-col justify-center items-center md:items-start md:w-2/3">
          <h1 className="pb-3 text-lg md:text-2xl  ">
            Hi! 👋 I am{' '}
            <strong className="text-blueSky">Nadine Estrella</strong>
          </h1>
          <p className="pb-3 text-center md:text-left text-gray-600">
            {' '}
            I am a Junior Fullstack Developer based in Madrid, eager to
            kickstart my career in the tech industry.
          </p>
          <div className="flex flex-row gap-2 items-center text-xs">
            <Link
              href={`/about`}
              className=" text-sky-800  hover:text-blueSky underline underline-offset-1"
            >
              Get know about me,{' '}
            </Link>
            <span className="text-sky-800">or visit my</span>
            <a
              href="https://www.linkedin.com/in/nadinestrellavacas/"
              target="_blank"
              className=" text-sky-800  hover:text-blueSky"
            >
              <FontAwesomeIcon className="text-lg" icon={faLinkedin} />
            </a>
            <a
              href="https://github.com/nadinestrella"
              target="_blank"
              className=" text-sky-800  hover:text-blueSky"
            >
              <FontAwesomeIcon className="text-lg" icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
