import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React from 'react';
import { useAppSelector } from 'src/shared/hooks/useAppSelector';
import { selectGroupControllersSetting } from 'src/shared/store/selectors/setting/groups/controllers';
import { WithContent } from 'src/shared/utils/WithContent';

import { ControlItems } from './components/ControlItems';
import { SelectedItems } from './components/SelectedItems';

export const Controls = () => {
  const { withControlPanel } = useAppSelector((state) =>
    selectGroupControllersSetting(state)
  );

  return (
    <WithContent isShow={withControlPanel}>
      <Wrapper>
        <ControlItems />
        <SelectedItems />
      </Wrapper>
    </WithContent>
  );
};

const Wrapper = styled(Box)`
  display: grid;
  grid-template-columns: 2fr 1fr;
  border-radius: 24px;
  box-shadow:
    0 -1px 4px 0 rgba(0, 0, 0, 0.03),
    0 5px 12px 0 rgba(0, 30, 69, 0.08);
  width: 100%;
  background: #ffffff;
`;
