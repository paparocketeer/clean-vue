export interface IGetUsersGroupsResponse {
  total: number;
  items: {
    id: string;
    tag: string;
    info: string;
    organization_tag: string;
    roles: string[];
  }[];
}
