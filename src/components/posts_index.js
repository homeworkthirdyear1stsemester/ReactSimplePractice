import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'; //새로운 홈페이지로 연결할 a 태그 같은 것
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentDidMount(){
      this.props.fetchPosts();
  } //Dom을 사용하는 외부 라이브러리를 쓸때 사용된다 -> axios 로 Dom 속성을 읽을 때
  //주로 사용된다

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`/posts/${ post.id }`}>
            {post.title}
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a Posts
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
//fetchPosts : fetchPosts 와 동일
