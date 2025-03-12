export type TPositionNumber = '1' | '2' | '3' | '4' | '5' | '6';
export type TContactorText = 'A' | 'B' | 'C';

export interface IContactorProps {
  number: TPositionNumber;
  text: TContactorText;
}
