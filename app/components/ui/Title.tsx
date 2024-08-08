import React from 'react';

export const Title = ({ title }) => {
  return (
    <h4 className="relative font-bold text-sky-800 mb-5 text-xl flex flex-col items-start before:w-10 before:h-3 before:bg-lightBlue before:absolute before:-z-10 before:bottom-0">
      {title}
    </h4>
  );
};
