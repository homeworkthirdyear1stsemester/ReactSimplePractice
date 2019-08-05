import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderTitleField(filed) { //filed인자를 받아서 input 테스의 정보를 가져간다
      return (
        <div className="form-group">
          <label>Title</label>
          <input
            className = "form-control"
            type="text"
            {...filed.input}
          />
        </div>
      );
  }// input의 모든 event를 ...filed.input으로 가지도록 한다

  render() {
    return (
      <form>
        <Field
          name="title"
          component={ this.renderTitleField }
        />
      </form>
    );
  }
}

export default reduxForm({
  form: 'PostsNewForm'
})(PostsNew);
//redux form 으로 지정 한다
//form의 이름을 지정 -> PostsNewForm은 하나의 key로 지정
