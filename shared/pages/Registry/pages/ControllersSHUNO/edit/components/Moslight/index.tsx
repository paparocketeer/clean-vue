import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React from 'react';
import { GridBox, InputGroup, SmallTable, TextField } from 'src/shared/ui';

export const Moslight = () => {
  return (
    <Wrapper>
      <Form>
        <TopForm>
          <InputGroup title={'Данные'}>
            <GridBox
              columns={'1fr 1fr'}
              gap={'8'}>
              <GridBox
                columns={'1fr 1fr'}
                gap={'8'}>
                <TextField
                  label={'Номер'}
                  inputProps={{
                    disabled: true,
                    placeholder: '',
                  }}
                />
                <TextField
                  label={'Диспетчерская'}
                  inputProps={{
                    disabled: true,
                    placeholder: '',
                  }}
                />
              </GridBox>
              <TextField
                label={'Примечание'}
                inputProps={{
                  disabled: true,
                  placeholder: '',
                }}
              />
            </GridBox>
            <GridBox
              columns={'1fr 1fr'}
              gap={'8'}>
              <TextField
                label={'Улица'}
                inputProps={{
                  disabled: true,
                  placeholder: '',
                }}
              />
              <TextField
                label={'Ориентир'}
                inputProps={{
                  disabled: true,
                  placeholder: '',
                }}
              />
            </GridBox>
          </InputGroup>
          <InputGroup title={'Остальные данные'}>
            <GridBox
              columns={'1fr 1fr'}
              gap={'8'}>
              <TextField
                inputProps={{
                  disabled: true,
                }}
                id={'ДГИ ID'}
                label={'Муниципальный округ'}
              />
              <TextField
                inputProps={{
                  disabled: true,
                }}
                id={'district'}
                label={'Муниципальный округ'}
              />
            </GridBox>
            <GridBox
              columns={'1fr 1fr'}
              gap={'8'}>
              <TextField
                label={'Категория'}
                inputProps={{
                  disabled: true,
                  placeholder: '',
                }}
              />
              <TextField
                label={'Код 1C'}
                inputProps={{
                  disabled: true,
                  placeholder: '',
                }}
              />
            </GridBox>
          </InputGroup>
        </TopForm>

        <BottomForm>
          <InputGroup title={'Осн. характеристики ШУНО'}>
            <GridBox
              gap={16}
              columns={'1fr'}>
              <TextField
                inputProps={{
                  disabled: true,
                }}
                id={'district'}
                label={'Тип размещения'}
              />
              <TextField
                inputProps={{
                  disabled: true,
                }}
                label={'Дата начала действия аккаунта'}
              />
              <TextField
                inputProps={{
                  disabled: true,
                }}
                label={'Год последнего КР'}
              />
              <TextField
                label={'Количество сборок'}
                inputProps={{
                  disabled: true,
                  placeholder: '',
                }}
              />
              <TextField
                inputProps={{
                  disabled: true,
                }}
                id={'district'}
                label={'Участок'}
              />
            </GridBox>
          </InputGroup>

          <InputGroup title={'Энергообеспечение'}>
            <GridBox
              gap={16}
              columns={'1fr'}>
              <TextField
                inputProps={{
                  disabled: true,
                }}
                id={'district'}
                label={'Административный округ'}
              />
              <TextField
                label={'Поставщик эл. энергии'}
                inputProps={{
                  disabled: true,
                  placeholder: '',
                }}
              />
              <TextField
                label={'Подключение от сетей'}
                inputProps={{
                  disabled: true,
                  placeholder: '',
                }}
              />
              <TextField
                label={'Номер питающей ТП'}
                inputProps={{
                  disabled: true,
                  placeholder: '',
                }}
              />
              <TextField
                label={'U в точке присоединения (кВ)'}
                inputProps={{
                  disabled: true,
                  placeholder: '',
                }}
              />
              <TextField
                label={'Транзит от ШУНО НО'}
                inputProps={{
                  disabled: true,
                  placeholder: '',
                }}
              />
            </GridBox>
          </InputGroup>

          <InputGroup title={'Показатели установленных нагрузок'}>
            <GridBox
              gap={16}
              columns={'1fr'}>
              <GridBox
                gap={8}
                columns={'1fr 1fr'}>
                <TextField
                  label={'Раз. мощность НО (кВт)'}
                  inputProps={{
                    disabled: true,
                    placeholder: '',
                  }}
                />
                <TextField
                  label={'Разр. мощность Доп. суб. (кВт)'}
                  inputProps={{
                    placeholder: '',
                  }}
                />
              </GridBox>
              <TextField
                label={'Сумма, разрешенная мощность (кВт)'}
                inputProps={{
                  disabled: true,
                  placeholder: '',
                }}
              />
              <GridBox columns={'1fr 1fr'}>
                <TextField
                  label={'Установленная мощность НО (кВт)'}
                  inputProps={{
                    disabled: true,
                    placeholder: '',
                  }}
                />
              </GridBox>
              <GridBox
                columns={'1fr 1fr'}
                gap={8}>
                <TextField
                  label={'Уст. мощность с/абон. НО (кВт)'}
                  inputProps={{
                    disabled: true,
                    placeholder: '',
                  }}
                />
                <TextField
                  label={'Уст. мощность с/абон. Доп. суб. (кВт)'}
                  inputProps={{
                    disabled: true,
                    placeholder: '',
                  }}
                />
              </GridBox>
              <GridBox columns={'1fr 1fr'}>
                <TextField
                  label={'Транзитная мощность НО (кВт)'}
                  inputProps={{
                    disabled: true,
                    placeholder: '',
                  }}
                />
              </GridBox>
              <GridBox columns={'1fr'}>
                <TextField
                  label={'Сумма, установленная мощность (кВт)'}
                  inputProps={{
                    disabled: true,
                    placeholder: '',
                  }}
                />
              </GridBox>
              <GridBox
                gap={8}
                columns={'1fr 1fr'}>
                <TextField
                  label={'Свободная мощность НО (кВт)'}
                  inputProps={{
                    disabled: true,
                    placeholder: '',
                  }}
                />
                <TextField
                  label={'Свободная мощность Доп. суб. (кВт)'}
                  inputProps={{
                    disabled: true,
                    placeholder: '',
                  }}
                />
              </GridBox>
            </GridBox>
          </InputGroup>

          <InputGroup title={'Показатели установленных нагрузок'}>
            <TextField
              label={'Подрядчик'}
              inputProps={{
                disabled: true,
                placeholder: '',
              }}
            />
            <TextField
              label={'Номер договора'}
              inputProps={{
                disabled: true,
                placeholder: '',
              }}
            />
            <GridBox
              gap={8}
              columns={'1fr 1fr'}>
              <TextField
                inputProps={{
                  disabled: true,
                }}
                label={'Начало'}
              />
              <TextField
                inputProps={{
                  disabled: true,
                }}
                label={'Конец'}
              />
            </GridBox>
            <TextField
              inputProps={{
                disabled: true,
              }}
              id={'district'}
              label={'Баланс'}
            />
            <SmallTable label={'Список ДПИ'} />
          </InputGroup>
        </BottomForm>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  gap: 16px;
`;

const Form = styled(Box)`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  gap: 24px;
`;

const TopForm = styled(Box)`
  display: flex;
  gap: 32px;
  padding: 16px 0;
`;

const BottomForm = styled(Box)`
  display: flex;
  gap: 32px;
`;
