import Layout from '../layouts/Main';
import { connect } from 'react-redux';
import { getGuestLikedPosts, getLoggedUser } from '../store';
import FavPost from '../components/FavPost';

class Favorites extends React.Component {
  componentDidMount() {
    this.props.getLoggedUser();
    this.props.getGuestLikedPosts();
  }

  render() {
    if (this.props.likedPosts.length === 0) {
      return (
        <Layout>
          <div>No Liked Posts</div>{' '}
        </Layout>
      );
    }
    return (
      <Layout>
        <div>
          {this.props.likedPosts.map(post => {
            return <FavPost post={post} key={post._id} />;
          })}
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return { likedPosts: state.guestLikedPosts };
};

export default connect(
  mapStateToProps,
  { getGuestLikedPosts, getLoggedUser }
)(Favorites);
