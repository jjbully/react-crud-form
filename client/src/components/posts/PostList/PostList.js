import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../../../actions'

import './PostList.scss';

class PostList extends React.Component {
  componentDidMount() {    
    this.props.fetchPosts()
  }
  
  renderAdmin = post => {
    if(post.userId === this.props.currentUserId) {
      return (
        <div className="btn-wrapper">
          <Link className='btn btn__edit btn--blue' to={`/posts/edit/${post.id}`}>
            Edit
          </Link>
          <Link className='btn btn__delete btn--red' to={`/posts/delete/${post.id}`}>
            Delete 
          </Link>
        </div>
      ) 
    }
  }

  renderCreateBtn = () => {
    if (this.props.isSignedIn) {
      return (
        <Link className='btn btn__create-post btn--blue' to="/posts/new">
          Create Post
        </Link>
      )
    }
  }

  renderList = () => {
    return this.props.posts.map(post => {
      return (
        <div key={post.id} className="postList__list">
          <i className="fas fa-bookmark"></i>
          <Link to={`/posts/${post.id}`}> {post.title}</Link>
          {this.renderAdmin(post)}
        </div>
      )
    })
  }

  render() {
    return (
      <div className="postList">
        <h2>Posts</h2>
        {this.renderList()}
        {this.renderCreateBtn()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: Object.values(state.posts),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  }
}

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostList);