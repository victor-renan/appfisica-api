import { MongoRepository } from "typeorm";
import { User } from "models/usuario.entity";
import { CreateUserDto, UpdateUserDto } from "dto/users.dto";
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: MongoRepository<User>);
    private logger;
    getAllUsers(): Promise<User[]>;
    getUserById(id: string): Promise<User>;
    createUser(user: CreateUserDto): Promise<User>;
    updateUser(id: string, update: UpdateUserDto): Promise<User>;
    deleteUser(id: string): Promise<User>;
}
