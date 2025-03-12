import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React from 'react';

export const Item = () => {
  return (
    <Wrapper>
      {/*<Head>
        <HeadInner>
          <Avatar variant={'man'} />
          <NameWrapper>
            <Typography
              variant={'title.medium'}
              bold>
              Администратор
            </Typography>
            <Typography
              variant={'title.small'}
              bold>
              Иванов Иван Иванович
            </Typography>
          </NameWrapper>
        </HeadInner>
        <ItemActions />
      </Head>
      <Form>
        <Input
          label={'Логин'}
          inputProps={{ value: 'ArtemRa', disabled: true }}
          labelProps={{
            color: 'colors.Black',
          }}
        />
        <Input
          label={'Роль'}
          inputProps={{ value: 'Монтажник', disabled: true }}
          labelProps={{
            color: 'colors.Black',
          }}
        />
        <Input
          label={'Организация'}
          inputProps={{ value: 'USSR', disabled: true }}
          labelProps={{
            color: 'colors.Black',
          }}
        />
        <Input
          label={'Должность'}
          inputProps={{ value: 'Электрик', disabled: true }}
          labelProps={{
            color: 'colors.Black',
          }}
        />
        <Input
          label={'Метаинформация'}
          inputProps={{ value: 'My info', disabled: true }}
          labelProps={{
            color: 'colors.Black',
          }}
        />
        <Input
          label={'Статус'}
          inputProps={{ value: 'status', disabled: true }}
          labelProps={{
            color: 'colors.Black',
          }}
        />
        <Input
          label={'Телефон'}
          inputProps={{ value: '88005553535', disabled: true }}
          labelProps={{
            color: 'colors.Black',
          }}
        />
        <Input
          label={'Адрес эл. почты'}
          inputProps={{ value: 'mail@mail.com', disabled: true }}
          labelProps={{
            color: 'colors.Black',
          }}
        />
      </Form>*/}
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  border-radius: 24px;
  background: ${(p) => p.theme.palette.colors.White};
  box-shadow:
    0 6px 6px 0 rgba(0, 0, 0, 0.05),
    0 -1px 4px 0 rgba(0, 0, 0, 0.06),
    0 0 6px 0 rgba(0, 0, 0, 0.03);
`;

const Head = styled(Box)`
  display: flex;
  padding: 8px 24px;
  align-self: stretch;
  border-bottom: 1px solid ${(p) => p.theme.palette.Accent.Primary};
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

const HeadInner = styled(Box)`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const NameWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const Form = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px 16px 16px 16px;
`;
