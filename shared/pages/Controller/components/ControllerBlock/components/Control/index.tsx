import styled from '@emotion/styled';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from 'src/shared/hooks/useAppSelector';
import { AcknowledgeIcon, FireIcon, UnlockIcon } from 'src/shared/icons';
import { selectController } from 'src/shared/store/selectors/controller';
import { LightController, TimeController, Typography } from 'src/shared/ui';

import { useNotification } from '../../../../../../hooks/useNotification';
import { execControllersCommand } from '../../../../../../store/api/controllers/controllers';

export const Control = () => {
  const controllerData = useAppSelector((state) => selectController(state));
  const { showNoty } = useNotification();
  const { controllerId } = useParams();

  return (
    <Wrapper>
      <Item>
        <Title>
          <Typography
            bold
            variant={'title.medium'}>
            Блок управления
          </Typography>
        </Title>
        <LightController
          btnSize={'small'}
          withAuto={false}
          mode={'on'}
          color={'red'}
          btnPrefix={'Вкл. '}
          controllersIds={[controllerData.id]}
        />
        <LightController
          btnSize={'small'}
          mode={'off'}
          color={'green'}
          btnPrefix={'Откл. '}
          controllersIds={[controllerData.id]}
        />
      </Item>
      <Item>
        <Title>
          <Typography
            bold
            variant={'title.medium'}>
            Кратковременное включение
          </Typography>
        </Title>
        <TimeController btnSize={'small'} />
      </Item>
      <Item>
        <Button
          onClick={async () => {
            await execControllersCommand({
              ctl_ids: [Number(controllerId)],
              command: 'switch_mode',
              params: {
                mode: 'control_lock',
              },
            });
            showNoty({
              variant: 'success',
              message: 'Управление контроллером заблокировано',
            });
          }}
          sx={{
            width: '100%',
          }}
          startIcon={<UnlockIcon />}
          size='small'
          variant={'contained'}>
          Блокировать
        </Button>
      </Item>
      <Item>
        <Title>
          <Typography
            bold
            variant={'title.medium'}>
            Действия
          </Typography>
        </Title>
        <Button
          onClick={async () => {
            await execControllersCommand({
              ctl_ids: [Number(controllerId)],
              command: 'reset_fire_sensor',
              params: {},
            });
            showNoty({
              variant: 'success',
              message: 'Датчик пожара обновлен',
            });
          }}
          sx={{
            width: '100%',
          }}
          size='small'
          startIcon={
            <FireIcon
              width={'16px'}
              height={'16px'}
            />
          }
          variant={'outlined'}>
          Сброс датчика пожара
        </Button>
        <Button
          sx={{
            width: '100%',
          }}
          size='small'
          startIcon={
            <AcknowledgeIcon
              width={'16px'}
              height={'16px'}
            />
          }
          variant={'outlined'}>
          Квитировать
        </Button>
      </Item>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 320px;
  border-radius: 24px;
  background: #ffffff;
`;
const Item = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px;
  border-bottom: 1px solid #ebeff2;
`;

const Title = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 8px 14px 8px;
`;
