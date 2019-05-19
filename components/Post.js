/**
 * Post component
 * will hold specific post releted data
 */

import Link from 'next/link';
import { connect } from 'react-redux';
import { toggleLikePost, updatePostLikes } from '../store';
import styles from './Post-Styles';

class Post extends React.Component {
  render() {
    const { post, loggedUser } = this.props;

    return (
      <article className="post">
        <header>
          <div className="post-user">
            <div className="post-user-avatar">
              <img src={post.user.avatarUrl} alt="image" />
            </div>
            <div className="post-user-nickname">
              <span>{post.user.username}</span>
            </div>
          </div>
        </header>
        <div className="post-image">
          <div className="post-image-bg">
            <img className="responsive" alt="no" src={post.imageUrl} />
          </div>
          <div className="post-meta">
            <div className="meta-info">
              <span>{post.title}</span>
              <span className="cur">AED {post.price}</span>
            </div>
            <div className="favourite">
              <span
                onClick={() => {
                  this.updateUserLikes(loggedUser, post._id);
                }}
              >
                <i
                  className={`${
                    this.isGuestLiked(post._id, loggedUser) ? 'fas' : 'far'
                  } fa-heart`}
                />
              </span>
            </div>
          </div>
        </div>
        <div className="post-caption">
          <span className="post-likes">
            <i className="fas fa-heart" />
            {post.numOfLikes} likes
          </span>
          <p className="post-description">{post.description}</p>
          <Link href="/">
            <span className="post-comments">
              View {post.numOfComments} comments
            </span>
          </Link>
        </div>
        <style jsx>{styles}</style>
      </article>
    );
  }

  // when user clicks 'heart' symble on the post
  // we will update 'logged user liked posts' and 'number of likes for this post'
  async updateUserLikes(loggedUser, postId) {
    const index = loggedUser.likes.indexOf(postId);
    let likes = 0;
    if (index === -1) {
      alert('you liked it');
      loggedUser.likes.push(postId);
      likes = 1;
    } else {
      alert('you disliked it');
      loggedUser.likes.splice(index, 1);
      likes = -1;
    }
    await this.props.toggleLikePost(loggedUser._id, loggedUser);
    this.updatePostLikes(postId, likes);
  }

  updatePostLikes(postId, likes) {
    const post = this.props.posts.find(post => post._id == postId);
    post.numOfLikes += likes;
    this.props.updatePostLikes(postId, post);
  }

  isGuestLiked(postId, loggedUser) {
    return loggedUser && loggedUser.likes.indexOf(postId) >= 0;
  }
}

const mapStateToProps = state => {
  return { loggedUser: state.loggedUser, posts: state.posts };
};

export default connect(
  mapStateToProps,
  { toggleLikePost, updatePostLikes }
)(Post);
