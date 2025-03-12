import { useSearchParams } from 'react-router-dom';

interface useTabProps {
  id: string;
}
export const useTab = ({ id }: useTabProps) => {
  const name = `active-tab-${id}`;
  const [getSearchParams] = useSearchParams();

  const value = getSearchParams.get(name) || 'journal';
  return { value };
};
