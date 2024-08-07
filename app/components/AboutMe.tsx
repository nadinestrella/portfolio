import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const AboutMe = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-screen-md mx-auto mt-7">
      <div className="flex flex-col md:flex-row md:gap-7 justify-center items-center pb-3">
        <Image
          width={150}
          height={150}
          alt="myself photo"
          src={'/nadineProfile.jpg'}
          className="object-cover w-28 md:w-40 h-28 md:h-40 overflow-hidden rounded-full mb-3"
        />

        <div className="flex flex-col justify-center items-center md:items-start md:w-2/3">
          <h1 className="pb-3 text-lg md:text-2xl  ">
            Hi! 👋 I am <strong>Nadine Estrella</strong>
          </h1>
          <p className="pb-3 text-center md:text-left text-gray-600">
            {' '}
            I am a Junior Fullstack Developer based in Madrid, eager to
            kickstart my career in the tech industry.
          </p>
        </div>
      </div>
      <Link
        href={`/moreInfo`}
        className="rounded-full  w-52 h-10 bg-black flex justify-center items-center justify-self-end  text-xs text-white"
      >
        I want to know more about you
      </Link>
    </div>
  );
};
