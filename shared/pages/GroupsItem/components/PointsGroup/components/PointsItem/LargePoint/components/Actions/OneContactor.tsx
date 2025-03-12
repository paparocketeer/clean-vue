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

interface IActionsProps {
  isEnableNight: boolean;
  withOneLetter?: boolean;
  dontEnable?: boolean;
  dontDisable?: boolean;
}
export const OneContactor = ({
  withOneLetter,
  dontEnable,
  dontDisable,
  isEnableNight,
}: IActionsProps) => {
  const NText = withOneLetter ? 'Н' : 'Ночь';
  const EText = withOneLetter ? 'В' : 'Вечер';
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
        {isEnableNight ? NText : EText}
      </StyledButton>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  display: flex;
`;

const StyledButton = styled(Button)`
  padding: 4px;
  width: 100%;
  height: 30px;
  color: #000000;
  border-radius: 0;
  text-transform: none;
  .MuiButton-icon {
    margin: 0 6px 0 0;
  }
`;
