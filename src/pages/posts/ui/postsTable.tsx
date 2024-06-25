import { FC } from 'react';
import ReusedTable from '../../../shared/reusedTable';
import { IPosts } from '../model/IPosts';
import { useAppSelector } from '../../../store/hooks/redux';
import { defaultColumns } from '../model/defaultColumns';

const PostsTable: FC<IPosts> = (props) => {
  const { loadingTable } = useAppSelector((state) => state.reusedTableReducer);
  return (
    <ReusedTable
      key='postsTable'
      columns={defaultColumns}
      dataSource={props.posts ?? []}
      scroll={{ x: 'max-content' }}
      loadingTable={loadingTable}
    />
  );
};

export default PostsTable;
