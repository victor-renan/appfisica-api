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
var MateriasService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const materia_entity_1 = require("../models/materia.entity");
const mongodb_1 = require("mongodb");
const common_2 = require("@nestjs/common");
let MateriasService = MateriasService_1 = class MateriasService {
    constructor(materiasRepository) {
        this.materiasRepository = materiasRepository;
        this.logger = new common_1.Logger(MateriasService_1.name);
    }
    async getAllMaterias() {
        this.logger.log("Get all materias");
        return await this.materiasRepository.find();
    }
    async getMateriaById(id) {
        this.logger.log(`Get the materia with id ${id}`);
        const materia = await this.materiasRepository.findOneBy({ _id: new mongodb_1.ObjectId(id) });
        if (!materia)
            throw new common_2.NotFoundException(`Materia com ID: ${id} não existe!`);
        return materia;
    }
    async getMateriaByName(name) {
        this.logger.log(`Get the materia with Name ${name}`);
        const materia = await this.materiasRepository.findOneBy({ name: name });
        if (!materia)
            throw new common_2.NotFoundException(`Materia com Nome: ${name} não existe!`);
        return materia;
    }
    async createMateria(materia) {
        this.logger.log("Creates a materia");
        const nameExists = await this.materiasRepository.findOneBy({ name: materia.name });
        if (nameExists)
            throw new common_2.ConflictException(`Materia com este nome já existe!`);
        const newMateria = this.materiasRepository.create(Object.assign({}, materia));
        return await this.materiasRepository.save(newMateria);
    }
    async updateMateria(id, update) {
        this.logger.log(`Update materia ${id}`);
        const materia = await this.getMateriaById(id);
        if (!materia)
            throw new common_2.NotFoundException(`Matériade ID: ${id} não encontrada!`);
        await this.materiasRepository.update({ _id: new mongodb_1.ObjectId(id) }, Object.assign({}, update));
        return await this.getMateriaById(id);
    }
    async deleteMateria(id) {
        this.logger.log(`Delete materia ${id}`);
        const materia = this.getMateriaById(id);
        if (!materia)
            throw new common_2.NotFoundException(`Materia de ID: ${id} não encontrada!`);
        await this.materiasRepository.delete({ _id: new mongodb_1.ObjectId(id) });
        return materia;
    }
};
MateriasService = MateriasService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(materia_entity_1.Materia)),
    __metadata("design:paramtypes", [typeorm_1.MongoRepository])
], MateriasService);
exports.MateriasService = MateriasService;
//# sourceMappingURL=materias.service.js.map