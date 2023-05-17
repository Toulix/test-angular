import { Mission } from './mission';

export interface User {
  id?: number;
  username?: string;
  photo?: string;
  missions?: Mission[];
}
