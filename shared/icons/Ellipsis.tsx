import React from 'react';

export const EllipsisIcon = (
  props: React.SVGProps<SVGSVGElement>
): React.ReactElement<SVGElement> => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='25'
      height='24'
      viewBox='0 0 25 24'
      fill='currentColor'
      {...props}>
      <path
        d='M12.25 10C11.15 10 10.25 10.9 10.25 12C10.25 13.1 11.15 14 12.25 14C13.35 14 14.25 13.1 14.25 12C14.25 10.9 13.35 10 12.25 10ZM5.25 10C4.15 10 3.25 10.9 3.25 12C3.25 13.1 4.15 14 5.25 14C6.35 14 7.25 13.1 7.25 12C7.25 10.9 6.35 10 5.25 10ZM19.25 10C18.15 10 17.25 10.9 17.25 12C17.25 13.1 18.15 14 19.25 14C20.35 14 21.25 13.1 21.25 12C21.25 10.9 20.35 10 19.25 10Z'
        fill='currentColor'
      />
    </svg>
  );
};
