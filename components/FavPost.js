import { connect } from 'react-redux';
import { updateUser, getGuestLikedPosts } from '../store';

class FavPost extends React.Component {
  render() {
    const { post } = this.props;
    return (
      <div className="fav-box">
        <div className="image-wrapper">
          <span>{post.title}</span>
          <img className="responsive" alt="no" src={post.imageUrl} />
        </div>
        <div className="options">
          <span className="remove" onClick={() => this.removeFromFav(post._id)}>
            <i className="fa fa-trash fa-lg" aria-hidden="true" />
          </span>
        </div>

        <style jsx>{`
          .fav-box {
            border: 1px solid red;
            display: flex;
          }
          .image-wrapper {
            flex: 1 1 auto;
          }
          .options {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .responsive {
            width: 100%;
            height: auto;
          }
          .remove {
            display: block;
            cursor: pointer;
          }
        `}</style>
      </div>
    );
  }

  async removeFromFav(postId) {
    let loggedUser = this.props.loggedUser;

    const index = loggedUser.likes.indexOf(postId);
    loggedUser.likes.splice(index, 1);

    // await is needed to update database
    await this.props.updateUser(loggedUser._id, loggedUser);

    // calling this rerender favourite page
    this.props.getGuestLikedPosts();
  }
}

const mapStateToProps = state => {
  return { loggedUser: state.loggedUser };
};

export default connect(
  mapStateToProps,
  { updateUser, getGuestLikedPosts }
)(FavPost);
