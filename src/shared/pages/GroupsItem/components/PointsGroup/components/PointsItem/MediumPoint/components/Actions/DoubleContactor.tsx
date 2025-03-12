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

import { IControllerStatisticItem } from '../../../../../../../../../store/api/controllers/controllers.types';
import { useGetConstants } from '../../../useGetConstants';
import { actionTypes } from '../../../../../../../constants';

interface IDoubleContactorProps extends IControllerStatisticItem {
  withOneLetter?: boolean;
}

export const DoubleContactor = ({
  withOneLetter,
  dont_enable,
  dont_disable,
  night_cont_state,
  evening_cont_state,
  id
}: IDoubleContactorProps) => {
  const { buttonColors } = useGetConstants();

  if (dont_enable) {
    return <WarningDontEnableIcon size={'medium'} />;
  }
  if (dont_disable) {
    return <WarningDontDisableIcon size={'medium'} />;
  }

  return (
    <Wrapper>
      <StyledButton
        data-type={actionTypes['change-action']}
        shuno-id={id}
        toggle-shuno-status={'evening'}
        toggle-shuno-type={night_cont_state ? 'off' : 'on'}
        sx={{
          background: evening_cont_state
            ? buttonColors['green']
            : buttonColors['red'],
          borderRight: '1px solid #ffffff',
          ...typographyStyles(true).caption.medium,
        }}
        startIcon={
          <AutoRestartIcon
            width={16}
            height={16}
          />
        }>
        {withOneLetter ? 'В' : 'Вечер'}
      </StyledButton>
      <Divider />
      <StyledButton
        data-type={actionTypes['change-action']}
        shuno-id={id}
        toggle-shuno-status={'night'}
        toggle-shuno-type={night_cont_state ? 'off' : 'on'}
        sx={{
          background: night_cont_state
            ? buttonColors['red']
            : buttonColors['green'],
          borderRight: '1px solid #ffffff',
          ...typographyStyles(true).caption.medium,
        }}
        startIcon={
          <AutoRestartIcon
            width={16}
            height={16}
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
  min-width: 75.5px;
  max-width: 75.5px;
  height: 100%;
  color: #000000;
  border-radius: 0;
  text-transform: none;
  .MuiButton-icon {
    margin: 0 4px 0 0;
  }
`;
