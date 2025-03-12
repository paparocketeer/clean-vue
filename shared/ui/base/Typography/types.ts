import { Theme } from '@mui/material/styles';
import { TypographyProps } from '@mui/material/Typography/Typography';
import { SxProps } from '@mui/system';
import React from 'react';

import { NestedKeyOf } from '../../../types/utility';

export type TVariant =
  | 'display'
  | 'headline'
  | 'title'
  | 'label'
  | 'body'
  | 'caption';

export type TVariantType = 'large' | 'medium' | 'small' | 'micro';

export interface ITypographyProps
  extends Omit<TypographyProps, 'children' | 'variant' | 'color'> {
  children?: React.ReactNode;
  variant?: `${TVariant}.${TVariantType}`;
  bold?: boolean;
  color?: NestedKeyOf<ColorsPalette>;
  mode?: 'link' | 'text';
}

export type TStyleObject = Record<
  TVariant,
  Partial<Record<TVariantType, SxProps<Theme>>>
>;
