"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var UsersService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const usuario_entity_1 = require("../models/usuario.entity");
const common_2 = require("@nestjs/common");
const mongodb_1 = require("mongodb");
let UsersService = UsersService_1 = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
        this.logger = new common_2.Logger(UsersService_1.name);
    }
    async getAllUsers() {
        this.logger.log("Get all users");
        return await this.usersRepository.find();
    }
    async getUserById(id) {
        this.logger.log(`Get the user with id ${id}`);
        const user = await this.usersRepository.findOneBy({ _id: new mongodb_1.ObjectId(id) });
        if (!user)
            throw new common_1.NotFoundException(`User com ID: ${id} não existe!`);
        return user;
    }
    async createUser(user) {
        this.logger.log("Creates a user");
        const usernameExists = await this.usersRepository.findOneBy({ username: user.username });
        const emailExists = await this.usersRepository.findOneBy({ email: user.email });
        if (usernameExists || emailExists)
            throw new common_1.ConflictException(`User com este username ou email já existe!`);
        const newUser = this.usersRepository.create(Object.assign({}, user));
        return await this.usersRepository.save(newUser);
    }
    async updateUser(id, update) {
        this.logger.log(`Update user ${id}`);
        const user = await this.getUserById(id);
        if (!user)
            throw new common_1.NotFoundException(`Usuário de ID: ${id} não encontrado!`);
        await this.usersRepository.update({ _id: new mongodb_1.ObjectId(id) }, Object.assign({}, update));
        return await this.getUserById(id);
    }
    async deleteUser(id) {
        this.logger.log(`Delete user ${id}`);
        const user = this.getUserById(id);
        if (!user)
            throw new common_1.NotFoundException(`Usuário de ID: ${id} não encontrado!`);
        await this.usersRepository.delete({ _id: new mongodb_1.ObjectId(id) });
        return user;
    }
    async login(userDto) {
        this.logger.log(`Login user with values {${userDto.username}, ${userDto.password}}`);
        const user = this.usersRepository.findOne({
            where: { username: userDto.username, password: userDto.password }
        });
        if (!user)
            throw new common_1.NotFoundException(`usuário de username: ${userDto.username}, e password: ${userDto.password} não encontrado`);
        return user;
    }
};
UsersService = UsersService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(usuario_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_1.MongoRepository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map