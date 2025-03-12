import styled from '@emotion/styled';
import { Tooltip } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { statusColors } from 'src/constants/colors';
import { usePath } from 'src/shared/hooks/usePath';
import {
  AccidentIcon,
  ClosedDoorIcon,
  ClosedDoubleDoorIcon,
  ColonIcon,
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
  id,
  cabinet_door_open,
  station_door_open,
  in_exploitation,
  alarm,
  input_alarm,
  not_in_exploitation,
  lamp_error,
  outgoing_lines_alarm,
  fire_alarm,
  name,
  iconBackground,
}: TLocalGroupItem) => {
  const navigate = useNavigate();
  const { protectedPaths } = usePath();
  return (
    <Wrapper>
      <ItemTitle
        onClick={() => {
          navigate(protectedPaths.iisuno.groups.groupItem(id));
        }}>
        <IconWrapper style={{ backgroundColor: iconBackground }}>
          <ColonIcon />
        </IconWrapper>
        <Typography
          variant={'title.medium'}
          bold>
          {name}
        </Typography>
      </ItemTitle>

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
            bold>
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
            variant={'title.medium'}
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
                backgroundColor: not_in_exploitation
                  ? statusColors.error
                  : statusColors.base,
              }}>
              <OfflineIcon />
            </IconWrapper>
            <Typography
              variant={'title.medium'}
              bold>
              {not_in_exploitation}
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
  display: flex;
  width: 100%;
  background: #ffffff;
  box-shadow: 0 0 0 1px #91bfff;
  padding: 8px 10px;
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
  cursor: pointer;
  gap: 8px;
  width: 100%;
  padding: 8px;
  max-width: 280px;
  background: #e7f1ff;
  border-radius: 100px;
`;

const InfoWrapper = styled(Box)`
  display: flex;
  gap: 8px;
  width: 100%;
  justify-content: space-between;
`;

const InfoItem = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 8px;
  border-right: 2px solid #b5b8bd;
  padding: 8px 16px 8px 8px;
`;

const InfoItemLabel = styled(Box)`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

const StatusWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-left: 8px;
`;

const StatusItem = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 80px;
`;
