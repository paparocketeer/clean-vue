import styled from '@emotion/styled';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import { useAppSelector } from 'src/shared/hooks/useAppSelector';
import {
  AcknowledgeIcon,
  AutomaticIcon,
  FireIcon,
  UnlockIcon,
} from 'src/shared/icons';
import { selectGroupsItem } from 'src/shared/store/selectors/groupItem';
import { LightController, Typography } from 'src/shared/ui';
import { TimeController } from 'src/shared/ui/TimeController';

import { useNotification } from '../../../../../../hooks/useNotification';
import { execControllersCommand } from '../../../../../../store/api/controllers/controllers';

export const ControlItems = () => {
  const { selectedPoints } = useAppSelector((state) => selectGroupsItem(state));
  const { showNoty } = useNotification();

  return (
    <Wrapper>
      <ActionsWrapper>
        <ActionsInner>
          <LightController
            controllersIds={selectedPoints.map((el) => el.id)}
            btnSize={'small'}
            color={'red'}
            btnPrefix={'Вкл. '}
            withAuto={false}
          />
          <LightController
            controllersIds={selectedPoints.map((el) => el.id)}
            btnSize={'small'}
            color={'green'}
            btnPrefix={'Откл. '}
            withAuto={false}
          />
        </ActionsInner>
        <Button
          onClick={async () => {
            await execControllersCommand({
              ctl_ids: selectedPoints.map((el) => el.id),
              command: 'switch_mode',
              params: {
                mode: 'autonomous',
                contactor: 'all',
              },
            });
            showNoty({
              variant: 'success',
              message: 'Включен автономный режим',
            });
          }}
          size={'small'}
          style={{
            padding: '10px 16px',
          }}
          variant={'outlined'}
          startIcon={<AutomaticIcon />}>
          <Typography
            bold
            color={'Accent.Primary'}
            variant={'label.large'}>
            Автономный
          </Typography>
        </Button>
      </ActionsWrapper>

      <TimeController btnSize={'small'} />
      <ControlWrapper>
        <Button
          onClick={async () => {
            await execControllersCommand({
              ctl_ids: selectedPoints.map((el) => Number(el.id)),
              command: 'reset_fire_sensor',
              params: {},
            });
            showNoty({
              variant: 'success',
              message: 'Датчик пожара обновлен',
            });
          }}
          size={'small'}
          style={{
            padding: '10px 16px',
          }}
          variant={'outlined'}
          startIcon={
            <FireIcon
              width={16}
              height={16}
            />
          }>
          Сброс датчика пожара
        </Button>
        <Button
          size={'small'}
          style={{
            padding: '10px 16px',
          }}
          variant={'outlined'}
          startIcon={<AcknowledgeIcon />}>
          Квитировать
        </Button>
      </ControlWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  padding: 16px;
  gap: 8px;
  width: 100%;
  border-right: 1px solid #91bfff;
`;

const ControlWrapper = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ActionsWrapper = styled(Box)`
  min-width: 481px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ActionsInner = styled(Box)`
  width: 100%;
  display: flex;
  gap: 8px;
`;
