import React from 'react';

export const CheckedWhiteCheckBoxIcon = (
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
      <g clipPath='url(#clip0_9173_58101)'>
        <rect
          x='0.5'
          width='20'
          height='20'
          rx='4'
          fill='white'
          fillOpacity='0.501961'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M16.0955 6.08977C16.486 6.48029 16.486 7.11346 16.0955 7.50398L9.4268 14.1727C8.99723 14.6022 8.30075 14.6022 7.87117 14.1727L4.57219 10.8737C4.18167 10.4831 4.18167 9.84998 4.57219 9.45946C4.96271 9.06893 5.59588 9.06893 5.9864 9.45946L8.64899 12.122L14.6813 6.08977C15.0718 5.69924 15.7049 5.69924 16.0955 6.08977Z'
          fill='black'
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
        <clipPath id='clip0_9173_58101'>
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
