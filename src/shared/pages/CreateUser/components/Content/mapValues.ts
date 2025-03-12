import { IUpdateUser } from '../../../../types/users';

export const mapFormValues = (values: IUpdateUser): IUpdateUser => {
  return {
    ...values,
    roles: [values.roles],
    // phone: values?.phone?.replace(/\W/gi, '') || '',
  };
};
