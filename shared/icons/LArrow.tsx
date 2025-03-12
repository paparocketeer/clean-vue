import React from 'react';

export const LArrowIcon = (
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
        d='M6.92259 0.410826C7.24803 0.736263 7.24803 1.2639 6.92259 1.58934L3.34518 5.16675H14.6667C15.1269 5.16675 15.5 5.53984 15.5 6.00008C15.5 6.46032 15.1269 6.83341 14.6667 6.83341H3.34518L6.92259 10.4108C7.24803 10.7363 7.24803 11.2639 6.92259 11.5893C6.59715 11.9148 6.06951 11.9148 5.74408 11.5893L0.744078 6.58934C0.418641 6.2639 0.418641 5.73626 0.744078 5.41083L5.74408 0.410826C6.06951 0.0853888 6.59715 0.0853888 6.92259 0.410826Z'
        fill='black'
        style={{
          fill: 'currentColor',
          fillOpacity: 1,
        }}
      />
    </svg>
  );
};
