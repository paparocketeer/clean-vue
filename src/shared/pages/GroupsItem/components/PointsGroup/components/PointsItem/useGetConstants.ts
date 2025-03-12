import { useTheme } from '@emotion/react';

import { TButtonColors, TTitleColors } from './types';

export const useGetConstants = () => {
  const { palette } = useTheme();

  const titleColors: Record<TTitleColors, string> = {
    red: palette.alert['alert-red'],
    yellow: palette.alert['alert-yellow'],
    gray: palette.alert['alert-gray-light'],
  };

  const buttonColors: Record<TButtonColors, string> = {
    red: palette.alert['alert-red-light'],
    gray: palette.alert['alert-gray-ultra-light'],
    green: palette.alert['alert-green-light'],
  };

  return { titleColors, buttonColors };
};
