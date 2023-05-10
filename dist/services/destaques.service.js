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
var DestaquesService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DestaquesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const destaque_entity_1 = require("../models/destaque.entity");
const mongodb_1 = require("mongodb");
const common_2 = require("@nestjs/common");
let DestaquesService = DestaquesService_1 = class DestaquesService {
    constructor(destaquesRepository) {
        this.destaquesRepository = destaquesRepository;
        this.logger = new common_1.Logger(DestaquesService_1.name);
    }
    async getAllDestaques() {
        this.logger.log("Get all destaques");
        return await this.destaquesRepository.find();
    }
    async getDestaqueById(id) {
        this.logger.log(`Get the destaque with id ${id}`);
        const destaque = await this.destaquesRepository.findOneBy({ _id: new mongodb_1.ObjectId(id) });
        if (!destaque)
            throw new common_2.NotFoundException(`Destaque com ID: ${id} não existe!`);
        return destaque;
    }
    async getDestaqueByName(name) {
        this.logger.log(`Get the destaque with Name ${name}`);
        const destaque = await this.destaquesRepository.findOneBy({ name: name });
        if (!destaque)
            throw new common_2.NotFoundException(`Destaque com Nome: ${name} não existe!`);
        return destaque;
    }
    async createDestaque(destaque) {
        this.logger.log("Creates a destaque");
        const nameExists = await this.destaquesRepository.findOneBy({ name: destaque.name });
        if (nameExists)
            throw new common_2.ConflictException(`Destaque com este nome já existe!`);
        const newDestaque = this.destaquesRepository.create(Object.assign({}, destaque));
        return await this.destaquesRepository.save(newDestaque);
    }
    async updateDestaque(id, update) {
        this.logger.log(`Update destaque ${id}`);
        const destaque = await this.getDestaqueById(id);
        if (!destaque)
            throw new common_2.NotFoundException(`Matériade ID: ${id} não encontrada!`);
        await this.destaquesRepository.update({ _id: new mongodb_1.ObjectId(id) }, Object.assign({}, update));
        return await this.getDestaqueById(id);
    }
    async deleteDestaque(id) {
        this.logger.log(`Delete destaque ${id}`);
        const destaque = this.getDestaqueById(id);
        if (!destaque)
            throw new common_2.NotFoundException(`Destaque de ID: ${id} não encontrada!`);
        await this.destaquesRepository.delete({ _id: new mongodb_1.ObjectId(id) });
        return destaque;
    }
};
DestaquesService = DestaquesService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(destaque_entity_1.Destaque)),
    __metadata("design:paramtypes", [typeorm_1.MongoRepository])
], DestaquesService);
exports.DestaquesService = DestaquesService;
//# sourceMappingURL=destaques.service.js.map