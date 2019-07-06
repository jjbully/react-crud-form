import React from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../../../actions';



class PostShow extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id)
  }

  render() {
    if(!this.props.post){
      return (
        <div>Loading...</div>
      )
    }

    const {title, content} = this.props.post
    return (
      <div className="postShow">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {post: state.posts[ownProps.match.params.id]}
}

export default connect(
  mapStateToProps,
  { fetchPost }
)(PostShow);