import React from 'react';

export const AngleIcon = (
  props: React.SVGProps<SVGSVGElement>
): React.ReactElement<SVGElement> => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      {...props}>
      <path
        d='M16.9008 9.20039C16.5008 8.80039 15.9008 8.80039 15.5008 9.20039L12.0008 12.7004L8.50078 9.20039C8.10078 8.80039 7.50078 8.80039 7.10078 9.20039C6.70078 9.60039 6.70078 10.2004 7.10078 10.6004L11.3008 14.8004C11.5008 15.0004 11.7008 15.1004 12.0008 15.1004C12.3008 15.1004 12.5008 15.0004 12.7008 14.8004L16.9008 10.6004C17.3008 10.2004 17.3008 9.60039 16.9008 9.20039Z'
        fill='#0F74FF'
      />
    </svg>
  );
};
