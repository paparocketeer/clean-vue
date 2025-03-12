import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React from 'react';
import { IControllerGroupStatisticRes } from 'src/shared/store/api/groups/groups.types';
import { TLightsObjectsKeys } from 'src/shared/types/controlsNO';

import { GroupsList } from '../../../../constants/GroupsList';
import { Item } from './components/Item';

interface ILightObjectsListProps {
  info?: Omit<IControllerGroupStatisticRes, 'groups'>;
  keys: Array<Partial<TLightsObjectsKeys>>;

  withGroupName: boolean;
}

export const LightObjectsTable = ({
  info,
  keys,
  withGroupName,
}: ILightObjectsListProps) => {
  return (
    <Wrapper withGroupName={withGroupName}>
      {keys.map((el) => {
        const listItem = GroupsList[el];

        if (el === 'empty') {
          return (
            <Item
              text={' '}
              count={' '}
              icon={listItem.icon}
              variant={listItem.variant}
              key={listItem.text}
            />
          );
        }
        return (
          <Item
            text={listItem.text}
            count={info?.[el] || '0'}
            icon={listItem.icon}
            variant={listItem.variant}
            key={listItem.text}
          />
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled(Box)<{ withGroupName: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 100%;
  border: 1px solid #91bfff;
  border-radius: 24px;
  overflow: hidden;
  background: #ffffff;
`;
