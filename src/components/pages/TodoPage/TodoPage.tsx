import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/config/store';
import { fetchTodos } from 'src/store/todo/todo.actions';
import { todoSelector } from 'src/store/todo/todo.selector';
import { Loader } from 'src/components/atoms';
import { Todos } from 'src/components/organisms';
import { StyledContainer } from './TodoPage.styles';

const state = JSON.parse(localStorage.getItem('applicationState') as string);

const TodoPage = () => {
  const dispatch = useAppDispatch();
  const { isLoading, todos } = useSelector(todoSelector);

  useEffect(() => {
    if (!state || !state.todo) {
      dispatch(fetchTodos());
    }
  }, [dispatch]);

  return <StyledContainer>{isLoading ? <Loader /> : <Todos todos={todos} />}</StyledContainer>;
};

export default TodoPage;
