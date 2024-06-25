import { IPosts } from './model/IPosts';
import PostsContainer from './ui/postsContainer';

const Posts: React.FC<IPosts> = (props) => {
  return <PostsContainer {...props} />;
};

export default Posts;
