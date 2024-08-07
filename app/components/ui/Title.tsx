import React from 'react';

export const Title = ({ title }) => {
  return (
    <h4 className=" font-bold text-sky-800 pb-3 text-lg flex flex-col items-center pb-3">
      {title}
    </h4>
  );
};
