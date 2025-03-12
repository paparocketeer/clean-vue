import styled from '@emotion/styled';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'src/shared/hooks/useAppSelector';
import { usePath } from 'src/shared/hooks/usePath';
import { selectController } from 'src/shared/store/selectors/controller';
import { Typography } from 'src/shared/ui';

import { Map } from './components';

export const Info = () => {
  const controllerData = useAppSelector((state) => selectController(state));

  const path = usePath();
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Map />
      <StatusWrapper>
        <Item>
          <Typography variant={'body.medium'}>Вечер:</Typography>
          <Typography
            variant={'body.large'}
            bold>
            Автономный
          </Typography>
        </Item>
        <Item>
          <Typography variant={'body.medium'}>Состояние:</Typography>
          <SButton>ВКЛ</SButton>
        </Item>
      </StatusWrapper>
      <StatusWrapper>
        <Item>
          <Typography variant={'body.medium'}>Ночь:</Typography>
          <Typography
            variant={'body.large'}
            bold>
            Местный
          </Typography>
        </Item>
        <Item>
          <Typography variant={'body.medium'}>Состояние:</Typography>
          <SButton style={{ background: '#27ae60' }}>ОТКЛ</SButton>
        </Item>
      </StatusWrapper>
      <StatusWrapper>
        <ManufacturerWrapper>
          <ManufacturerTextWrapper>
            <Typography variant={'body.small'}>Производитель:</Typography>
            <Typography
              bold
              variant={'body.medium'}>
              {controllerData.manufacturer.name}
            </Typography>
          </ManufacturerTextWrapper>

          <Button
            size={'small'}
            onClick={() => {
              navigate(
                path.protectedPaths.iisuno.registry.controllersSHUNO.edit(
                  controllerData.id
                )
              );
            }}
            sx={{
              height: '24px',
              padding: '6px 24px',
              fontSize: '13px',
            }}
            variant={'contained'}>
            Редактирование контроллера ШУНО
          </Button>
        </ManufacturerWrapper>
      </StatusWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  width: auto;
  gap: 8px;
`;

const StatusWrapper = styled(Box)`
  display: flex;
  width: 100%;
  border-radius: 24px;
  background: #ffffff;
  padding: 12px 16px;
  justify-content: space-between;
  gap: 8px;
`;

const Item = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: start;
`;

const SButton = styled(Box)`
  border-radius: 66.699px;
  background: #eb5757;
  padding: 6px 8px;
  width: 111px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.14px;
`;

const ManufacturerWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;
const ManufacturerTextWrapper = styled(Box)`
  display: flex;
  gap: 8px;
`;
