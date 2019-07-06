import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts, editPost } from '../../../actions';
import PostForm from '../PostForm/PostForm'

class PostEdit extends React.Component {
  componentDidMount() {
    this.props.fetchPosts()
  }

  onSubmit = (formValues) => {
    this.props.editPost(this.props.match.params.id, formValues)
  }

  render() {
    if(!this.props.post) {
      return (
        <div>Loading</div>
      )
    }
    return (
      <div>
        <h2>Edit a Stream</h2>
        <PostForm 
          initialValues = {_.pick(this.props.post, 'title', 'content')}
          onSubmit={this.onSubmit} 
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { post: state.posts[ownProps.match.params.id] }
}

export default connect(
  mapStateToProps,
  { fetchPosts, editPost }  
)(PostEdit);