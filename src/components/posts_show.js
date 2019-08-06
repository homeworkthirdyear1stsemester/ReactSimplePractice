import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {
  componentDidMount(){
    const { id } = this.props.match.params;// react router의 param값을 가져오는 것
    this.props.fetchPost(id);
  }

  render() {
    const { post } = this.props;

    if (!post){
      return <div>Loading...</div>;
    } //axios 에서 fetch를 해오지 않은상태에서 render가 일어나서 error 발생
    //그리고 axios가 가져온 후 redux로 가져온 후에 data가 들어가 므로 조금의 delay가 생긴다

    return (
      <div>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) { //posts = state.posts
  //props obj heading to all compoenent -> 컴포넌트보다 우선적으로 먼저 가지는 props들이다
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);
