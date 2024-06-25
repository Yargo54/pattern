import { TableProps } from 'antd';

export const defaultPagination = {
  showTotal: (total: number, range: [number, number]) =>
    `${range[0]}-${range[1]} из ${total} записей`,
  showSizeChanger: false,
  hideOnSinglePage: true,
  defaultCurrent: 1,
  defaultPageSize: 10,
};

export interface IConfigTable {
  className?: string;
  style?: React.CSSProperties;
  bordered?: boolean;
  dataSource: { key: string; [key: string]: unknown }[];
  columns: TableProps['columns'];
  pagination?: TableProps['pagination'];
}
