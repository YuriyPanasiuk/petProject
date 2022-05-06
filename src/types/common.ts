export type UserType = {
  name?: string;
  id?: string;
  imageUrl?: string;
  googleId?: string;
};

export interface CommonState {
  user: UserType | null;
}
