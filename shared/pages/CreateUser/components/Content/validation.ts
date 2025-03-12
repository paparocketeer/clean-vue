import * as yup from 'yup';

import { IUpdateUser } from '../../../../types/users';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const userScheme = yup.object<IUpdateUser>({
  password: yup.string().password().required('Пароль обязательный'),
  user: yup.string().required('Логин обязательный'),
  fullname: yup.string().required('Имя обязательно'),
  email: yup.string().email().required('Почта обязательна'),
  company: yup.string().required('Компания обязательна'),
  phone: yup.string().required('Телефон обязателен'),
  comment: yup.string(),
  position: yup.string().required('Должность обязательна'),
});
