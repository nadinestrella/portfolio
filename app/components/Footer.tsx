import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center relative -bottom-9 bg-background p-4 gap-2 text-gray-500 ">
      <p>Nadine Estrella | 2024</p>
      <div className="flex flex-row gap-5">
        <a
          href="https://www.linkedin.com/in/nadinestrellavacas/"
          target="_blank"
          className="hover:text-background3"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>

        <a
          href="https://github.com/nadinestrella"
          target="_blank"
          className="hover:text-background3"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  );
};
