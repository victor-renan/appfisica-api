import { CreateUserDto, LoginUserDto, UpdateUserDto } from "dto/users.dto";
import { User } from "models/usuario.entity";
import { UsersService } from "services/users.service";
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    getAll(): Promise<User[]>;
    getOne(id: string): Promise<User>;
    createUser(user: CreateUserDto): Promise<User>;
    updateUser(id: string, update: UpdateUserDto): Promise<User>;
    deleteUser(id: string): Promise<User>;
    loginUser(user: LoginUserDto): Promise<User>;
}
