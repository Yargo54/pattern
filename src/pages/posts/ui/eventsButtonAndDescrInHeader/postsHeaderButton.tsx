import { QuestionCircleOutlined } from '@ant-design/icons';
import { Button, Flex, Space } from 'antd';
import { FC } from 'react';

const PostsHeaderButton: FC = () => {
  return (
    <Flex gap='middle' justify='flex-end'>
      <Button type='default' onClick={() => alert('Нажимай')}>
        <Space style={{ alignItems: 'center' }}>
          <span>Памятка</span>
          <QuestionCircleOutlined />
        </Space>
      </Button>

      <Button
        type='primary'
        ghost
        onClick={() => alert('Не нажимай')}
        style={{ backgroundColor: '#E0FFFF' }}>
        Ввод данных
      </Button>
    </Flex>
  );
};

export default PostsHeaderButton;
