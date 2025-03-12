import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { tabVariantId } from '../../pages/UsersList/constants';
import { ITabsProps } from './types';

export const TabsVar3 = ({ items, name }: ITabsProps) => {
  const [getSearchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const id = getSearchParams.get(tabVariantId);
    if (!id) {
      setSearchParams({
        [tabVariantId]: '2',
      });
    }
  }, []);
  return (
    <Wrapper>
      {items.map((el) => {
        if (getSearchParams.get(name) === el.id) {
          return <TabItemActive key={el.id}>{el.label}</TabItemActive>;
        }
        return (
          <TabItem
            onClick={() => {
              setSearchParams({
                [name]: el.id,
              });
            }}
            key={el.id}>
            {el.label}
          </TabItem>
        );
      })}
    </Wrapper>
  );
};

const TabItem = styled(Box)`
  display: flex;
  padding: 4px 8px;
  gap: 8px;
  color: ${(p) => p.theme.palette.Accent.Primary};
  cursor: pointer;
`;

const TabItemActive = styled(Box)`
  display: flex;
  height: 40px;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  color: ${(p) => p.theme.palette.colors.White};
  border-radius: 100px;
  background: #0f74ff;
  cursor: pointer;

  box-shadow:
    0 0 1px 0 rgba(29, 33, 45, 0.2),
    0 0 2px 0 rgba(29, 33, 45, 0.08),
    0 2px 4px 0 rgba(29, 33, 45, 0.08);
`;

const Wrapper = styled(Box)`
  display: flex;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  height: 40px;
  background: #e7f1ff;
`;
