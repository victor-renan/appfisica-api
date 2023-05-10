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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var MateriaisService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaisService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const material_entity_1 = require("../models/material.entity");
const mongodb_1 = require("mongodb");
const materia_entity_1 = require("../models/materia.entity");
let MateriaisService = MateriaisService_1 = class MateriaisService {
    constructor(materiaisRepository, materiasRepository) {
        this.materiaisRepository = materiaisRepository;
        this.materiasRepository = materiasRepository;
        this.logger = new common_1.Logger(MateriaisService_1.name);
    }
    async getAllMateriais() {
        this.logger.log("Get all materiais");
        return await this.materiaisRepository.find();
    }
    async getMaterialById(id) {
        this.logger.log(`Get material with id ${id}`);
        const material = await this.materiaisRepository.findOneBy({ _id: new mongodb_1.ObjectId(id) });
        if (!material)
            throw new common_1.NotFoundException(`Material de ID: ${id} não encontrado!`);
        return material;
    }
    async createMaterial(material) {
        this.logger.log(`Create a material`);
        const nameExists = await this.materiaisRepository.findOneBy({ name: material.name });
        if (nameExists)
            throw new common_1.ConflictException(`Uma material com esse nome já existe!`);
        const { materia } = material, partial = __rest(material, ["materia"]);
        const findMateria = await this.materiasRepository.findOneBy({ name: materia });
        if (!findMateria)
            throw new common_1.NotFoundException(`Matéria de Nome: ${materia} não existe!`);
        const newMaterial = this.materiaisRepository.create(Object.assign(Object.assign({}, partial), { materia }));
        return await this.materiaisRepository.save(newMaterial);
    }
    async updateMaterial(id, update) {
        this.logger.log(`Update material ${id}`);
        const material = await this.getMaterialById(id);
        if (!material)
            throw new common_1.NotFoundException(`Material ID: ${id} não encontrado!`);
        const { materia } = update, partial = __rest(update, ["materia"]);
        const findMateria = await this.materiasRepository.findOneBy({ name: materia });
        if (!findMateria)
            throw new common_1.NotFoundException(`Matéria de Nome: ${materia} não existe!`);
        await this.materiaisRepository.update({ _id: new mongodb_1.ObjectId(id) }, Object.assign(Object.assign({}, partial), { materia }));
        return await this.getMaterialById(id);
    }
    async deleteMaterial(id) {
        this.logger.log(`Delete material ${id}`);
        const material = await this.getMaterialById(id);
        if (!material)
            throw new common_1.NotFoundException(`Material de ID: ${id} não encontrado!`);
        await this.materiaisRepository.delete({ _id: new mongodb_1.ObjectId(id) });
        return material;
    }
};
MateriaisService = MateriaisService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(material_entity_1.Material)),
    __param(1, (0, typeorm_1.InjectRepository)(materia_entity_1.Materia)),
    __metadata("design:paramtypes", [typeorm_2.MongoRepository,
        typeorm_2.MongoRepository])
], MateriaisService);
exports.MateriaisService = MateriaisService;
//# sourceMappingURL=materiais.service.js.map