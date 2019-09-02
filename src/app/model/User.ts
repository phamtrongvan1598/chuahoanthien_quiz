import {Note} from './Note';

export interface User {
  id: number;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  enabled: boolean;
  dob: Date;
  phoneNumber: string;
  address: string;
  roles: string;
  avatarFileName: string;
  notes: Note[];
}
