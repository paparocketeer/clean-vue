import styled from '@emotion/styled';
import { yupResolver } from '@hookform/resolvers/yup';
import Box from '@mui/material/Box';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'src/shared/hooks/useAppDispatch';
import { useNotification } from 'src/shared/hooks/useNotification';
import { usePath } from 'src/shared/hooks/usePath';
import { ChangeAvatar } from 'src/shared/modals/changeAvatar';
import { organizationList } from 'src/shared/selectList';
import { createUser } from 'src/shared/store/slices/users';
import { IUpdateUser } from 'src/shared/types/users';
import {
  Accordion,
  Avatar,
  Input,
  MaskInput,
  PasswordInput,
  Select,
  TextField,
  Typography,
} from 'src/shared/ui';

import { useAppSelector } from '../../../../hooks/useAppSelector';
import { selectRoles } from '../../../../store/selectors/users/roles';
import { selectUsersGroups } from '../../../../store/selectors/users/usersGroups';
import { fetchUsersGroupsList } from '../../../../store/slices/users/groups';
import { fetchRolesList } from '../../../../store/slices/users/roles';
import { getPasswordRules } from '../../../../store/slices/utils/validation';
import { mapFormValues } from './mapValues';
import { userScheme } from './validation';

export const Container = () => {
  const [activeGroups, setActiveGroups] = React.useState([]);
  const dispatch = useAppDispatch();
  const { showNoty } = useNotification();
  const navigate = useNavigate();
  const path = usePath();

  const methods = useForm<IUpdateUser>({
    defaultValues: {
      password: '',
      user: '',
      id: '',
      fullname: '',
      phone: '',
      email: '',
      company: '',
      comment: '',
      roles: [],
      permanent_blocked: false,
      position: '',
    },
    resolver: yupResolver<any>(userScheme),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = methods;
  const roles = useAppSelector(selectRoles);
  const userGroups = useAppSelector(selectUsersGroups);

  const onSubmit: SubmitHandler<IUpdateUser> = async (data) => {
    try {
      await dispatch(createUser(mapFormValues(data))).unwrap();

      showNoty({
        variant: 'success',
        message: 'Пользователь создан',
      });
      navigate(path.protectedPaths.iisuno.administration.users());
    } catch (e) {
      showNoty({
        variant: 'error',
        message: 'Ошибка создания пользователя',
      });
    }
  };

  const [showAvatarModal, setShowAvatarModal] = useState(false);

  useEffect(() => {
    dispatch(getPasswordRules());
    dispatch(fetchUsersGroupsList());
    dispatch(fetchRolesList());
  }, []);

  return (
    <FormProvider {...methods}>
      <Wrapper onSubmit={handleSubmit(onSubmit)}>
        <Inner>
          <AvatarWrapper>
            <Avatar variant={'man'} />
            {/*<Button
              onClick={() => {
                setShowAvatarModal(true);
              }}
              variant={'outlined'}>
              Изменить аватарку
            </Button>*/}
          </AvatarWrapper>
          <Content>
            <InfoWrapper>
              <Typography
                bold
                variant={'title.medium'}>
                Основные данные
              </Typography>
              <FormWrapper>
                <TextField
                  label={'ФИО'}
                  inputProps={{
                    placeholder: 'Введите ФИО',
                    ...register('fullname'),
                    helperText: errors.fullname?.message,
                    error: !!errors.fullname?.message,
                  }}
                />
                <TextField
                  label={'Логин'}
                  inputProps={{
                    placeholder: 'Введите Логин',
                    ...register('user'),
                    helperText: errors.user?.message,
                    error: !!errors.user?.message,
                  }}
                />
                <PasswordInput
                  name={'password'}
                  withGenerateButton
                  wrapperSx={{
                    gridColumn: 'span 2',
                  }}
                  label={'Пароль'}
                  inputProps={{
                    placeholder: 'Введите Пароль',
                    ...register('password'),
                    error: !!errors.password?.message,
                    helperText: errors.password?.message,
                  }}
                />
                <Select
                  id={'company'}
                  list={organizationList}
                  label={'Организация'}
                  selectProps={{
                    ...register('company'),
                    inputProps: {
                      helperText: errors.company?.message,
                      error: !!errors.company?.message,
                    },
                  }}
                />
                <TextField
                  label={'Должность'}
                  inputProps={{
                    placeholder: 'Введите должность',
                    ...register('position'),
                    helperText: errors.position?.message,
                    error: !!errors.position?.message,
                  }}
                />
                <MaskInput
                  label={'Телефон'}
                  mask={'phone'}
                  type={'tel'}
                  placeholder={'Введите телефон'}
                  helperText={errors.phone?.message}
                  error={!!errors.phone?.message}
                  {...register('phone')}
                  onChange={(e) => {
                    setValue('phone', e.target.value);
                  }}
                />

                <TextField
                  label={'Адрес эл. почты'}
                  inputProps={{
                    placeholder: 'Введите email',
                    ...register('email'),
                    helperText: errors.email?.message,
                    error: !!errors.email?.message,
                  }}
                />
              </FormWrapper>
              <Box>
                <Typography
                  bold
                  variant={'title.medium'}>
                  Комментарий
                </Typography>
                <Input
                  inputProps={{
                    placeholder:
                      'Этот пользовательский аккаунт был создан для тестирования системы на одни сутки.',
                    rows: 6,
                    id: 'standard-multiline-static',
                    multiline: true,
                    ...register('comment'),
                  }}
                />
              </Box>
              {/*
              <Typography
                bold
                variant={'title.medium'}>
                Прикрепление файлов доументов
              </Typography>
              <BigFileSelect />*/}
            </InfoWrapper>
            <PermissionsWrapper>
              <RoleSelectWrapper>
                <Typography
                  bold
                  variant={'title.medium'}>
                  Дополнительные данные
                </Typography>

                <Select
                  id={'roles'}
                  list={userGroups.items.map((el) => ({
                    label: el.info,
                    id: el.id,
                  }))}
                  label={'Роль'}
                  selectProps={{
                    ...register('roles'),
                    inputProps: {
                      error: !!errors.company?.message,
                      helperText: errors.company?.message,
                    },

                    onChange: (event) => {
                      const value = event.target.value;
                      setValue('roles', value as any);
                      const selectedRoles = userGroups.items.find(
                        (userGroup) => userGroup.id === value
                      );
                      const rolesList: any = [];
                      rolesList.push(selectedRoles?.roles);
                      setActiveGroups(Array.from(new Set(rolesList.flat())));
                      return event;
                    },
                  }}
                />
              </RoleSelectWrapper>

              <PermissionsFormWrapper>
                <Typography
                  bold
                  variant={'title.medium'}>
                  Настройка разрешений
                </Typography>
                <Accordion
                  checkedList={activeGroups}
                  data={roles.items}
                  disabled
                  title={'Все'}
                />
              </PermissionsFormWrapper>
            </PermissionsWrapper>
          </Content>
        </Inner>
        <ChangeAvatar
          setOpen={setShowAvatarModal}
          open={showAvatarModal}
        />
        <button
          style={{ display: 'none' }}
          type={'submit'}
          id={'create-user-action'}
        />
      </Wrapper>
    </FormProvider>
  );
};

const Wrapper = styled.form`
  width: 100%;
  padding: 16px 16px 0 16px;
  backdrop-filter: blur(9px);
`;

const Inner = styled(Box)`
  height: fit-content;
  width: 100%;
  display: flex;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(6px);
  border-radius: 24px;
  flex-direction: column;
  box-shadow:
    0 6px 6px 0 rgba(0, 0, 0, 0.05),
    0 -1px 4px 0 rgba(0, 0, 0, 0.06),
    0 0 6px 0 rgba(0, 0, 0, 0.03);
  margin-bottom: 16px;
`;

const AvatarWrapper = styled(Box)`
  padding: 8px 24px;
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: start;
  border-bottom: 1px solid ${(p) => p.theme.palette.Accent.Primary};
  width: 100%;
`;

const Content = styled(Box)`
  display: flex;
  height: 100%;
`;

const InfoWrapper = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding: 16px;
  gap: 16px;
`;

const PermissionsWrapper = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding: 16px;
  gap: 32px;
`;

const FormWrapper = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 24px;
  column-gap: 16px;
`;

const RoleSelectWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`;

const PermissionsFormWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`;
