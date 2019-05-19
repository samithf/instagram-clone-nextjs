/**
 * Index page and the default route of the application
 */

import React from 'react';
import { connect } from 'react-redux';
import Layout from '../layouts/Main';
import PostList from '../components/PostList';
import axios from 'axios';
import { getLoggedUser, getAllPosts } from '../store';

class Index extends React.Component {
  // first will fetch 'logged user' and 'all posts' to our app and place then in the store
  componentDidMount() {
    this.props.getLoggedUser();
    this.props.getAllPosts();
  }

  render() {
    return (
      <Layout>
        <PostList posts={this.props.posts} />
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  { getLoggedUser, getAllPosts }
)(Index);
