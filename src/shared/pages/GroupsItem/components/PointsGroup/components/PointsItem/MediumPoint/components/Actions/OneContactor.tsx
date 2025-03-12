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
import { actionTypes } from '../../../../../../../constants';
import { buttonColors } from '../../../constants';

interface IActionsProps extends IControllerStatisticItem {
  withOneLetter?: boolean;
}
export const OneContactor = ({
  withOneLetter,
  dont_disable,
  dont_enable,
  night_cont_state,
  id,
}: IActionsProps) => {
  const NText = withOneLetter ? 'Н' : 'Ночь';
  const EText = withOneLetter ? 'В' : 'Вечер';

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
        toggle-shuno-status={night_cont_state ? 'evening' : 'night'}
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
            width={12}
            height={12}
          />
        }>
        {night_cont_state ? NText : EText}
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
  height: 100%;
  border: none;
  color: #000000;
  border-radius: 0;
  text-transform: none;
`;
