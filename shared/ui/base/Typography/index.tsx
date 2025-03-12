import { useTheme } from '@mui/material';
import MuiTypography from '@mui/material/Typography';
import React from 'react';

import { deepGetByPaths } from '../../../utils/deepGet';
import { ITypographyProps, TStyleObject } from './types';

const typographyStyles: (bold?: boolean) => TStyleObject = (bold = false) => ({
  display: {
    large: {
      fontSize: '57px',
      fontWeight: 400,
      lineHeight: '120%',
      letterSpacing: '0.15px',
    },
    medium: {
      fontSize: '45px',
      fontWeight: 400,
      lineHeight: '120%',
      letterSpacing: '0.15px',
    },
    small: {
      fontSize: '36px',
      fontWeight: 400,
      lineHeight: '120%',
      letterSpacing: '0.15px',
    },
  },
  headline: {
    large: {
      fontSize: '32px',
      fontWeight: bold ? 600 : 400,
      lineHeight: '120%',
      letterSpacing: '0.25px',
    },
    medium: {
      fontSize: '28px',
      fontWeight: bold ? 600 : 400,
      lineHeight: '120%',
      letterSpacing: '0.15px',
    },
    small: {
      fontSize: '24px',
      fontWeight: bold ? 600 : 400,
      lineHeight: '120%',
      letterSpacing: '0.15px',
    },
  },
  title: {
    large: {
      fontSize: '20px',
      fontWeight: bold ? 600 : 400,
      lineHeight: '120%',
      letterSpacing: '0.6px',
    },
    medium: {
      fontSize: '16px',
      fontWeight: bold ? 600 : 400,
      lineHeight: '120%',
      letterSpacing: '0.4px',
    },
    small: {
      fontSize: '14px',
      fontWeight: bold ? 600 : 400,
      lineHeight: '120%',
      letterSpacing: '0.4px',
    },
  },
  label: {
    large: {
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: '120%',
      letterSpacing: '0.2px',
    },
    medium: {
      fontSize: '12px',
      fontWeight: 600,
      lineHeight: '120%',
      letterSpacing: '0.4px',
    },
    small: {
      fontSize: '10px',
      fontWeight: 600,
      lineHeight: '120%',
      letterSpacing: '0.4px',
    },
  },
  body: {
    large: {
      fontSize: '16px',
      fontWeight: bold ? 600 : 400,
      lineHeight: '120%',
      letterSpacing: '0.2px',
    },
    medium: {
      fontSize: '14px',
      fontWeight: bold ? 600 : 400,
      lineHeight: '120%',
      letterSpacing: '0.2px',
    },
    small: {
      fontSize: '12px',
      fontWeight: bold ? 600 : 400,
      lineHeight: '120%',
      letterSpacing: '0.4px',
    },
  },
  caption: {
    large: {
      fontSize: '14px',
      fontWeight: bold ? 600 : 400,
      lineHeight: '120%',
      letterSpacing: '0.2px',
    },
    medium: {
      fontSize: '12px',
      fontWeight: bold ? 600 : 400,
      lineHeight: '120%',
      letterSpacing: '0.4px',
    },
    small: {
      fontSize: '10px',
      fontWeight: bold ? 600 : 400,
      lineHeight: '120%',
      letterSpacing: '0.6px',
    },
    micro: {
      fontSize: '8px',
      fontWeight: bold ? 600 : 400,
      lineHeight: '120%',
      letterSpacing: '0.8px',
    },
  },
});

const Typography = ({
  children,
  sx,
  bold,
  variant = 'body.small',
  color = 'colors.Black',
  mode = 'text',
  ...props
}: ITypographyProps) => {
  const [v, t] = variant.split('.');
  const { palette } = useTheme();

  return (
    <MuiTypography
      sx={{
        ...typographyStyles(bold)[v]?.[t],
        fontWeight: bold ? '600' : 'normal',
        color: color && deepGetByPaths(palette, color),
        ...(mode === 'link'
          ? {
              color: palette.Accent.Primary,
              textDecoration: 'underline',
              cursor: 'pointer',
              ':hover': {
                color: '#579aee',
              },
            }
          : {}),
        ...sx,
      }}
      {...props}>
      {children}
    </MuiTypography>
  );
};

export { Typography, typographyStyles };
export type { ITypographyProps };
