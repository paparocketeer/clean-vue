export type TDimensionsColor = 'red' | 'green';
export type TDimensionsTitle = 'Вечер' | 'Ночь';
export type TPositionNumber = '1' | '2';

export interface IDimensionsProps {
  color: TDimensionsColor;
  number: TPositionNumber;
  title: TDimensionsTitle;
}
