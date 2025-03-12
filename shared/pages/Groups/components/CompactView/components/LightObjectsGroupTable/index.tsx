import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React from 'react';
import { useAppSelector } from 'src/shared/hooks/useAppSelector';
import { TLocalGroupItem } from 'src/shared/store/api/groups/groups.types';
import { selectGroupsSetting } from 'src/shared/store/selectors/setting/groups';

import { Item } from './components/Item';

interface ILightObjectsGroupTable {
  data?: Record<number, TLocalGroupItem>;
}

export const LightObjectsGroupTable = ({ data }: ILightObjectsGroupTable) => {
  const { withGroupName } = useAppSelector((state) =>
    selectGroupsSetting(state)
  );
  if (!data) {
    return <></>;
  }
  return (
    <Wrapper withGroupName={withGroupName}>
      {Object.values(data)?.map((el) => {
        return (
          <Item
            {...el}
            key={el.id}
          />
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled(Box)<{ withGroupName: boolean }>`
  margin-top: ${(p) => (p.withGroupName ? '10px' : '0')};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 0 0 1px #91bfff;
  border-radius: 24px;
  width: 100%;
`;
