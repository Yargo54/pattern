import { FC } from 'react';
import CardButtonsContainer from './ui/cardButtonsContainer';
import { ICardButtons } from './model/ICardButtons';

const CardButtons: FC<ICardButtons> = (props) => {
  return <CardButtonsContainer {...props} />;
};

export default CardButtons;
