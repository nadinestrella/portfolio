import React from 'react';
import { Title } from './ui/Title';

export const ContactMe = ({ title }) => {
  return (
    <div className="flex flex-col   items-center">
      <Title title={title} />
      <p>
        Thank you for check my portfolio! If you have any recommendatios or
        comments feel free to contact me!
      </p>
    </div>
  );
};
