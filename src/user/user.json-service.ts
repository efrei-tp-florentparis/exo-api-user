import { User } from './user';
import { UserService } from './user.service';
var fs = require('fs');

export class UserJSONService implements UserService {
    add(firstName: string, lastName: string): User {
        throw new Error('Method not implemented.');
    }

    getById(id: number): User | null {
        throw new Error('Method not implemented.');
    }
}
