import { Body, Get, InternalServerErrorException, Param, Post } from "@nestjs/common";
import { Controller } from "@nestjs/common";
import { CreateUserDto, LoginUserDto, UpdateUserDto } from "dto/users.dto";
import { IdException } from "exceptions/id.exception";
import { User } from "models/usuario.entity";
import { UsersService } from "services/users.service";
import { ObjectId } from "typeorm";

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('find/')
  async getAll(): Promise<User[]> {
    return await this.userService.getAllUsers();
  }

  @Get('find/:id')
  async getOne(@Param('id') id: string): Promise<User> {
    if (id.length < 12) throw new IdException();
    return await this.userService.getUserById(id);
  }

  @Post('create/')
  async createUser(@Body() user: CreateUserDto): Promise<User> {
    return await this.userService.createUser(user);
  }

  @Post('update/:id')
  async updateUser(@Param('id') id: string, @Body() update: UpdateUserDto): Promise<User> {
    if (id.length < 12) throw new IdException();
    return await this.userService.updateUser(id, update);
  }

  @Post('delete/:id')
  async deleteUser(@Param('id') id: string): Promise<User> {
    if (id.length < 12) throw new IdException();
    return await this.userService.deleteUser(id);
  }

  @Post('login')
  async loginUser(@Body() user: LoginUserDto) {
    return await this.userService.login(user);
  }

}