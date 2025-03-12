import React from 'react';

export const CircleCloseIcon = (
  props: React.SVGProps<SVGSVGElement>
): React.ReactElement<SVGElement> => {
  return (
    <svg
      width='24'
      height='25'
      viewBox='0 0 24 25'
      fill='none'
      {...props}
      xmlns='http://www.w3.org/2000/svg'>
      <rect
        y='0.454346'
        width='24'
        height='24'
        rx='12'
        fill='#DADDE0'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M15.8991 9.68673C16.2115 9.37431 16.2115 8.86778 15.8991 8.55536C15.5867 8.24294 15.0801 8.24294 14.7677 8.55536L12 11.323L9.23238 8.55542C8.91997 8.243 8.41343 8.243 8.10101 8.55542C7.78859 8.86784 7.78859 9.37437 8.10101 9.68679L10.8686 12.4544L8.10104 15.222C7.78862 15.5344 7.78862 16.041 8.10104 16.3534C8.41346 16.6658 8.91999 16.6658 9.23241 16.3534L12 13.5858L14.7677 16.3535C15.0801 16.6659 15.5866 16.6659 15.8991 16.3535C16.2115 16.041 16.2115 15.5345 15.8991 15.2221L13.1314 12.4544L15.8991 9.68673Z'
        fill='white'
      />
    </svg>
  );
};
