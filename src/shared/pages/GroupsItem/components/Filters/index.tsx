import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import React from 'react';
import { Typography } from 'src/shared/ui';
import { ArrowSwitch } from 'src/shared/ui/ArrowSwitch';

import { Settings } from './components/Settings';
import { StatusTabs } from './components/StatusTabs';

export const Filters = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Wrapper>
      <Inner>
        <div />
        <StatusTabs />
        <Label>
          {checked ? (
            <Typography variant={'body.medium'}>Закрыть</Typography>
          ) : (
            <Typography variant={'body.medium'}>Раскрыть</Typography>
          )}
          <ArrowSwitch
            checked={checked}
            onClick={handleChange}
          />
        </Label>
      </Inner>
      <Collapse
        sx={{ width: '100%' }}
        in={checked}>
        <Settings />
      </Collapse>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  background: #ffffff;
  width: 100%;
  display: flex;
  padding: 8px 12px;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: stretch;

  border-radius: 24px;
  box-shadow:
    0 -1px 4px 0 rgba(0, 0, 0, 0.03),
    0 5px 12px 0 rgba(0, 30, 69, 0.08);
`;

const Inner = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Label = styled(Box)`
  display: flex;
  align-items: center;
  gap: 8px;
`;
