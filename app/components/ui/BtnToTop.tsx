'use client';

import dynamic from 'next/dynamic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTop = dynamic(() => import('react-scroll-to-top'), {
  ssr: false,
});

const BtnToTop = () => {
  return (
    <div className="mt-96vh">
      <ScrollToTop
        smooth
        component={
          <FontAwesomeIcon className="text-darkBlue" icon={faArrowUp} />
        }
      />
    </div>
  );
};

export default BtnToTop;
