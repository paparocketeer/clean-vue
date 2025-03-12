import { TContactorVariant, TFuseVariant } from 'src/shared/types/controlsNO';

import { TContactorType } from '../../../../../types/menmoscheme';

export interface IFuseProps {
  variant: TFuseVariant;
  title: string;
  subtitle: string;
  contactorVariant: TContactorType;
}
