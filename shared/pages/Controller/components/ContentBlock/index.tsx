import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { TabsVar1 } from 'src/shared/ui/Tabs';

import { Counter, EventJournal, Info, Map, Scheme } from './components';

export const ContentBlock = () => {
  const [getSearchParams] = useSearchParams();
  const value = getSearchParams.get('content');

  const tabContent: any = {
    counter: <Counter />,
    journal: <EventJournal />,
    map: <Map />,
  };

  return (
    <Wrapper>
      <Info />
      <Scheme />
      <TabWrapper>
        <TabsVar1
          name={'content'}
          items={[
            {
              label: 'Счётчик',
              id: 'counter',
            },
            {
              label: 'Журнал событий',
              id: 'journal',
            },
            {
              label: 'Карта',
              id: 'map',
            },
          ]}
        />
      </TabWrapper>
      <div>{tabContent[value as any]}</div>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 8px;
`;

const TabWrapper = styled(Box)`
  display: flex;
  height: 40px;
  padding: 4px 6px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background: #fff;
`;
