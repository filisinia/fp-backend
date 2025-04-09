import { Injectable } from '@nestjs/common';
import { User } from '@/users/interfaces/user.interface';

@Injectable()
export class UsersService {
  private users: User[] = [];

  create(user: Omit<User, 'id'>) {
    const id = crypto.randomUUID();
    this.users.push({ id, ...user });

    return { id, ...user };
  }

  getUsers(): User[] {
    return this.users;
  }

  update(id: string, user: Partial<User>) {
    const index = this.users.findIndex(({ id: userId }) => userId === id);

    if (index === -1) throw new Error('User not found');

    this.users[index] = { ...this.users[index], ...user };

    return this.users;
  }

  delete(id: string) {
    this.users = this.users.filter(({ id: userId }) => userId !== id);
  }
}
