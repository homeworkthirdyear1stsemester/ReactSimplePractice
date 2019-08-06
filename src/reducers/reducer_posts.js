import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function(state = {}, action) {//한번 실행 한 후 state에 저장함
  switch (action.type){
    case DELETE_POST:
      return _.omit(state, action.payload);
      //aciton.payload가 배열 일 경우 각 배열의 값을 key로 갇는 모든 값을 state에서 제거한다
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
