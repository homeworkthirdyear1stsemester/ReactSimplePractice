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
        </div>
      );
  }// input의 모든 event를 ...filed.input으로 가지도록 한다

  render() {
    return (
      <form>
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
      </form>
    );
  }
}

function validate(values) {
  // console.log(values) -> { title: 'abcd', categories: 'afdasf', content: 'abdf' }
  const errors = {};

  if (!values.title) {
    errors.title = "Enter a title!";
  }
  if (!values.categories) {
    errors.categories = "Enter some categories";
  }
  if (!values.content) {
    errors.content = "Enter some content please";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);
//redux form 으로 지정 한다
//form의 이름을 지정 -> PostsNewForm은 하나의 key로 지정
