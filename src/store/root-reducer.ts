import todoReducer from './todo/todo.slice';
import commonReducer from './common/common.slice';

export const reducer = {
  todo: todoReducer,
  common: commonReducer
};
