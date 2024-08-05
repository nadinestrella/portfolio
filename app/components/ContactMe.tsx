import React from 'react';
import { Title } from './ui/Title';

export const ContactMe = ({ title }) => {
  return (
    <div>
      <Title title={title} />
      <p>
        Thank you for check my portfolio! If you have any recommendatios or
        comments feel free to contact me!
      </p>
    </div>
  );
};
