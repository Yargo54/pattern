import { IReusedCardContainer } from './model/IReusedCardContainer';
import ReusedCardContainer from './ui/reusedCardContainer';

const ReusedCard: React.FC<IReusedCardContainer> = (props) => {
  return <ReusedCardContainer {...props} />;
};

export default ReusedCard;
