import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../../actions'

import '../../sass/components/buttons.scss'

class GoogleAuth extends React.Component {

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '726071475968-p230eqlarvap1u1nld4n6thpfiarnoe2.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get()); 
        this.auth.isSignedIn.listen(this.onAuthChange);
      }) 
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  }

  onSignInClick = () => {
    this.auth.signIn();
  }

  onSignOutClick = () => {
    this.auth.signOut();
  }

  renderAuthButton = () => {
    if(this.props.isSignedIn === null) {
      return null
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="btn btn--google btn--red">
          <i className="fab fa-google"></i>
          <span>Sign Out</span>
        </button>
      )
    } else if (!this.props.isSignedIn){
      return (
        <button onClick={this.onSignInClick} className="btn btn--google btn--red">
          <i className="fab fa-google"></i>
          <span>Sign In</span>
        </button>      
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderAuthButton()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn }
}

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);