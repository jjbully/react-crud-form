import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../../actions'
import PostForm from '../PostForm/PostForm'

import '../../../sass/components/form.scss'

class PostCreate extends React.Component {

  onSubmit = formValues => {
    this.props.createPost(formValues);
  }

  render() {
    return (
      <div>
        <h2>Create a Post</h2>
        <PostForm onSubmit={this.onSubmit} />
      </div>
    )
  }
}


export default connect(
  null,
  { createPost }
)(PostCreate);