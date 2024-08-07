import Link from 'next/link';
import React from 'react';

export const NavegationBar = () => {
  return (
    <nav className=" justify-items-center text-sm bg-background">
      <ul className="grid grid-rows-2 md:grid-rows-1 grid-flow-col max-w-screen-md mx-auto">
        <li>
          <Link
            className="block p-3 uppercase font-bold text-sky-800"
            href="/about"
          >
            About me
          </Link>
        </li>
        <li>
          <Link
            className="block p-3 uppercase font-bold text-sky-800"
            href="/#skills"
          >
            Skills
          </Link>
        </li>
        <li>
          <a>My Projects</a>
        </li>
        <li>
          <a>Education</a>
        </li>
        <li>
          <a>Experience</a>
        </li>
        <li>
          <a>Contact Me</a>
        </li>
      </ul>
    </nav>
  );
};
