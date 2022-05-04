export enum AppRoutes {
  HOME = '/',
  CHAT = '/chat',
  TODO_LIST = '/todo-list'
}

export const pages = [
  { title: 'Home', href: AppRoutes.HOME },
  { title: 'Chat', href: AppRoutes.CHAT },
  { title: 'Todo List', href: AppRoutes.TODO_LIST }
];
