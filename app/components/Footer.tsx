import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {
  return (
    <footer className="mt-auto">
      <div className="flex flex-col justify-center items-center bg-lightBlue p-4 gap-2 text-sky-800 mt-12">
        <p>Nadine Estrella | {new Date().getFullYear()}</p>
        <div className="flex flex-row gap-5">
          <a
            href="https://www.linkedin.com/in/nadinestrellavacas/"
            target="_blank"
            className=" text-sky-800  hover:text-blueSky"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

          <a
            href="https://github.com/nadinestrella"
            target="_blank"
            className=" text-sky-800  hover:text-blueSky"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="mailto:nadinestrella@gmail.com"
            className=" text-sky-800  hover:text-blueSky"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
    </footer>
  );
};
