import React from 'react';

export const Slash = (
  props: React.SVGProps<SVGSVGElement>
): React.ReactElement<SVGElement> => {
  return (
    <svg
      width='10'
      height='20'
      viewBox='0 0 10 20'
      fill='inherit'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9.53934 0.921289C9.95099 1.12711 10.1178 1.62767 9.91202 2.03932L1.57869 18.706C1.37287 19.1176 0.872304 19.2845 0.460655 19.0787C0.0490067 18.8728 -0.117847 18.3723 0.0879775 17.9606L8.42131 1.29397C8.62713 0.882319 9.1277 0.715465 9.53934 0.921289Z'
        style={{
          fill: 'currentcolor',
          fillOpacity: 1,
        }}
      />
    </svg>
  );
};
