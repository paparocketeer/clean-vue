import * as yup from 'yup';

import { IUpdateUser } from '../../../../types/users';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const userScheme = yup.object<IUpdateUser>({
  fullname: yup.string().required('Имя обязательно'),
  email: yup.string().email().required('Почта обязательна'),
  company: yup.string().required('Компания обязательна'),
  phone: yup
    .string()
    .matches(phoneRegExp, 'Не верная валидация')
    .required('Телефон обязателен'),
  comment: yup.string(),
  position: yup.string().required('Должность обязательна'),
});
