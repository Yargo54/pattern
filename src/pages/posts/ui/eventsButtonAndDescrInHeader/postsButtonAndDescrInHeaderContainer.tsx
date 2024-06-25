import { Flex } from 'antd';
import { FC } from 'react';
import PostsHeaderDescr from './postsHeaderDescr';
import PostsHeaderButton from './postsHeaderButton';

const PostsButtonAndDescrInHeaderContainer: FC = () => {
  return (
    <Flex gap='middle' vertical>
      <PostsHeaderDescr />
      <PostsHeaderButton />
    </Flex>
  );
};

export default PostsButtonAndDescrInHeaderContainer;
