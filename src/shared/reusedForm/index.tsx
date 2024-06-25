import { IReusedFormContainer } from './model/IReusedFormContainer';
import ReusedFormContainer from './ui/reusedFormContainer';

const ReusedForm: React.FC<IReusedFormContainer> = (props) => {
  return <ReusedFormContainer {...props} />;
};

export default ReusedForm;
