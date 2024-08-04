import React from 'react';
import Image from 'next/image';
export const Card = () => {
  return (
    <article>
      <h4>Titulo</h4>
      <Image width={100} height={100} alt="project photo" />
      <p>Texto explicacion </p>
      <span>link</span>
    </article>
  );
};
