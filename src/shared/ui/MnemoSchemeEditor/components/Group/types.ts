import { TContactorFuseItem } from '../../../../types/menmoscheme';

export interface IGroupProps {
  number: TPositionNumber;
  baseLetter: string;
  schema: TContactorFuseItem[];
}
export type TPositionNumber = '1' | '2' | '3';
