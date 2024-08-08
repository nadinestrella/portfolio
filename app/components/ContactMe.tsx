import React from 'react';
import { Title } from './ui/Title';

export const ContactMe = ({ title }) => {
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
