import {Note} from './Note';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  enabled: boolean;
  username: string;
  email: string;
  birthday: Date;
  address: string;
  phoneNumber: string;
  password: string;
  roles: string;
  avatarFileName: string;
  notes: Note[];
}
