import styled from '@emotion/styled';
import { Tooltip } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { statusColors } from 'src/constants/colors';
import { usePath } from 'src/shared/hooks/usePath';
import {
  AccidentIcon,
  CityIcon,
  ClosedDoorIcon,
  ClosedDoubleDoorIcon,
  FireIcon,
  InputAccidentIcon,
  LampIcon,
  OfflineIcon,
  OperationIcon,
  OutgoingLinesIcon,
} from 'src/shared/icons';
import { TLocalGroupItem } from 'src/shared/store/api/groups/groups.types';
import { Typography } from 'src/shared/ui';

export const Item = ({
  iconBackground,
  name,
  id,
  width,
  cabinet_door_open,
  station_door_open,
  in_exploitation,
  alarm,
  input_alarm,
  not_in_exploitation,
  lamp_error,
  outgoing_lines_alarm,
  not_connected,
  fire_alarm,
}: TLocalGroupItem) => {
  const navigate = useNavigate();
  const { protectedPaths } = usePath();
  return (
    <Wrapper
      style={{
        width: `${width}px`,
      }}>
      <ItemTitle
        onClick={() => {
          navigate(protectedPaths.iisuno.groups.groupItem(id));
        }}>
        <IconWrapper style={{ backgroundColor: iconBackground }}>
          <CityIcon />
        </IconWrapper>
        <Typography
          variant={'title.medium'}
          bold>
          {name}
        </Typography>
      </ItemTitle>
      <Divider />
      <InfoWrapper>
        <InfoItem>
          <InfoItemLabel>
            <IconWrapper style={{ backgroundColor: '#27AE60' }}>
              <OperationIcon />
            </IconWrapper>
            <Typography
              variant={'title.medium'}
              bold>
              В эксплуатации
            </Typography>
          </InfoItemLabel>
          <Typography
            variant={'title.large'}
            bold
            sx={{
              padding: '8px',
              height: '40px',
              background: '#fff',
              borderRadius: '50px',
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
              minWidth: '40px',
            }}>
            {in_exploitation}
          </Typography>
        </InfoItem>
        <InfoItem>
          <InfoItemLabel>
            <IconWrapper style={{ backgroundColor: '#B5B8BD' }}>
              <OperationIcon />
            </IconWrapper>
            <Typography
              variant={'title.medium'}
              bold>
              Выведено из эксплуатации
            </Typography>
          </InfoItemLabel>
          <Typography
            variant={'title.large'}
            sx={{
              padding: '8px',
              height: '40px',
              background: '#fff',
              borderRadius: '50px',
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
              minWidth: '40px',
            }}
            bold>
            {not_in_exploitation}
          </Typography>
        </InfoItem>
      </InfoWrapper>
      <StatusWrapper>
        <Tooltip title='Авария на вводе'>
          <StatusItem>
            <IconWrapper
              style={{
                backgroundColor: input_alarm
                  ? statusColors.error
                  : statusColors.base,
              }}>
              <InputAccidentIcon />
            </IconWrapper>
            <Typography
              variant={'title.medium'}
              bold>
              {input_alarm}
            </Typography>
          </StatusItem>
        </Tooltip>

        <Tooltip title='Не на связи'>
          <StatusItem>
            <IconWrapper
              style={{
                backgroundColor: not_connected
                  ? statusColors.error
                  : statusColors.base,
              }}>
              <OfflineIcon />
            </IconWrapper>
            <Typography
              variant={'title.medium'}
              bold>
              {not_connected}
            </Typography>
          </StatusItem>
        </Tooltip>

        <Tooltip title='Открытая дверь ШУНО'>
          <StatusItem>
            <IconWrapper
              style={{
                backgroundColor: cabinet_door_open
                  ? statusColors.error
                  : statusColors.base,
              }}>
              <ClosedDoorIcon />
            </IconWrapper>
            <Typography
              variant={'title.medium'}
              bold>
              {cabinet_door_open}
            </Typography>
          </StatusItem>
        </Tooltip>

        <Tooltip title='Пожар'>
          <StatusItem>
            <IconWrapper
              style={{
                backgroundColor: fire_alarm
                  ? statusColors.error
                  : statusColors.base,
              }}>
              <FireIcon />
            </IconWrapper>
            <Typography
              variant={'title.medium'}
              bold>
              {fire_alarm}
            </Typography>
          </StatusItem>
        </Tooltip>

        <Tooltip title='Отходящие линии'>
          <StatusItem>
            <IconWrapper
              style={{
                backgroundColor: outgoing_lines_alarm
                  ? statusColors.error
                  : statusColors.base,
              }}>
              <OutgoingLinesIcon />
            </IconWrapper>
            <Typography
              variant={'title.medium'}
              bold>
              {outgoing_lines_alarm}
            </Typography>
          </StatusItem>
        </Tooltip>

        <Tooltip title='Ошибка на лампе'>
          <StatusItem>
            <IconWrapper
              style={{
                backgroundColor: lamp_error
                  ? statusColors.error
                  : statusColors.base,
              }}>
              <LampIcon />
            </IconWrapper>
            <Typography
              variant={'title.medium'}
              bold>
              {lamp_error}
            </Typography>
          </StatusItem>
        </Tooltip>

        <Tooltip title='Открытая дверь ШУНО'>
          <StatusItem>
            <IconWrapper
              style={{
                backgroundColor: station_door_open
                  ? statusColors.error
                  : statusColors.base,
              }}>
              <ClosedDoubleDoorIcon />
            </IconWrapper>
            <Typography
              variant={'title.medium'}
              bold>
              {station_door_open}
            </Typography>
          </StatusItem>
        </Tooltip>

        <Tooltip title='Авария'>
          <StatusItem>
            <IconWrapper
              style={{
                backgroundColor: alarm ? statusColors.error : statusColors.base,
              }}>
              <AccidentIcon />
            </IconWrapper>
            <Typography
              variant={'title.medium'}
              bold>
              {alarm}
            </Typography>
          </StatusItem>
        </Tooltip>
      </StatusWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  border-radius: 24px;
  box-shadow:
    0 -1px 4px 0 rgba(0, 0, 0, 0.03),
    0 5px 12px 0 rgba(0, 30, 69, 0.08);
  background: #ffffff;
  flex-direction: column;
  display: flex;
`;
const Divider = styled(Box)`
  border-bottom: 1px solid #ebeff2;
  margin: 2px -11px 10px -11px;
`;
const IconWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  min-width: 40px;
  height: 40px;
  color: #ffffff;
`;

const ItemTitle = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 8px;
  width: 100%;
  padding: 10px 12px;
  cursor: pointer;
`;

const InfoWrapper = styled(Box)`
  padding: 12px 8px 0 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InfoItem = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #e6ecf2;
  border-radius: 25px;
  gap: 8px;
  padding: 8px;
`;

const InfoItemLabel = styled(Box)`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

const StatusWrapper = styled(Box)`
  display: grid;
  padding: 0 8px 12px 8px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-top: 8px;
`;

const StatusItem = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4px 4px 0 4px;
`;
