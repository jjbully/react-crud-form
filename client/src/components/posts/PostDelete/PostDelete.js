import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../../Modal/Modal';
import history from '../../../utilities/history';
import { fetchPost, deletePost } from '../../../actions';

import './PostDelete.scss'

class PostDelete extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id)
  }

  renderActions() {
    const {id} = this.props.match.params

    return (
      <>
        <button className='btn btn--red btn--delete' onClick={()=>this.props.deletePost(id)}>Delete</button>
        <Link className='btn btn--gray btn--cancel' to="/">Cancel</Link>
      </>
    )
  }

  renderContent() {
    if(!this.props.post) {
      return null
    }
    return (
      <div>Delete post titled <strong>***{this.props.post.title}***</strong>?</div>
    )
  }

  render() {
    return (
      <div className='postDelete'>
        <Modal 
          title="Delete Post"
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={()=>history.push('/')}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { post: state.posts[ownProps.match.params.id]}
}

export default connect (
  mapStateToProps,
  { fetchPost, deletePost }  
)(PostDelete);