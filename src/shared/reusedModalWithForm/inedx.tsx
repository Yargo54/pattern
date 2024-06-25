import { IReusedModalWithFormContainer } from './model/IReusedModalWithFormContainer';
import ReusedModalWithFormContainer from './ui/reusedModalWithFormContainer';

const ReusedModalWithForm: React.FC<IReusedModalWithFormContainer> = (props) => {
  return <ReusedModalWithFormContainer {...props} />;
};

export default ReusedModalWithForm;
