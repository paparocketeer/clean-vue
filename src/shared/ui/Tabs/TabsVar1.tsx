import styled from '@emotion/styled';
import Tab from '@mui/material/Tab';
import MuiTabs from '@mui/material/Tabs';
import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CheckedIcon } from 'src/shared/icons';
import { Typography } from 'src/shared/ui';

import { ITabsProps } from './types';

export const TabsVar1 = ({ items, name }: ITabsProps) => {
  const [index, setIndex] = React.useState(0);

  const [getSearchParams, setSearchParams] = useSearchParams();

  const handleChange = (e: React.SyntheticEvent, index: number) => {
    setIndex(index);
    let obj = {};
    for (const entry of (getSearchParams as any).entries()) {
      const [param, value] = entry;
      obj[param] = value;
    }

    setSearchParams({
      ...obj,
      [name]: items[index].id,
    });
  };

  useEffect(() => {
    let obj = {};
    for (const entry of (getSearchParams as any).entries()) {
      const [param, value] = entry;
      obj[param] = value;
    }

    const tabVal = getSearchParams.get(name);

    if (!tabVal) {
      setIndex(0);
      setSearchParams({
        ...obj,
        [name]: items[0].id,
      });
    } else {
      setIndex(items.findIndex((el) => el.id === getSearchParams.get(name)));
    }
  }, []);

  return (
    <MuiTabsWrapper
      value={index}
      onChange={handleChange}
      centered
      sx={{
        '.MuiTabs-root': {
          maxHeight: '30px',
        },
      }}
      defaultValue={getSearchParams.get(name) || undefined}
      indicatorColor='primary'
      textColor='inherit'>
      {items.map((el) => {
        const tabVal = getSearchParams.get(name) || items[0].id;

        const isActive = el.id === tabVal;

        return (
          <TabItem
            key={el.id}
            icon={isActive ? <CheckedIcon /> : undefined}
            iconPosition={'start'}
            label={
              <Typography
                variant={'label.medium'}
                color={isActive ? 'colors.White' : 'colors.Black'}
                bold>
                {el.label}
              </Typography>
            }
          />
        );
      })}
    </MuiTabsWrapper>
  );
};

const TabItem = styled(Tab)`
  border-radius: 100px;
  background: #e7f1ff;
  color: #000000;
  border: none;
  opacity: 1;
  min-height: auto;
  padding: 6px 16px 6px 10px;
  text-transform: none;
`;

const MuiTabsWrapper = styled(MuiTabs)`
  align-items: center;
  .MuiTabs-flexContainer {
    background: #e7f1ff;
    border-radius: 100px;
  }
  .MuiTabs-indicator {
    display: none;
  }
  .Mui-selected {
    background: #0f74ff;
    color: #ffffff !important;
  }
`;
