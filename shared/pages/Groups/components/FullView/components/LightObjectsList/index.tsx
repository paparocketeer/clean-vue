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
  withAccidents: boolean;
}

export const LightObjectsList = ({
  keys,
  info,
  withAccidents,
}: ILightObjectsListProps) => {
  return (
    <Wrapper>
      <Inner>
        {keys.map((el) => {
          const listItem = GroupsList[el];

          if (el === 'empty') {
            return <React.Fragment key={withAccidents + listItem.text} />;
          }

          return (
            <Item
              text={listItem.text}
              count={info?.[el] || '0'}
              icon={listItem.icon}
              variant={listItem.variant}
              key={withAccidents + listItem.text + listItem.variant}
              filter={el}
            />
          );
        })}
      </Inner>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 14px;
`;

const Inner = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 100%;
  gap: 12px;
`;
