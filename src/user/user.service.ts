import { User } from './user';

export interface UserService {
    add(firstName: string, lastName: string): User;
    getById(id: number): User | null;
}
