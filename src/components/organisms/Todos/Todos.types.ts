import { HTMLAttributes } from 'react';
import { Todo } from 'src/types/todo';

export interface TodosProps extends HTMLAttributes<HTMLElement> {
  todos: Todo[] | null;
}
