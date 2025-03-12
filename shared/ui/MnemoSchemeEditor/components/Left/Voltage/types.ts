export type TPositionNumber = '1' | '2' | '3';

export interface IVoltageProps {
  number: TPositionNumber;
  ampere?: string;
  volt?: string;
}
