import React from 'react';

interface ICommunicationLevelProps extends React.SVGProps<SVGSVGElement> {
  level: number;
}
export const CommunicationLevelIcon = ({
  level,
  ...props
}: ICommunicationLevelProps): React.ReactElement<ICommunicationLevelProps> => {
  const disable = '#91BFFF';
  const active = '#6FCF97';
  return (
    <svg
      width='48'
      height='49'
      viewBox='0 0 48 49'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        d='M0.0078125 37.2444C0.0078125 35.7718 1.20153 34.5781 2.67405 34.5781C4.14657 34.5781 5.34029 35.7718 5.34029 37.2444V48.6657H0.0078125V37.2444Z'
        fill={level >= 1 ? active : disable}
      />
      <path
        d='M10.6729 27.8069C10.6729 26.3343 11.8666 25.1406 13.3391 25.1406C14.8116 25.1406 16.0053 26.3343 16.0053 27.8069V48.6664H10.6729V27.8069Z'
        fill={level >= 2 ? active : disable}
      />
      <path
        d='M21.3379 18.4651C21.3379 16.9925 22.5316 15.7988 24.0041 15.7988C25.4767 15.7988 26.6704 16.9925 26.6704 18.4651V48.6651H21.3379V18.4651Z'
        fill={level >= 3 ? active : disable}
      />
      <path
        d='M32.0029 11.928C32.0029 10.4554 33.1966 9.26172 34.6692 9.26172C36.1417 9.26172 37.3354 10.4554 37.3354 11.928V48.6669H32.0029V11.928Z'
        fill={level >= 4 ? active : disable}
      />
      <path
        d='M42.668 3.3342C42.668 1.86168 43.8617 0.667969 45.3342 0.667969C46.8067 0.667969 48.0004 1.86168 48.0004 3.33421V48.666H42.668V3.3342Z'
        fill={level >= 5 ? active : disable}
      />
    </svg>
  );
};
