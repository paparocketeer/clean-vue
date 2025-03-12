import styled from '@emotion/styled';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { type MRT_ColumnDef } from 'material-react-table';
import React, { useMemo } from 'react';
import { LightController, Table, Typography } from 'src/shared/ui';
import { PPStatusListHorizontal } from 'src/shared/ui/PPStatusListHorizontal';

const data = [
  {
    id: '1',
    data1: '1',
    data2: '2',
    data3: '3',
    data4: '4',
    data5: '5',
    data6: '6',
    data7: '7',
    data8: '8',
    data9: '9',
  },
  {
    id: '2',
    data1: '1',
    data2: '2',
    data3: '3',
    data4: '4',
    data5: '5',
    data6: '6',
    data7: '7',
    data8: '8',
    data9: '9',
  },
  {
    id: '3',
    data1: '1',
    data2: '2',
    data3: '3',
    data4: '4',
    data5: '5',
    data6: '6',
    data7: '7',
    data8: '8',
    data9: '9',
  },
  {
    id: '4',
    data1: '1',
    data2: '2',
    data3: '3',
    data4: '4',
    data5: '5',
    data6: '6',
    data7: '7',
    data8: '8',
    data9: '9',
  },
  {
    id: '5',
    data1: '1',
    data2: '2',
    data3: '3',
    data4: '4',
    data5: '5',
    data6: '6',
    data7: '7',
    data8: '8',
    data9: '9',
  },
  {
    id: '6',
    data1: '1',
    data2: '2',
    data3: '3',
    data4: '4',
    data5: '5',
    data6: '6',
    data7: '7',
    data8: '8',
    data9: '9',
  },
  {
    id: '7',
    data1: '1',
    data2: '2',
    data3: '3',
    data4: '4',
    data5: '5',
    data6: '6',
    data7: '7',
    data8: '8',
    data9: '9',
  },
  {
    id: '8',
    data1: '1',
    data2: '2',
    data3: '3',
    data4: '4',
    data5: '5',
    data6: '6',
    data7: '7',
    data8: '8',
    data9: '9',
  },
];

export const Test = () => {
  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        id: 'date',
        accessorKey: 'date',
        maxSize: 10,
        header: 'Дата',
        enableColumnActions: false,
      },
      {
        id: 'time',
        accessorKey: 'time',
        maxSize: 10,
        header: 'Время',
        enableColumnActions: false,
      },
      {
        id: 'object',
        accessorKey: 'object',
        maxSize: 10,
        header: 'Обьект',
        enableColumnActions: false,
      },
      {
        id: 'desc',
        accessorKey: 'desc',
        maxSize: 40,
        header: 'Описание',
        enableColumnActions: false,
      },
      {
        id: 'val',
        accessorKey: 'val',
        maxSize: 10,
        header: 'Значение',
        enableColumnActions: false,
      },
      {
        id: 'user',
        accessorKey: 'user',
        maxSize: 10,
        header: 'Пользователь',
        enableColumnActions: false,
      },
    ],
    []
  );

  return (
    <Wrapper>
      <Top>
        <ActionsItemWrapper>
          <ActionItem>
            <LightController
              controllersIds={[]}
              btnSize={'small'}
              color={'red'}
              btnPrefix={'Вкл. '}
            />
            <LightController
              controllersIds={[]}
              btnSize={'small'}
              color={'green'}
              btnPrefix={'Откл. '}
            />
          </ActionItem>
        </ActionsItemWrapper>
        <StatusItemWrapper>
          <StatusItem>
            <PPStatusListHorizontal
              size={'large'}
              lights={'active'}
              outgoingLines={'inactive'}
              accident={'active'}
              connect={'inactive'}
              fire={'broken'}
              inputAccident={'active'}
              openDoorPP={'inactive'}
              openDoorSHUNO={'broken'}
            />
          </StatusItem>
          <StatusItemInner>
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
                <Typography variant={'body.medium'}>Вечер:</Typography>
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
          </StatusItemInner>
        </StatusItemWrapper>
      </Top>
      <Bottom>
        <Table
          total={100}
          paginationName={'test-page'}
          columns={columns}
          data={data}
        />
      </Bottom>
      <Actions>
        <Button
          size={'medium'}
          variant={'outlined'}>
          Отмена
        </Button>
        <Button
          size={'medium'}
          variant={'contained'}>
          Сохранить
        </Button>
      </Actions>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Actions = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  align-self: stretch;
`;

const ActionItem = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 16px;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
  border-radius: 12px;
  background: #f3f8ff;
`;
const StatusItem = styled(Box)`
  display: flex;
  padding: 8px;
  gap: 8px;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 12px;
  background: #f3f8ff;
`;
const StatusItemInner = styled(Box)`
  display: flex;
  gap: 8px;
  width: 100%;
`;
const StatusItemWrapper = styled(Box)`
  display: flex;
  height: 100%;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 12px;
`;
const ActionsItemWrapper = styled(Box)`
  display: flex;
  gap: 8px;
  width: 100%;
`;

const Top = styled(Box)`
  display: grid;
  gap: 8px;
  grid-template-columns: 1fr 1fr;
`;

const Bottom = styled(Box)``;

const StatusWrapper = styled(Box)`
  display: flex;
  width: 100%;
  border-radius: 24px;
  padding: 12px 16px;
  justify-content: space-between;
  gap: 8px;
  background: #f3f8ff;
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
