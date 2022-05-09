export type UserType = {
  name: string;
  id: string;
  imageUrl?: string;
  loggedInWith?: string;
};

export interface CommonState {
  user: UserType | null;
}
