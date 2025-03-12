export interface IGetUsersResponse {
  total: number;
  items: IGetUserItem[];
}
export interface IGetUsersParams {
  page?: number;
  size?: number;
}
export type TUserItem = IGetUsersResponse['items'][number];
export interface IGetUserItem {
  id: string;
  user: string;
  fullname: string;
  email: string;
  company: string;
  phone: string;
  comment: string;
  position: string;
  permanent_blocked: boolean;
}

export interface IUpdateUser {
  id: string;
  password: string;
  user: string;
  fullname: string;
  email: string;
  company: string;
  phone: string;
  comment: string;
  roles: any;
  position: string;
  permanent_blocked: boolean;
}

export interface IGetFullUserResponse {
  id: string;
  created_at: string;
  user: string;
  attributes: string[];
  fullname: string;
  email: string;
  company: string;
  phone: string;
  position: string;
  meta: {
    department: string;
  };
  comment: string;
  roles: string[];
  permanent_blocked: boolean;
  psw_need_to_change: boolean;
}
