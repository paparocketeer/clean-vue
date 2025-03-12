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
import {
  actionTypes,
  changeActionVariants,
} from '../../../../../../../constants';
import { buttonColors } from '../../../constants';

interface IDoubleContactorProps extends IControllerStatisticItem {
  withOneLetter?: boolean;
}

export const DoubleContactor = ({
  withOneLetter,
  dont_disable,
  dont_enable,
  night_cont_state,
  evening_cont_state,
  id,
}: IDoubleContactorProps) => {
  if (dont_enable) {
    return <WarningDontEnableIcon size={'small'} />;
  }
  if (dont_disable) {
    return <WarningDontDisableIcon size={'small'} />;
  }
  return (
    <Wrapper>
      <StyledButton
        data-type={actionTypes['change-action']}
        shuno-id={id}
        toggle-shuno-status={'evening'}
        toggle-shuno-type={evening_cont_state ? 'off' : 'on'}
        sx={{
          background: evening_cont_state
            ? buttonColors['green']
            : buttonColors['red'],
          borderRight: '1px solid #ffffff',
          ...typographyStyles(true).caption.micro,
        }}
        startIcon={
          <AutoRestartIcon
            width={12}
            height={12}
          />
        }>
        <Text>{withOneLetter ? 'В' : 'Вечер'}</Text>
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
          ...typographyStyles(true).caption.micro,
        }}
        startIcon={
          <AutoRestartIcon
            width={12}
            height={12}
          />
        }>
        <Text>{withOneLetter ? 'Н' : 'Ночь'}</Text>
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

const Text = styled(Box)`
  height: 12px;
  display: flex;
  align-items: end;
`;

const StyledButton = styled(Button)`
  padding: 2px;
  min-width: 55.5px;
  max-width: 55.5px;
  height: 100%;
  color: #000000;
  border-radius: 0;
  text-transform: none;

  .MuiButton-icon {
    margin: 0 2px 0 0;
  }
`;
