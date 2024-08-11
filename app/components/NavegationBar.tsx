import Link from 'next/link';
import React from 'react';

export const NavegationBar = () => {
  return (
    <nav className=" justify-items-center text-sm bg-lightBlue">
      <ul className="grid grid-rows-2 md:grid-rows-1 grid-flow-col max-w-screen-md mx-auto">
        <li>
          <Link
            className="block p-3 uppercase font-bold text-sky-800 hover:text-blueSky text-center"
            href="/about"
          >
            About me
          </Link>
        </li>
        <li>
          <Link
            className="block p-3 uppercase font-bold text-sky-800  hover:text-blueSky text-center"
            href="/#skills"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            className="block p-3 uppercase font-bold text-sky-800  hover:text-blueSky text-center"
            href="/#projects"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className="block p-3 uppercase font-bold text-sky-800  hover:text-blueSky text-center"
            href="/#education"
          >
            Education
          </Link>
        </li>
        <li>
          <Link
            className="block p-3 uppercase font-bold text-sky-800  hover:text-blueSky text-center"
            href="/#experience"
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            className="block p-3 uppercase font-bold text-sky-800  hover:text-blueSky text-center"
            href="/#contact"
          >
            Contact Me
          </Link>
        </li>
      </ul>
    </nav>
  );
};
