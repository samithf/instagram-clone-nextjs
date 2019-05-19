/**
 * wrapper of Post components
 */

import Post from './Post';

const PostList = ({ posts }) => (
  <div>
    {posts.map(post => {
      return <Post post={post} key={post._id} />;
    })}
  </div>
);

export default PostList;
