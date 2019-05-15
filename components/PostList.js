import Post from './Post';

class PostList extends React.Component {
  state = {
    posts: [
      {
        id: 1,
        user: 'samith673',
        profileImage:
          'http://www.gravatar.com/avatar/77a87ca05717403d2813164fd079c4ba?s=200&r=pg',
        image:
          'https://img3.goodfon.com/original/800x480/6/d5/5120x2880-mac-os-os-x-10-10-9.jpg',
        likes: 22,
        description: `The design should be mobile-first, and on the desktop version the bottom
        menu should instead be on top; with the labels`,
        comments: 16
      },
      {
        id: 2,
        user: 'amila673',
        profileImage:
          'http://www.gravatar.com/avatar/77a87ca05717403d2813164fd079c4ba?s=200&r=pg',
        image:
          'https://img3.goodfon.com/original/800x480/6/d5/5120x2880-mac-os-os-x-10-10-9.jpg',
        likes: 22,
        description: `The design should be mobile-first, and on the desktop version the bottom
        menu should instead be on top; with the labels`,
        comments: 16
      },
      {
        id: 3,
        user: 'amila673',
        profileImage:
          'http://www.gravatar.com/avatar/77a87ca05717403d2813164fd079c4ba?s=200&r=pg',
        image:
          'https://img3.goodfon.com/original/800x480/6/d5/5120x2880-mac-os-os-x-10-10-9.jpg',
        likes: 22,
        description: `The design should be mobile-first, and on the desktop version the bottom
        menu should instead be on top; with the labels`,
        comments: 16
      }
    ]
  };

  render() {
    return (
      <div>
        {this.state.posts.map(post => {
          return <Post data={post} key={post.id} />;
        })}
      </div>
    );
  }
}

export default PostList;