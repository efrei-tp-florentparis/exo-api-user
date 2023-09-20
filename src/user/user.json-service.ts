import { User } from './user';
import { UserService } from './user.service';
const fs = require('fs').promises;

export class UserJSONService implements UserService {
    private users: User[] = [];
    private readonly filePath = 'src/user/users.json';

    constructor() {
        this.loadUsersFromFile();
    }

    private async loadUsersFromFile() {
        try {
            const fileContents = await fs.readFile(this.filePath, 'utf8');
            this.users = JSON.parse(fileContents);
        } catch (error) {
            console.error(
                'Erreur lors de la lecture du fichier users.json :',
                error,
            );
        }
    }

    private async saveUsersToFile() {
        try {
            await fs.writeFile(
                this.filePath,
                JSON.stringify(this.users, null, 2),
                'utf8',
            );
        } catch (error) {
            console.error(
                "Erreur lors de l'écriture du fichier users.json :",
                error,
            );
        }
    }

    add(firstName: string, lastName: string): User {
        const newUser: User = {
            id: this.users.length + 1,
            firstName,
            lastName,
        };
        this.users.push(newUser);
        this.saveUsersToFile();
        return newUser;
    }

    getById(id: number): User | null {
        return this.users.find((user) => user.id == id) || null;
    }
}
