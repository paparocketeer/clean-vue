import styled from '@emotion/styled';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { AutomaticIcon } from 'src/shared/icons';
import { Typography } from 'src/shared/ui/base/Typography';

import { useNotification } from '../../hooks/useNotification';
import { execControllersCommand } from '../../store/api/controllers/controllers';

interface ILightControllerProps {
  color: 'red' | 'green';
  withAuto?: boolean;
  btnPrefix?: string;
  mode?: 'on' | 'off';
  btnSize: 'small' | 'medium' | 'large';
  controllersIds: number[];
}
export const LightController = ({
  color,
  withAuto = true,
  btnPrefix = '',
  btnSize,
  mode = 'off',
  controllersIds,
}: ILightControllerProps) => {
  const { showNoty } = useNotification();

  return (
    <Wrapper>
      <Button
        onClick={async () => {
          if (mode === 'on') {
            await execControllersCommand({
              ctl_ids: controllersIds,
              command: 'switch_light',
              params: {
                state: 'on',
                contactor: 'all',
              },
            });
            showNoty({
              variant: 'success',
              message: 'Включение Вечер + Ночь',
            });
          } else {
            await execControllersCommand({
              ctl_ids: controllersIds,
              command: 'switch_light',
              params: {
                state: 'off',
                contactor: 'all',
              },
            });
            showNoty({
              variant: 'success',
              message: 'Отключение Вечер + Ночь',
            });
          }
        }}
        size={btnSize}
        style={{
          padding: '10px 16px',
          backgroundColor: color === 'green' ? '#27AE60' : '#EB5757',
        }}>
        <Typography
          bold
          variant={'label.large'}
          color={'colors.White'}>
          {btnPrefix} Вечер + Ночь
        </Typography>
      </Button>
      <Inner>
        <Button
          onClick={async () => {
            if (mode === 'on') {
              await execControllersCommand({
                ctl_ids: controllersIds,
                command: 'switch_light',
                params: {
                  state: 'on',
                  contactor: 'evening',
                },
              });
              showNoty({
                variant: 'success',
                message: 'Включен вечерний режим',
              });
            } else {
              await execControllersCommand({
                ctl_ids: controllersIds,
                command: 'switch_light',
                params: {
                  state: 'off',
                  contactor: 'evening',
                },
              });
              showNoty({
                variant: 'success',
                message: 'Отключен вечерний режим',
              });
            }
          }}
          size={btnSize}
          style={{
            padding: '10px 16px',
            backgroundColor: color === 'green' ? '#27AE60' : '#EB5757',
          }}>
          <Typography
            bold
            variant={'label.large'}
            color={'colors.White'}>
            {btnPrefix} Вечер
          </Typography>
        </Button>

        <Button
          onClick={async () => {
            if (mode === 'on') {
              await execControllersCommand({
                ctl_ids: controllersIds,
                command: 'switch_light',
                params: {
                  state: 'on',
                  contactor: 'night',
                },
              });
              showNoty({
                variant: 'success',
                message: 'Включен ночной режим',
              });
            } else {
              await execControllersCommand({
                ctl_ids: controllersIds,
                command: 'switch_light',
                params: {
                  state: 'off',
                  contactor: 'night',
                },
              });
              showNoty({
                variant: 'success',
                message: 'Отключен ночной режим',
              });
            }
          }}
          size={btnSize}
          style={{
            padding: '10px 16px',
            backgroundColor: color === 'green' ? '#27AE60' : '#EB5757',
          }}>
          <Typography
            bold
            variant={'label.large'}
            color={'colors.White'}>
            {btnPrefix} Ночь
          </Typography>
        </Button>
      </Inner>
      {withAuto && (
        <Button
          onClick={async () => {
            await execControllersCommand({
              ctl_ids: controllersIds,
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
          size={btnSize}
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
      )}
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 8px;
  width: 100%;
  .MuiButton-root {
    width: 100%;
    padding: 10px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    text-transform: none;
  }
`;

const Inner = styled(Box)`
  display: flex;
  gap: 8px;
  width: 100%;
`;
