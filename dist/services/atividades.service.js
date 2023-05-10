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
var AtividadesService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtividadesService = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const common_1 = require("@nestjs/common");
const atividade_entity_1 = require("../models/atividade.entity");
const mongodb_1 = require("mongodb");
const materia_entity_1 = require("../models/materia.entity");
let AtividadesService = AtividadesService_1 = class AtividadesService {
    constructor(atividadesRepository, materiasRepository) {
        this.atividadesRepository = atividadesRepository;
        this.materiasRepository = materiasRepository;
        this.logger = new common_1.Logger(AtividadesService_1.name);
    }
    async getAllAtividades() {
        this.logger.log("Get all atividades");
        return await this.atividadesRepository.find();
    }
    async getAtividadeById(id) {
        this.logger.log(`Get atividade with id ${id}`);
        const atividade = await this.atividadesRepository.findOneBy({ _id: new mongodb_1.ObjectId(id) });
        if (!atividade)
            throw new common_1.NotFoundException(`Atividade de ID: ${id} não encontrada!`);
        return atividade;
    }
    async createAtividade(atividade) {
        this.logger.log(`Create a atividade`);
        const nameExists = await this.atividadesRepository.findOneBy({ name: atividade.name });
        if (nameExists)
            throw new common_1.ConflictException(`Uma atividade com esse nome já existe!`);
        const { materia } = atividade, partial = __rest(atividade, ["materia"]);
        const findMateria = await this.materiasRepository.findOneBy({ name: materia });
        if (!findMateria)
            throw new common_1.NotFoundException(`Matéria de Nome: ${materia} não existe!`);
        const newAtividade = this.atividadesRepository.create(Object.assign(Object.assign({}, partial), { materia }));
        return await this.atividadesRepository.save(newAtividade);
    }
    async updateAtividade(id, update) {
        this.logger.log(`Update atividade ${id}`);
        const atividade = await this.getAtividadeById(id);
        if (!atividade)
            throw new common_1.NotFoundException(`Atividade ID: ${id} não encontrada!`);
        const { materia } = update, partial = __rest(update, ["materia"]);
        const findMateria = await this.materiasRepository.findOneBy({ name: materia });
        if (!findMateria)
            throw new common_1.NotFoundException(`Matéria de Nome: ${materia} não existe!`);
        await this.atividadesRepository.update({ _id: new mongodb_1.ObjectId(id) }, Object.assign(Object.assign({}, partial), { materia }));
        return await this.getAtividadeById(id);
    }
    async deleteAtividade(id) {
        this.logger.log(`Delete atividade ${id}`);
        const atividade = await this.getAtividadeById(id);
        if (!atividade)
            throw new common_1.NotFoundException(`Atividade de ID: ${id} não encontrada!`);
        await this.atividadesRepository.delete({ _id: new mongodb_1.ObjectId(id) });
        return atividade;
    }
};
AtividadesService = AtividadesService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(atividade_entity_1.Atividade)),
    __param(1, (0, typeorm_1.InjectRepository)(materia_entity_1.Materia)),
    __metadata("design:paramtypes", [typeorm_2.MongoRepository,
        typeorm_2.MongoRepository])
], AtividadesService);
exports.AtividadesService = AtividadesService;
//# sourceMappingURL=atividades.service.js.map