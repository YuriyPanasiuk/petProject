import { HTMLAttributes } from 'react';
import { UserType } from 'src/types/common';

export interface UserProps extends HTMLAttributes<HTMLElement> {
  handleIdChange?: (newId: string | null) => void;
  userData: UserType;
}
