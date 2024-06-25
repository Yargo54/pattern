import { TableProps } from 'antd';

export interface IRefreshFunc {
  dataSource: TableProps['dataSource'];
  currentCallBackFunc: () => Promise<TableProps['dataSource']>;
}
