import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Title } from './ui/Title';

export const AboutMe = ({ title }) => {
  return (
    <div className="flex flex-col justify-center items-center pb-3">
      <Title title={title} />
      <h1 className="pb-3">Hi! I am Nadine Estrella</h1>
      <Image
        width={100}
        height={100}
        alt="myself photo"
        src={'/nadineProfile.jpg'}
        className="rounded-full pb-3"
      />
      <p className="pb-3">
        {' '}
        I am a Junior Fullstack Developer based in Madrid, eager to kickstart my
        career in the tech industry.
      </p>
      <Link
        href={`/moreInfo`}
        className="rounded-full text-sm w-56 h-10 bg-black flex justify-center items-center justify-self-end font-semibold text-white"
      >
        I want to know more about you
      </Link>
    </div>
  );
};
