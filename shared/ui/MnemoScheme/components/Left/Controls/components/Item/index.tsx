import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React from 'react';
import { OperationIcon, PowerIcon } from 'src/shared/icons';

interface IItemProps {
  text: string;
  variant: 'power' | 'control';
}
export const Item = ({ text, variant }: IItemProps) => {
  return (
    <Wrapper
      variant={variant}
      style={{
        borderLeft: variant === 'power' ? '1px solid #91BFFF' : '',
        borderRight: variant === 'power' ? '1px solid #91BFFF' : '',
      }}>
      <Top>{text}</Top>
      <Bottom>{variant === 'power' ? <PowerIcon /> : <OperationIcon />}</Bottom>
    </Wrapper>
  );
};

const Wrapper = styled(Box)<Partial<IItemProps>>`
  display: flex;
  height: 100%;
  width: 100%;
  cursor: pointer;
  flex-direction: column;
  :hover {
    > :nth-child(1) {
      ${(p) => {
        if (p.variant === 'power') {
          return {
            background: '#a9f2c8',
          };
        } else {
          return {
            background: '#FFBDBD',
          };
        }
      }}
    }
    > :nth-child(2) {
      ${(p) => {
        if (p.variant === 'power') {
          return {
            background: '#27ae60',
            color: '#ffffff',
          };
        } else {
          return {
            background: '#EB5757',
            color: '#ffffff',
          };
        }
      }}
    }
  }
`;

const Top = styled(Box)`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.12px;
`;

const Bottom = styled(Box)`
  color: #0f74ff;
  background: #e7f1ff;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
