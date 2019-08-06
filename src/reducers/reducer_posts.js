import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST } from '../actions';

export default function(state = {}, action) {//한번 실행 한 후 state에 저장함
  switch (action.type){
    case FETCH_POST:
      // const post = action.payload.data;
      // const newState = { ...state  } //이미 존재하는 것을 가지고 있게끔한다
      // newState[post.id] = post;
      // return newState;

      return { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_POSTS:
      // console.log(action.payload.data); // [post1, post2]
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
