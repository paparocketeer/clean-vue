import { TFuseVariant } from 'src/shared/types/controlsNO';

export interface IFuseProps {
  variant: TFuseVariant;
  number: TPositionNumber;
}

export type TPositionNumber = '1' | '2' | '3';
