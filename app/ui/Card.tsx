import React from 'react';
import Image from 'next/image';
export const Card = ({ titleCard, text, link }) => {
  return (
    <article>
      <h4>{titleCard}</h4>
      <Image width={100} height={100} alt="project photo" />
      <p>{text} </p>
      <span>{link}</span>
    </article>
  );
};
