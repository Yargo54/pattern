import { TablePaginationConfig, TableProps } from 'antd';
import { SorterResult } from 'antd/es/table/interface';

export interface IReusedTableContainer {
  key: string;
  loadingTable?: boolean;
  tableProps?: TableProps;
  rowKey?: string;
  columns: TableProps['columns'];
  dataSource: TableProps['dataSource'];
  paginationConfig?: TableProps['pagination'];
  nonServerPagination?: boolean;
  tableFiltersConfig?: {
    pagination: TablePaginationConfig;
    filters: Record<string, (React.Key | boolean)[] | null>;
    sorts: SorterResult<unknown> | SorterResult<unknown>[];
  };
  expandableConfig?: {
    expandable?: boolean;
    expandableRender?: (record: unknown, columns: TableProps['columns']) => React.ReactNode;
    columnWidth?: number;
    expandIcon?: (props: TableProps['expandable']) => React.ReactNode;
  };
  scroll?: {
    x?: number | true | string;
    y?: number | string;
  };
}
