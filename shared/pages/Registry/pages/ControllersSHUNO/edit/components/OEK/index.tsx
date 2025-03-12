import styled from '@emotion/styled';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useAppSelector } from 'src/shared/hooks/useAppSelector';
import {
  controllerGroupList,
  manufacturerList,
  techStatusList,
} from 'src/shared/selectList';
import { selectRegistryControllers } from 'src/shared/store/selectors/registry/edit';
import { Input, Select, Typography } from 'src/shared/ui';
import { Autocomplete } from 'src/shared/ui/Autocomplete';
import { CheckBoxGroup } from 'src/shared/ui/CheckboxGroup';

import { selectGroups } from '../../../../../../../store/selectors/groups';
import { IPField } from './components/IPField';

export const OEK = () => {
  const [count, setCount] = useState([0]);
  const controller = useAppSelector(selectRegistryControllers);

  const { register, unregister } = useFormContext();
  const { groups } = useAppSelector((state) => selectGroups(state));
  console.log(groups);
  return (
    <Wrapper>
      <Form>
        <Input
          label={'Название'}
          inputProps={{
            placeholder: 'Номер ШУНО',
          }}
        />
        {count.map((el, index) => {
          return (
            <IPWrapper key={el + index + 'oek-data'}>
              <IPField count={index + 1} />

              <Input
                {...register(`sim_${el}`)}
                label={`Номер Sim-карты ${index + 1}`}
                inputProps={{
                  placeholder: 'Введите Номер Sim',
                }}
              />
              <DeleteContainer>
                <Button
                  disabled={index === 0}
                  size={'small'}
                  sx={{ width: '136px' }}
                  variant={'outlined'}>
                  Удалить
                </Button>
              </DeleteContainer>
            </IPWrapper>
          );
        })}
        <Button
          sx={{ width: '136px' }}
          size={'small'}
          onClick={() => {
            setCount([...count, 0]);
          }}
          variant={'contained'}>
          Добавить
        </Button>

        <InnerForm>
          <Input
            label={'Протокол'}
            wrapperSx={{
              gridColumn: 'span 2',
            }}
            inputProps={{
              placeholder: 'Введите текст',
              ...register(`protocol`),
            }}
          />
          <Select
            id={'techStatus'}
            list={techStatusList}
            label={'Технический статус'}
            selectProps={{
              ...register(`techStatus`),
            }}
          />
          <Select
            id={'manufacturer'}
            list={manufacturerList}
            label={'Производитель'}
            selectProps={{
              ...register(`manufacturer`),
            }}
          />
          <Input
            label={'Идентификатор ТОиР'}
            inputProps={{
              placeholder: 'Введите текст',
              ...register(`toir`),
            }}
          />
          <Input
            label={'Идентификатор ОЭК'}
            inputProps={{
              placeholder: 'Введите текст',
              ...register(`oekId`),
            }}
          />
          <Input
            label={'Адрес'}
            inputProps={{
              placeholder: 'Введите текст',
              ...register(`address`),
            }}
          />
          <Select
            id={'groups'}
            list={Object.values(groups)?.map((el) => ({
              label: el.name,
              id: String(el.id),
            }))}
            label={'Группа'}
            selectProps={{
              ...register(`class`),
            }}
          />{' '}
          <Select
            id={'class'}
            list={controllerGroupList}
            label={'Класс установки НО'}
            selectProps={{
              ...register(`class`),
            }}
          />
          <Input
            label={'Описание'}
            sx={{
              borderRadius: '16px',
            }}
            inputProps={{
              multiline: true,
              maxRows: 3,
              minRows: 3,
              placeholder: 'Введите текст',
              ...register(`description`),
            }}
          />
          <Input
            label={'Тип размещения'}
            inputProps={{
              placeholder: 'Введите текст',
              ...register(`type`),
            }}
          />
          <CheckboxWrapper>
            <CheckBoxGroup
              label={
                <Typography
                  bold
                  variant={'label.large'}>
                  Инвертирование датчика
                </Typography>
              }
              values={[
                {
                  text: 'Пожар',
                  id: 'fire',
                  value: false,
                },
                {
                  text: 'Дверь ШУНО',
                  id: 'shuno',
                  value: false,
                },
                {
                  text: 'Датчика двери ПП',
                  id: 'pp',
                  value: false,
                },
              ]}
            />
            <CheckBoxGroup
              label={
                <Typography
                  bold
                  variant={'label.large'}>
                  Игнорирование датчика
                </Typography>
              }
              values={[
                {
                  text: 'Пожар',
                  id: 'fire',
                  value: false,
                },
                {
                  text: 'Дверь ШУНО',
                  id: 'shuno',
                  value: false,
                },
                {
                  text: 'Датчика двери ПП',
                  id: 'pp',
                  value: false,
                },
              ]}
            />
          </CheckboxWrapper>
        </InnerForm>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Form = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 24px;
`;

const IPWrapper = styled(Box)`
  width: 60%;
  display: flex;
  align-items: end;
  gap: 16px;
`;

const InnerForm = styled(Box)`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 24px;
`;

const DeleteContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
`;

const CheckboxWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
