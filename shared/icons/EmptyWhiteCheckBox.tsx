import React from 'react';

export const EmptyWhiteCheckBoxIcon = (
  props: React.SVGProps<SVGSVGElement>
): React.ReactElement<SVGElement> => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='21'
      height='20'
      viewBox='0 0 21 20'
      fill='none'
      {...props}>
      <g clipPath='url(#clip0_9173_58281)'>
        <rect
          x='0.5'
          width='20'
          height='20'
          rx='4'
          fill='white'
          fillOpacity='0.501961'
        />
      </g>
      <rect
        x='1.5'
        y='1'
        width='18'
        height='18'
        rx='3'
        stroke='black'
        strokeWidth='2'
      />
      <defs>
        <clipPath id='clip0_9173_58281'>
          <rect
            x='0.5'
            width='20'
            height='20'
            rx='4'
            fill='white'
          />
        </clipPath>
      </defs>
    </svg>
  );
};
