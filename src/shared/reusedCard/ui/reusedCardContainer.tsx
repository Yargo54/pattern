import { Card, Flex } from 'antd';
import { IReusedCardContainer } from '../model/IReusedCardContainer';
import Title from 'antd/es/typography/Title';

const ReusedCardContainer: React.FC<IReusedCardContainer> = (props) => {
  return (
    <Card>
      <Flex gap='middle' vertical>
        <Flex gap='middle' justify='space-between' align='flex-start'>
          <Title>{props.cardTitle?.cardTitleText ?? 'Контейнер карты'}</Title>
          {props.cardTitle?.cardTitleElements}
        </Flex>
        <Flex gap='middle' justify='space-between' align='flex-start'>
          {props.cardBody?.additionalElements}
          {props.cardBody?.cardActiveButtons}
        </Flex>
        {props.cardBody?.mainChildren}
      </Flex>
    </Card>
  );
};

export default ReusedCardContainer;
