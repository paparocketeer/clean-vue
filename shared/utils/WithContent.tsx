import React, { ReactNode } from 'react';

interface IWithContentProps {
  children: ReactNode;
  placeholder?: any;
  isShow?: boolean;
}
export const WithContent = ({
  children,
  isShow,
  placeholder,
}: IWithContentProps) => {
  if (isShow) {
    return children;
  }
  if (placeholder) {
    return placeholder;
  }
  return <></>;
};
