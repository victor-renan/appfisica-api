import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { MongoRepository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "models/usuario.entity";
import { Logger } from "@nestjs/common"
import { CreateUserDto, LoginUserDto, UpdateUserDto } from "dto/users.dto";
import { ObjectId } from "mongodb";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: MongoRepository<User>
  ) { }

  private logger = new Logger(UsersService.name);

  async getAllUsers(): Promise<User[]> {
    this.logger.log("Get all users");
    return await this.usersRepository.find();
  }

  async getUserById(id: string): Promise<User> {
    this.logger.log(`Get the user with id ${id}`);
    const user = await this.usersRepository.findOneBy({ _id: new ObjectId(id) });
    if (!user) throw new NotFoundException(
      `User com ID: ${id} não existe!`
    );
    return user;
  }

  async createUser(user: CreateUserDto): Promise<User> {
    this.logger.log("Creates a user")
    const usernameExists = await this.usersRepository.findOneBy(
      { username: user.username }
    );
    const emailExists = await this.usersRepository.findOneBy(
      { email: user.email }
    );
    if (usernameExists || emailExists) throw new ConflictException(
      `User com este username ou email já existe!`
    );

    const newUser = this.usersRepository.create({...user})

    return await this.usersRepository.save(newUser);
  }

  async updateUser(id: string, update: UpdateUserDto): Promise<User> {
    this.logger.log(`Update user ${id}`)
    const user = await this.getUserById(id);
    if (!user) throw new NotFoundException (
      `Usuário de ID: ${id} não encontrado!`
    );
    await this.usersRepository.update(
      {_id: new ObjectId(id)}, {...update}
    );
    return await this.getUserById(id);
  }

  async deleteUser(id: string): Promise<User> {
    this.logger.log(`Delete user ${id}`);
    const user = this.getUserById(id);
    if (!user) throw new NotFoundException (
      `Usuário de ID: ${id} não encontrado!`
    );
    await this.usersRepository.delete({ _id: new ObjectId(id) });

    return user;
  }

  async login(userDto: LoginUserDto) {
    this.logger.log(`Login user with values {${userDto.username}, ${userDto.password}}`);
    const user = this.usersRepository.findOne({
      where: {username: userDto.username, password: userDto.password}
    });
    if (!user) throw new NotFoundException(
      `usuário de username: ${userDto.username}, e password: ${userDto.password} não encontrado`
    );
    return user;
  }
 }