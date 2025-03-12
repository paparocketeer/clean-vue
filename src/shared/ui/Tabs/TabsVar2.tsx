import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React from 'react';
import { useSearchParams } from 'react-router-dom';

import { Typography } from '../base/Typography';
import { ITabsProps } from './types';

export const TabsVar2 = ({ items, name }: ITabsProps) => {
  const [getSearchParams, setSearchParams] = useSearchParams();

  return (
    <Wrapper>
      {items.map((el) => {
        if (getSearchParams.get(name) === el.id) {
          return (
            <TabItemActive key={el.id}>
              <Inner>{el.label}</Inner>
            </TabItemActive>
          );
        }
        return (
          <TabItem
            onClick={() => {
              setSearchParams({
                [name]: el.id,
              });
            }}
            key={el.id}>
            <Inner>
              <Typography variant={'body.large'}>{el.label}</Typography>
            </Inner>
          </TabItem>
        );
      })}
    </Wrapper>
  );
};

const TabItem = styled(Box)`
  display: flex;
  padding: 12px 8px;
  flex-direction: column;
  align-items: flex-start;
  text-wrap: nowrap;
  cursor: pointer;
  user-select: none;
`;

const Inner = styled(Box)`
  display: flex;
  height: 40px;
  padding: 6px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 30px;
  background: #fff;
  text-wrap: nowrap;
  cursor: pointer;
  user-select: none;
`;

const TabItemActive = styled(Box)`
  display: flex;
  padding: 12px 8px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 24px 24px 0px 0px;
  background: #fff;
  text-wrap: nowrap;
  cursor: pointer;
  user-select: none;
`;

const Wrapper = styled(Box)`
  height: 64px;
  display: flex;
`;
