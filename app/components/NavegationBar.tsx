import React from 'react';

const NavegationBar = () => {
  return (
    <nav className="py-3">
      <ul className="grid grid-rows-2 md:grid-rows-1 grid-flow-col gap-4 md:gap-9 justify-items-center text-xs bg    ">
        <li className="border border-background rounded-lg p-1 ">About Me</li>
        <li className="border border-background rounded-lg p-1">Skills</li>
        <li className="border border-background rounded-lg p-1">My Projects</li>
        <li className="border border-background rounded-lg p-1">Education</li>
        <li className="border border-background rounded-lg p-1">Experience</li>
        <li className="border border-background rounded-lg p-1">Contact Me</li>
      </ul>
    </nav>
  );
};

export default NavegationBar;
