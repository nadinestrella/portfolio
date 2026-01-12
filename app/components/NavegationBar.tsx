'use client';

import Link from 'next/link';
import React, { useState } from 'react';

export const NavegationBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="text-sm bg-lightBlue">
      {/* Headder */}
      <div className="flex justify-end mr-2 h-14 md:hidden">
        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="text-sky-800 text-3xl focus:outline-none"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Menu */}
      <ul
        className={` ${
          open ? 'block' : 'hidden'
        } flex-col md:flex md:flex-row md:justify-center md:items-center
      max-w-screen-md mx-auto`}
      >
        {[
          { href: '/about', label: 'About me' },
          { href: '/#skills', label: 'Skills' },
          { href: '/#projects', label: 'Projects' },
          { href: '/#education', label: 'Education' },
          { href: '/#experience', label: 'Experience' },
          { href: '/#contact', label: 'Contact Me' },
        ].map(({ href, label }) => (
          <li
            key={href}
            className="block p-3 uppercase font-bold text-sky-800 hover:text-blueSky text-center"
          >
            <Link href={href} onClick={() => setOpen(true)}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
