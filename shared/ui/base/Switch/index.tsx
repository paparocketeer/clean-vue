import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import SwitchMui from '@mui/material/Switch';
import { SwitchProps } from '@mui/material/Switch/Switch';
import React from 'react';
import { ITypographyProps, Typography } from 'src/shared/ui';

interface ISwitchProps extends SwitchProps {
  label?: React.ReactNode;
  typographyProps?: ITypographyProps;
}
export const Switch = ({ label, typographyProps, ...props }: ISwitchProps) => {
  return (
    <Wrapper>
      <AntSwitch {...props} />
      <Typography
        variant={'body.medium'}
        {...typographyProps}>
        {label}
      </Typography>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 4px;
`;

const AntSwitch = styled(SwitchMui)(({ theme }) => ({
  width: 32,
  height: 20,
  padding: 0,
  borderRadius: '100px',
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#0F74FF',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 16,
    height: 16,
    borderRadius: 50,
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));
