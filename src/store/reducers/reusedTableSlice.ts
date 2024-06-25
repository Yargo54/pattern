import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IReusedTableContainer } from '../../shared/reusedTable/model/IReusedTableContainer';
import { TableProps } from 'antd';

const initialReusedTableState: IReusedTableContainer = {
  key: 'initialTable',
  loadingTable: false,
  columns: undefined,
  dataSource: undefined,
  nonServerPagination: false,
  paginationConfig: {
    showTotal: (total, range) => `${range[0]}-${range[1]} из ${total} записей`,
    defaultCurrent: 1,
    defaultPageSize: 10,
    showSizeChanger: false,
    hideOnSinglePage: true,
  },
};

export const reusedTableSlice = createSlice({
  name: 'reusedTable',
  initialState: initialReusedTableState,
  reducers: {
    setTableKey(state, action: PayloadAction<string>) {
      state.key = action.payload;
    },
    setPaginationConfig(state, action: PayloadAction<TableProps['pagination']>) {
      state.paginationConfig = {
        ...state.paginationConfig,
        ...action,
      };
    },
    setTableFiltersConfig(state, action) {
      state.tableFiltersConfig = action.payload;
    },
    setLoadingTable(state, action: PayloadAction<boolean>) {
      state.loadingTable = action.payload;
    },
  },
});

export default reusedTableSlice.reducer;
