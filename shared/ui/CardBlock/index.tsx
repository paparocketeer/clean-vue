import styled from '@emotion/styled';
import { Button, ButtonProps } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import logo from 'src/../public/images/registry-logo.png';

import { Typography } from '../base/Typography';

interface IRegistryItemProps {
  label: string;
  desc: string;
  onClick: ButtonProps['onClick'];
  icon?: React.ReactElement<SVGElement>;
}
export const CardBlock = ({
  onClick,
  label,
  desc,
  icon,
}: IRegistryItemProps) => {
  return (
    <Wrapper>
      {icon || <img src={logo} />}
      <Content>
        <Inner>
          <Label
            variant={'title.large'}
            bold>
            {label}
          </Label>
          <Desc variant={'body.medium'}>{desc}</Desc>
        </Inner>
        <Button
          sx={{
            width: '100%',
          }}
          onClick={onClick}
          variant={'contained'}
          size={'large'}>
          Перейти
        </Button>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  border-radius: 24px;
  border: 1px solid #91bfff;
  background: #fff;
  display: flex;
  flex-direction: column;
  box-shadow:
    0 -1px 4px 0 rgba(0, 0, 0, 0.03),
    0 5px 12px 0 rgba(0, 30, 69, 0.08);
  height: 350px;
  overflow: hidden;
  max-width: 300px;
`;

const Content = styled(Box)`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  padding: 16px;
  height: 100%;
  gap: 16px;
`;
const Inner = styled(Typography)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Label = styled(Typography)``;

const Desc = styled(Typography)`
  min-height: 100px;
`;
