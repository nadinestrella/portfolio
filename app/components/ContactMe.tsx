import React from 'react';
import { Title, TitleProps } from './ui/Title';
import Link from 'next/link';

export const ContactMe = ({ title }: TitleProps) => {
  return (
    <div id="contact">
      <Title title={title} />
      <p>
        Thank you for visiting my portfolio! If you have any recommendations or
        comments feel free to contact me! 🙂
      </p>
      <p>
        {' '}
        If you are interested on my profile,{' '}
        <Link
          href={'/Nadine Estrella CV eng.pdf'}
          target="_blank"
          className=" text-sky-800  hover:text-blueSky underline underline-offset-1"
        >
          download my CV
        </Link>
      </p>
    </div>
  );
};
