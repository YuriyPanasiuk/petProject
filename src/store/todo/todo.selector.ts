import { RootState } from 'src/config/store';
import { TodoState } from 'src/types/todo';

export const todoSelector = (state: RootState): TodoState => state.todo;
