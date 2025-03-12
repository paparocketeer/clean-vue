export interface IGetRolesResponse {
  total: number;
  items: {
    id: string;
    name: string;
    tag: string;
    info: string;
  }[];
}
