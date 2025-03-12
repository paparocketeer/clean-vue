import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import { TitleSelect } from 'src/shared/ui';

import { LItem, SItem } from './components';

export const Counter = () => {
  const { palette } = useTheme();

  const APhase = [
    {
      left: 'I',
      right: 'A',
      value: '0,2',
      name: 'ar1',
      isDisabled: true,
    },
    {
      left: 'ном',
      right: 'A',
      value: '0,2',
      name: 'ar2',
      isDisabled: false,
    },
    {
      left: 'U',
      right: 'B',
      value: '223,4',
      name: 'ar3',
      isDisabled: true,
    },
    {
      left: 'P',
      right: 'кВт',
      value: '0,4',
      name: 'ar4',
      isDisabled: true,
    },
    {
      left: 'Q',
      right: 'кВар',
      value: '0,0',
      name: 'ar5',
      isDisabled: true,
    },
    {
      left: 'cos ф',
      right: '',
      value: '-0,4',
      name: 'ar6',
      isDisabled: true,
    },
  ];
  const BPhase = [
    {
      left: 'I',
      right: 'A',
      value: '0,2',
      name: 'ar1',
      isDisabled: true,
    },
    {
      left: 'ном',
      right: 'A',
      value: '0,2',
      name: 'ar2',
      isDisabled: false,
    },
    {
      left: 'U',
      right: 'B',
      value: '223,4',
      name: 'ar3',
      isDisabled: true,
    },
    {
      left: 'P',
      right: 'кВт',
      value: '0,4',
      name: 'ar4',
      isDisabled: true,
    },
    {
      left: 'Q',
      right: 'кВар',
      value: '0,0',
      name: 'ar5',
      isDisabled: true,
    },
    {
      left: 'cos ф',
      right: '',
      value: '-0,4',
      name: 'ar6',
      isDisabled: true,
    },
  ];
  const CPhase = [
    {
      left: 'I',
      right: 'A',
      value: '0,2',
      name: 'ar1',
      isDisabled: true,
    },
    {
      left: 'ном',
      right: 'A',
      value: '0,2',
      name: 'ar2',
      isDisabled: false,
    },
    {
      left: 'U',
      right: 'B',
      value: '223,4',
      name: 'ar3',
      isDisabled: true,
    },
    {
      left: 'P',
      right: 'кВт',
      value: '0,4',
      name: 'ar4',
      isDisabled: true,
    },
    {
      left: 'Q',
      right: 'кВар',
      value: '0,0',
      name: 'ar5',
      isDisabled: true,
    },
    {
      left: 'cos ф',
      right: '',
      value: '-0,4',
      name: 'ar6',
      isDisabled: true,
    },
  ];
  const TarifPhase = [
    {
      left: 'T1',
      right: 'кВт*ч',
      value: '57024000',
      name: 'ar1',
      isDisabled: true,
    },
    {
      left: 'T2',
      right: 'кВт*ч',
      value: '3468126',
      name: 'ar2',
      isDisabled: true,
    },
  ];

  return (
    <Wrapper>
      <Inner>
        <TitleSelect
          defaultValue={0}
          onChange={() => {}}
          list={[
            {
              model: 'Меркурий 230',
              number: '0000000000040766703',
              id: 0,
            },
            {
              model: 'Меркурий 231',
              number: '0000000000040766704',
              id: 1,
            },
            {
              model: 'Меркурий 232',
              number: '0000000000040766705',
              id: 2,
            },
          ]}
        />
        <InnerWrapper>
          <SItem
            left={'Pabc'}
            right={'кВт'}
            value={'0,2'}
            isDisabled={true}
          />
          <SItem
            left={'Qabc'}
            right={'кВар'}
            value={'-0,1'}
            isDisabled={true}
          />
          <SItem
            left={'E'}
            right={'кВт*ч'}
            value={'0,2'}
            isDisabled={true}
          />
          <SItem
            left={'S'}
            right={'кВт'}
            value={'0,1'}
            isDisabled={true}
          />

          <LItem
            title={'Фаза'}
            letter={'A'}
            letterColor={palette.alert['alert-yellow']}
            items={APhase}
          />
          <LItem
            title={'Фаза'}
            letter={'B'}
            letterColor={palette.alert['alert-green']}
            items={BPhase}
          />
          <LItem
            title={'Фаза'}
            letter={'C'}
            letterColor={palette.alert['alert-red']}
            items={CPhase}
          />
          <LItem
            title={'Тарифы'}
            items={TarifPhase}
          />
        </InnerWrapper>
      </Inner>
      <Actions>
        <Button
          variant={'contained'}
          size={'medium'}>
          Установка номинальных значений
        </Button>
        <Button
          variant={'contained'}
          size={'medium'}>
          Контроль нагрузки
        </Button>
      </Actions>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  background: ${(p) => p.theme.palette.colors.White};

  padding: 16px;
`;
const Inner = styled(Box)`
  display: flex;
  flex-direction: column;
`;
const Actions = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
`;

const SerialNumberWrapper = styled(Box)`
  display: flex;
  width: 100%;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  border: 1.334px dashed #5ea2ff;
  background: #e7f1ff;
  margin-top: 12px;
`;

const InnerWrapper = styled(Box)`
  display: grid;
  gap: 12px;
  margin-top: 12px;
  grid-template-columns: 1fr 1fr 1fr 1.6fr;
`;
