import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions';

class PostsShow extends Component {
  componentDidMount(){
    if (!this.props.post){//가져와서 사용하지 않음
      const { id } = this.props.match.params;// react router의 param값을 가져오는 것
      this.props.fetchPost(id);
    }
  }

  onDeleteClick() {
    const { id } = this.props.match.params;

    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { post } = this.props;

    if (!post){
      return <div>Loading...</div>;
    } //axios 에서 fetch를 해오지 않은상태에서 render가 일어나서 error 발생
    //그리고 axios가 가져온 후 redux로 가져온 후에 data가 들어가 므로 조금의 delay가 생긴다

    return (
      <div>
        <Link to="/">Back To Index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={ this.onDeleteClick.bind(this) }
        >
          Delete Posts
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

//2번째 argument는 무조건 지금 현재 PostsShow와 같은 것들의 컴포넌트로 인식한다
function mapStateToProps({ posts }, ownProps) { //posts = state.posts
  //props obj heading to all compoenent -> 컴포넌트보다 우선적으로 먼저 가지는 props들이다
  return { post: posts[ownProps.match.params.id] };
}//이미 존재하는것에서 값을 가지고 사용 많약 없을 경우 fetchpost에서 가져온 값을 사용

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
