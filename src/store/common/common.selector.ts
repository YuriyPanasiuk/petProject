import { RootState } from 'src/config/store';

export const getUser = (state: RootState) => state.common.user;
