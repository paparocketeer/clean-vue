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
        toggle-shuno-type={night_cont_state ? 'evening' : 'night'}
        toggle-shuno-status={night_cont_state ? 'off' : 'on'}
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
        {night_cont_state ? NText : EText}
      </StyledButton>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  display: flex;
`;

const StyledButton = styled(Button)`
  padding: 2px;
  width: 100%;
  height: 100%;
  color: #000000;
  border-radius: 0;
  border: none;
  text-transform: none;
  .MuiButton-icon {
    margin: 0 2px 0 0;
  }
`;
