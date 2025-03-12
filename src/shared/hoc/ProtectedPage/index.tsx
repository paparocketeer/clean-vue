import { ReactNode } from 'react';

interface IProtectedPageProps {
  children: ReactNode;
}
export const ProtectedPage = ({ children }: IProtectedPageProps) => {
  return children;
};
