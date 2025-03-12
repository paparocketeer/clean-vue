import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Accordion,
  Avatar,
  MaskInput,
  Select,
  TextField,
  Typography,
} from 'src/shared/ui';
import { formatPhoneNumber } from 'src/shared/utils/stringFormatter';

import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { useNotification } from '../../../../hooks/useNotification';
import { usePath } from '../../../../hooks/usePath';
import { ChangeAvatar } from '../../../../modals/changeAvatar';
import { organizationList } from '../../../../selectList';
import { selectUserById } from '../../../../store/selectors/users';
import { selectRoles } from '../../../../store/selectors/users/roles';
import { selectUsersGroups } from '../../../../store/selectors/users/usersGroups';
import { createUser, editUser } from '../../../../store/slices/users';
import { fetchUsersGroupsList } from '../../../../store/slices/users/groups';
import { fetchRolesList } from '../../../../store/slices/users/roles';
import { getPasswordRules } from '../../../../store/slices/utils/validation';
import { IUpdateUser } from '../../../../types/users';
import { mapFormValues, mapServerValues } from './mapValues';

interface ICreateUserForm extends IUpdateUser {
  accept_password: string;
}

interface IContainerProps {
  isEditEnable: boolean;
}

export const Container = ({ isEditEnable }: IContainerProps) => {
  const [activeGroups, setActiveGroups] = React.useState([]);

  const dispatch = useAppDispatch();
  const { showNoty } = useNotification();
  const navigate = useNavigate();
  const user = useAppSelector((state) => selectUserById(state));
  const path = usePath();
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<ICreateUserForm>();

  const phone = watch('phone');

  const onSubmit: SubmitHandler<IUpdateUser> = async (data) => {
    if (!id) {
      showNoty({
        variant: 'error',
        message: 'Ошибка обновления пользователя',
      });
      return;
    }
    try {
      await dispatch(editUser({ id, data: mapFormValues(data) })).unwrap();

      showNoty({
        variant: 'success',
        message: 'Пользователь обновлён',
      });
      navigate(path.protectedPaths.iisuno.administration.users());
    } catch (e) {
      showNoty({
        variant: 'error',
        message: 'Ошибка обновления пользователя',
      });
    }
  };

  const roles = useAppSelector(selectRoles);
  const userGroups = useAppSelector(selectUsersGroups);

  const [showAvatarModal, setShowAvatarModal] = useState(false);

  useEffect(() => {
    const data = mapServerValues(user);

    setValue('user', data.user);
    setValue('email', data.email);
    setValue('phone', data.phone);
    setValue('fullname', data.fullname);
    setValue('position', data.position);
    setValue('company', data.company);
    setValue('comment', data.comment);
  }, [user.id]);

  useEffect(() => {
    dispatch(getPasswordRules());
    dispatch(fetchUsersGroupsList());
    dispatch(fetchRolesList());
  }, []);

  return (
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
                  disabled: !isEditEnable,
                  placeholder: 'Введите ФИО',
                  ...register('fullname'),
                  error: !!errors.fullname?.message,
                  helperText: errors.fullname?.message,
                }}
              />
              <TextField
                label={'Логин'}
                inputProps={{
                  disabled: !isEditEnable,

                  placeholder: 'Введите Логин',
                  ...register('user'),
                  error: !!errors.user?.message,
                  helperText: errors.user?.message,
                }}
              />
              <Select
                id={'company'}
                list={organizationList}
                label={'Организация'}
                selectProps={{
                  disabled: !isEditEnable,

                  ...register('company'),
                  inputProps: {
                    error: !!errors.company?.message,
                    helperText: errors.company?.message,
                  },
                }}
              />
              <TextField
                label={'Должность'}
                inputProps={{
                  disabled: !isEditEnable,

                  placeholder: 'Введите должность',
                  ...register('position'),
                  error: !!errors.position?.message,
                  helperText: errors.position?.message,
                }}
              />

              <MaskInput
                label={'Телефон'}
                mask={'phone'}
                type={'tel'}
                placeholder={'Введите телефон'}
                helperText={errors.phone?.message}
                disabled={!isEditEnable}
                error={!!errors.phone?.message}
                value={phone}
                onChange={(e) => {
                  setValue('phone', e.target.value);
                }}
              />
              <TextField
                label={'Адрес эл. почты'}
                inputProps={{
                  disabled: !isEditEnable,

                  placeholder: 'Введите email',
                  ...register('email'),

                  error: !!errors.email?.message,
                  helperText: errors.email?.message,
                }}
              />
            </FormWrapper>
            <Box>
              <Typography
                bold
                variant={'title.medium'}>
                Комментарий
              </Typography>
              <TextField
                sx={{
                  '.MuiInputBase-root': {
                    borderRadius: '16px',
                  },
                }}
                inputProps={{
                  placeholder:
                    'Этот пользовательский аккаунт был создан для тестирования системы на одни сутки.',
                  rows: 6,
                  id: 'standard-multiline-static',
                  multiline: true,
                  disabled: !isEditEnable,
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
                  disabled: !isEditEnable,
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
        id={'update-user-action'}
      />
    </Wrapper>
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
