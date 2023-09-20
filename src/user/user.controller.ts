import { User } from './user';
import { UserService } from './user.service';

export class UserController {
    constructor(private userService: UserService) {}

    add(firstName: string, lastName: string): User {
        if (typeof firstName != 'string' && typeof lastName != 'string') {
            throw new Error('Not a string');
        }
        return this.userService.add(firstName, lastName);
    }

    getById(id: number): User | null {
        if (typeof id != 'number') {
            throw new Error('Not a number');
        }
        return this.userService.getById(id);
    }
}
