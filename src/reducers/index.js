import { combineReducers } from "redux";
import { reducer as formReducer} from 'redux-form';
//reducer 라는 property를 formReducer로 변경 하는 것
import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
