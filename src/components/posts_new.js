import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderField(field) { //filed 밖에 Field tag의 component를 넣어 준다
      return (
        <div className="form-group">
          <label>{field.label}</label>
          <input
            className = "form-control"
            type="text"
            {...field.input}
          />
          { field.meta.touched ? field.meta.error : '' }
        </div>
      );
  }// input의 모든 event를 ...filed.input으로 가지도록 한다

  onSubmit(values) {
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
        <Field
          label="Title For Post"
          name="title"
          component={ this.renderField }
        />
        <Field
          label="Categories"
          name="categories"
          component={ this.renderField }
        />
        <Field
          label="Post Content"
          name="content"
          component={ this.renderField }
        />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
  //render의 name이랑 validate가 reduxForm에 의해 연결 되어있으므로 meta로 validate의
  //리터 객체의 같은 name의 값과 접근 가능
}

function validate(values) {
  // console.log(values) -> { title: 'abcd', categories: 'afdasf', content: 'abdf' }
  const errors = {};

  if (!values.title) {
    errors.title = "Enter a title!";
  }
  if (!values.categories) {
    errors.categories = "Enter some categories!";
  }
  if (!values.content) {
    errors.content = "Enter some content please!";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);
//redux form 으로 지정 한다
//form의 이름을 지정 -> PostsNewForm은 하나의 key로 지정
