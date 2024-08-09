import React from 'react';
import { Title, TitleProps } from './ui/Title';

export const ContactMe = ({ title }: TitleProps) => {
  return (
    <div id="contact">
      <Title title={title} />
      <p>
        Thank you for visiting my portfolio! If you have any recommendations or
        comments feel free to contact me! 🙂
      </p>
    </div>
  );
};
