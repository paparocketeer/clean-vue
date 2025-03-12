import React from 'react';

export const CircleCheckIcon = (
  props: React.SVGProps<SVGSVGElement>
): React.ReactElement<SVGElement> => {
  return (
    <svg
      width='24'
      height='25'
      viewBox='0 0 24 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <rect
        y='0.818115'
        width='24'
        height='24'
        rx='12'
        fill='#27AE60'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M17.477 9.02582C17.8024 9.35125 17.8024 9.87889 17.477 10.2043L10.7965 16.8848C10.4385 17.2428 9.85814 17.2428 9.50015 16.8848L6.18939 13.574C5.86395 13.2486 5.86395 12.7209 6.18939 12.3955C6.51483 12.0701 7.04246 12.0701 7.3679 12.3955L10.1483 15.1759L16.2985 9.02582C16.6239 8.70038 17.1515 8.70038 17.477 9.02582Z'
        fill='white'
      />
    </svg>
  );
};
