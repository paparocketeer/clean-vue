export type TPhaseEnum = 'a' | 'b' | 'c';
export type TFuse = 'evening' | 'reserved' | 'night';

export type TFusePresents = Record<TPhaseEnum, number[]>;

export interface IFuseState {
  'a.1'?: TFuse;
  'a.2'?: TFuse;
  'a.3'?: TFuse;
  'a.4'?: TFuse;
  'a.5'?: TFuse;
  'a.6'?: TFuse;
  'a.7'?: TFuse;
  'a.8'?: TFuse;
  'a.9'?: TFuse;
  'a.10'?: TFuse;
  'a.11'?: TFuse;
  'a.12'?: TFuse;
  'a.13'?: TFuse;
  'a.14'?: TFuse;
  'a.15'?: TFuse;
  'a.16'?: TFuse;

  'b.1'?: TFuse;
  'b.2'?: TFuse;
  'b.3'?: TFuse;
  'b.4'?: TFuse;
  'b.5'?: TFuse;
  'b.6'?: TFuse;
  'b.7'?: TFuse;
  'b.8'?: TFuse;
  'b.9'?: TFuse;
  'b.10'?: TFuse;
  'b.11'?: TFuse;
  'b.12'?: TFuse;
  'b.13'?: TFuse;
  'b.14'?: TFuse;
  'b.15'?: TFuse;
  'b.16'?: TFuse;

  'c.1'?: TFuse;
  'c.2'?: TFuse;
  'c.3'?: TFuse;
  'c.4'?: TFuse;
  'c.5'?: TFuse;
  'c.6'?: TFuse;
  'c.7'?: TFuse;
  'c.8'?: TFuse;
  'c.9'?: TFuse;
  'c.10'?: TFuse;
  'c.11'?: TFuse;
  'c.12'?: TFuse;
  'c.13'?: TFuse;
  'c.14'?: TFuse;
  'c.15'?: TFuse;
  'c.16'?: TFuse;
}
