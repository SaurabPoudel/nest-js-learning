import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/users/utils/types';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { username: 'saurab', email: 'poudelsaurab@gmail.com' },
    { username: 'srishti', email: 'srishti@gmail.com' },
  ];
  fetchUser() {
    return this.fakeUsers;
  }

  createUser(userDetails: CreateUserType) {
    this.fakeUsers.push(userDetails);
    return { message: 'User created successfully' };
  }
}
