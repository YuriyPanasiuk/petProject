import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/config/store';
import { fetchTodos } from 'src/store/todo/todo.slice';
import { todoSelector } from 'src/store/todo/todo.selector';
import { Loader } from 'src/components/atoms';

const TodoPage = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useSelector(todoSelector);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return <div>{isLoading ? <Loader /> : <h1>Todo Page</h1>}</div>;
};

export default TodoPage;
