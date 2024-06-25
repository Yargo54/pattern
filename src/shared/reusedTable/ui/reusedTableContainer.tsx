import { Table } from 'antd';
import { IReusedTableContainer } from '../model/IReusedTableContainer';
import { reusedTableSlice } from '../../../store/reducers/reusedTableSlice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks/redux';
import { CaretDownOutlined, CaretRightOutlined } from '@ant-design/icons';

const ReusedTableContainer: React.FC<IReusedTableContainer> = (props) => {
  const { setPaginationConfig, setTableFiltersConfig } = reusedTableSlice.actions;
  const { tableFiltersConfig } = useAppSelector((state) => state.reusedTableReducer);
  const dispatch = useAppDispatch();

  return (
    <Table
      scroll={props.scroll}
      key={props.key}
      rowKey={props.rowKey ?? 'id'}
      sticky={props.tableProps?.sticky ?? true}
      bordered={props.tableProps?.bordered ?? true}
      loading={props.loadingTable}
      columns={props.columns}
      dataSource={props.dataSource}
      pagination={props.paginationConfig}
      onChange={(pagination, filters, sorter) => {
        if (props.nonServerPagination) {
          dispatch(
            setPaginationConfig({
              current: pagination.current,
            }),
          );
        } else {
          dispatch(
            setTableFiltersConfig({
              pagination: pagination,
              filters: { ...tableFiltersConfig?.filters, ...filters },
              sorts: sorter,
            }),
          );
        }
      }}
      expandable={
        (props.expandableConfig?.expandable && {
          expandedRowRender: (record) => {
            if (props.expandableConfig?.expandableRender) {
              return props.expandableConfig?.expandableRender(record, props.columns);
            }
          },
          columnWidth: props.expandableConfig?.columnWidth ?? 30,
          expandIcon: ({ expanded, onExpand, record }) =>
            expanded ? (
              <CaretDownOutlined onClick={(e) => onExpand(record, e)} />
            ) : (
              <CaretRightOutlined onClick={(e) => onExpand(record, e)} />
            ),
        }) ||
        undefined
      }
    />
  );
};

export default ReusedTableContainer;
