import styled from '@emotion/styled';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import {
  AutoRestartIcon,
  WarningDontDisableIcon,
  WarningDontEnableIcon,
} from 'src/shared/icons';
import { typographyStyles } from 'src/shared/ui';

import { useGetConstants } from '../../../useGetConstants';

interface IDoubleContactorProps {
  isEnableNight: boolean;
  withOneLetter?: boolean;
  dontEnable?: boolean;
  dontDisable?: boolean;
}

export const DoubleContactor = ({
  withOneLetter,
  isEnableNight,
  dontEnable,
  dontDisable,
}: IDoubleContactorProps) => {
  const { buttonColors } = useGetConstants();

  if (dontEnable) {
    return <WarningDontEnableIcon size={'large'} />;
  }
  if (dontDisable) {
    return <WarningDontDisableIcon size={'large'} />;
  }

  return (
    <Wrapper>
      <StyledButton
        sx={{
          background: isEnableNight
            ? buttonColors['green']
            : buttonColors['red'],
          borderRight: '1px solid #ffffff',
          ...typographyStyles(true).title.medium,
        }}
        startIcon={
          <AutoRestartIcon
            width={20}
            height={20}
          />
        }>
        {withOneLetter ? 'В' : 'Вечер'}
      </StyledButton>
      <Divider />
      <StyledButton
        sx={{
          background: isEnableNight
            ? buttonColors['red']
            : buttonColors['green'],
          borderRight: '1px solid #ffffff',
          ...typographyStyles(true).title.medium,
        }}
        startIcon={
          <AutoRestartIcon
            width={20}
            height={20}
          />
        }>
        {withOneLetter ? 'Н' : 'Ночь'}
      </StyledButton>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
`;

const Divider = styled(Box)`
  width: 1px;
  height: 100%;
  background: transparent;
`;

const StyledButton = styled(Button)`
  padding: 4px;
  min-width: 111.5px;
  max-width: 111.5px;
  height: 30px;
  color: #000000;
  border-radius: 0;
  text-transform: none;
  .MuiButton-icon {
    margin: 0 6px 0 0;
  }
`;
