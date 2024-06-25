import { FC } from 'react';
import { IConfigElem } from '../../../../shared/lib/createNodeElements/model/IConfigElem';
import createNodeElements from '../../../../shared/lib/createNodeElements/createNodeElements';
import { Flex } from 'antd';

const AdditionalElementsContainer: FC = () => {
  const additionalElementsConfig: IConfigElem[] = [{ type: 'datePicker' }, { type: 'select' }];

  return (
    <Flex gap='middle' justify='flex-start'>
      {additionalElementsConfig.map((element) => createNodeElements(element))}
    </Flex>
  );
};

export default AdditionalElementsContainer;
