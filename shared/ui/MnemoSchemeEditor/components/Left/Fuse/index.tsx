import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import { SxProps } from '@mui/system/styleFunctionSx';
import React from 'react';
import {
  FuseActiveIcon,
  FuseBrokenIcon,
  FuseEditorIcon,
  FuseInactiveIcon,
  FuseProblemIcon,
} from 'src/shared/icons';
import { TFuseVariant } from 'src/shared/types/controlsNO';

import { IFuseProps, TPositionNumber } from './types';

export const Fuse = ({ variant, number }: IFuseProps) => {
  const iconsVariant: Record<TFuseVariant, React.ReactElement<SVGElement>> = {
    active: <FuseActiveIcon />,
    broken: <FuseBrokenIcon />,
    editor: <FuseEditorIcon />,
    inactive: <FuseInactiveIcon />,
    problem: <FuseProblemIcon />,
  };

  const position: Record<TPositionNumber, SxProps<any>> = {
    '1': {
      left: '36px',
      top: '459px',
    },
    '2': {
      left: '111.4px',
      top: '459px',
    },
    '3': {
      left: '187.4px',
      top: '459px',
    },
  };
  return <Wrapper sx={position[number]}>{iconsVariant[variant]}</Wrapper>;
};

const Wrapper = styled(Box)`
  position: absolute;
`;
