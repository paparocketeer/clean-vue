import React from 'react';

export const CircleIcon = (
  props: React.SVGProps<SVGSVGElement>
): React.ReactElement<SVGElement> => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      color={'inherit'}
      {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.0002 2.50004C5.85803 2.50004 2.50016 5.8579 2.50016 10C2.50016 14.1422 5.85803 17.5 10.0002 17.5C14.1423 17.5 17.5002 14.1422 17.5002 10C17.5002 5.8579 14.1423 2.50004 10.0002 2.50004ZM0.833496 10C0.833496 4.93743 4.93755 0.833374 10.0002 0.833374C15.0628 0.833374 19.1668 4.93743 19.1668 10C19.1668 15.0626 15.0628 19.1667 10.0002 19.1667C4.93755 19.1667 0.833496 15.0626 0.833496 10Z'
        style={{
          fill: 'currentColor',
          fillOpacity: 1,
        }}
      />
    </svg>
  );
};
