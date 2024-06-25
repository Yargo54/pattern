import { IReusedTableContainer } from './model/IReusedTableContainer';
import ReusedTableContainer from './ui/reusedTableContainer';

const ReusedTable: React.FC<IReusedTableContainer> = (props) => {
  return <ReusedTableContainer {...props} />;
};

export default ReusedTable;
