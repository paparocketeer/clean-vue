import { IGetFullUserResponse, IUpdateUser } from '../../../../types/users';
import { formatPhoneNumber } from '../../../../utils/stringFormatter';

export const mapFormValues = (values: IUpdateUser): IUpdateUser => {
  return {
    ...values,
    roles: [values.roles],
    phone: values?.phone ? `+${values?.phone?.replace(/\W/gi, '')}` : '',
  };
};

export const mapServerValues = (
  values: IGetFullUserResponse
): Partial<IUpdateUser> => {
  return {
    ...values,
    roles: [values.roles],
    phone: formatPhoneNumber(values?.phone),
  };
};
