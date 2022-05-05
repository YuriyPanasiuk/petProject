export interface TodoState {
  todos: Todo[];
  isLoading: boolean;
  error: string | null;
  user: any;
}

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
