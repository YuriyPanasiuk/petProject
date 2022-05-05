export enum AppRoutes {
  LOGIN = '/login',
  CHAT = '/chat',
  TODO_LIST = '/todo-list'
}

export const pages = [
  { title: 'Login', href: AppRoutes.LOGIN },
  { title: 'Chat', href: AppRoutes.CHAT },
  { title: 'Todo List', href: AppRoutes.TODO_LIST }
];
