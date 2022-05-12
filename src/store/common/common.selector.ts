import { RootState } from 'src/config/store';
import { UserType } from 'src/types/common';

export const getUser = (state: RootState): UserType | null => state.common.user;
