import React from 'react';

export const RArrowIcon = (
  props: React.SVGProps<SVGSVGElement>
): React.ReactElement<SVGElement> => {
  return (
    <svg
      width='16'
      height='12'
      viewBox='0 0 16 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      color={'inherit'}
      {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9.07741 0.410826C9.40285 0.0853888 9.93049 0.0853888 10.2559 0.410826L15.2559 5.41083C15.5814 5.73626 15.5814 6.2639 15.2559 6.58934L10.2559 11.5893C9.93049 11.9148 9.40285 11.9148 9.07741 11.5893C8.75197 11.2639 8.75197 10.7363 9.07741 10.4108L12.6548 6.83341H1.33333C0.873096 6.83341 0.5 6.46032 0.5 6.00008C0.5 5.53984 0.873096 5.16675 1.33333 5.16675H12.6548L9.07741 1.58934C8.75197 1.2639 8.75197 0.736263 9.07741 0.410826Z'
        fill='black'
        style={{
          fill: 'currentColor',
          fillOpacity: 1,
        }}
      />
    </svg>
  );
};
