import { UUID } from 'node:crypto';
import { UserName } from '../value-objects/username.value-object';
import { Email } from '../value-objects/email.value-object';

// All properties that a User has
export interface UserProps {
  userID: UUID;
  userName: UserName;
  email: Email;
  updatedAt: Date;
}

export interface CreateUserProps {
  userName: UserName;
  email: Email;
  updatedAt: Date;
}

export enum UserRoles {
  admin = 'admin',
  general = 'general',
}
