import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React, { useState } from 'react';

import { AngleIcon } from '../../icons';
import {
  userActionsList,
  userActionsListKeys,
} from '../../pages/UsersList/components/Content/constants';
import { Typography } from '../base/Typography';
import { BaseMenu } from '../Menu';

const items = [
  {
    label: 'Контроллеры',
    value: 'controllers-1',
  },
  {
    label: 'Карта светильников',
    value: 'lights-map-1',
  },
  {
    label: 'Интеграции',
    value: 'integration-1',
  },
];
export const Nav = () => {
  const [selected, setSelected] = useState('');

  return (
    <Wrapper>
      {items.map((el) => {
        return (
          <BaseMenu
            key={el.value}
            onChange={() => {}}
            onClick={() => {
              if (selected) {
                setSelected('');
              } else {
                setSelected(el.value);
              }
            }}
            list={userActionsList(true)}>
            <Item>
              <Typography
                variant={'label.large'}
                bold>
                {el.label}
              </Typography>
              <AngleIcon
                style={{
                  transition: 'all .3s',
                  transform:
                    selected === el.value ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              />
            </Item>
          </BaseMenu>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  padding: 4px;
  justify-content: center;
  align-items: center;

  border-radius: 100px;
  background: #fff;
  box-shadow:
    0px -1px 4px 0px rgba(0, 0, 0, 0.03),
    0px 5px 12px 0px rgba(0, 30, 69, 0.08);
`;

const Item = styled(Box)`
  display: flex;
  padding: 4px 16px 4px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 100px;
  background: #fff;
  cursor: pointer;
  user-select: none;
`;
