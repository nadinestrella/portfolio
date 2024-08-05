import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Title } from './ui/Title';

export const AboutMe = ({ title }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Title title={title} />
      <h1>Hi! I am Nadine Estrella</h1>
      <Image
        width={100}
        height={100}
        alt="myself photo"
        src={'/nadineProfile.jpg'}
        className="rounded-full"
      />
      <p>
        {' '}
        I am a Junior Fullstack Developer based in Madrid, eager to kickstart my
        career in the tech industry.
      </p>
      <Link
        href={`/moreInfo`}
        className="rounded-full w-16 h-8 bg-slate-500 text-sm text-white"
      >
        more
      </Link>
    </div>
  );
};
