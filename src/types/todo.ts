export interface TodoState {
  todos: Todo[] | null;
  isLoading: boolean;
  error: string | null;
}

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
