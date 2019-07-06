import React from 'react';
import { Field, reduxForm } from 'redux-form';

import '../../../sass/components/form.scss'

class PostForm extends React.Component {
  renderError = ({error, touched}) => {
    if (touched && error) {
      return (
        <div className="message">
          <div className="message__error">{error}</div>
        </div>
      )
    }
  }

  renderInput = ({input, label, meta}) => {
    const className = `${meta.error && meta.touched ? 'input--error' : ''}`

    return (
      <div>
        <label>{label}</label>
        <input className={className} { ...input } autoComplete="off"/>
        {this.renderError(meta)}
      </div>
    )
  }

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="title" label="Enter Title" component={this.renderInput}/>
        <Field name="content" label="Enter Content" component={this.renderInput}/>
        <button className="btn btn--submit">Submit</button>
      </form>
    )
  }
}

const validate = (formValues) => {
  const errors = {};
  if(!formValues.title) {
    errors.title = 'You must enter a title'
  }

  if(!formValues.content) {
    errors.content = 'You must enter content'
  }

  return errors
}


export default reduxForm({
  form: 'postFrom',
  validate
})(PostForm)
