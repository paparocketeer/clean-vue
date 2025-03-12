import { MRT_TableOptions } from 'material-react-table';

export interface ITableProps extends MRT_TableOptions<any> {
  paginationName: string;
  total: number;
  headLeft?: any;
  headRight?: any;
  localData?: boolean;
}
