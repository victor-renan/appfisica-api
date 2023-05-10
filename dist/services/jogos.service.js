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
var JogosService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.JogosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const jogo_entity_1 = require("../models/jogo.entity");
const mongodb_1 = require("mongodb");
const materia_entity_1 = require("../models/materia.entity");
let JogosService = JogosService_1 = class JogosService {
    constructor(jogosRepository, materiasRepository) {
        this.jogosRepository = jogosRepository;
        this.materiasRepository = materiasRepository;
        this.logger = new common_1.Logger(JogosService_1.name);
    }
    async getAllJogos() {
        this.logger.log("Get all jogos");
        return await this.jogosRepository.find();
    }
    async getJogoById(id) {
        this.logger.log(`Get jogo with id ${id}`);
        const jogo = await this.jogosRepository.findOneBy({ _id: new mongodb_1.ObjectId(id) });
        if (!jogo)
            throw new common_1.NotFoundException(`Jogo de ID: ${id} não encontrado!`);
        return jogo;
    }
    async createJogo(jogo) {
        this.logger.log(`Create a jogo`);
        const nameExists = await this.jogosRepository.findOneBy({ link: jogo.link });
        if (nameExists)
            throw new common_1.ConflictException(`Uma jogo com esse link já existe!`);
        const { materia } = jogo, partial = __rest(jogo, ["materia"]);
        const findMateria = await this.materiasRepository.findOneBy({ name: materia });
        if (!findMateria)
            throw new common_1.NotFoundException(`Matéria de Nome: ${materia} não existe!`);
        const newJogo = this.jogosRepository.create(Object.assign(Object.assign({}, partial), { materia }));
        return await this.jogosRepository.save(newJogo);
    }
    async updateJogo(id, update) {
        this.logger.log(`Update jogo ${id}`);
        const jogo = await this.getJogoById(id);
        if (!jogo)
            throw new common_1.NotFoundException(`Jogo de jogoId: ${id} não encontrado!`);
        const { materia } = update, partial = __rest(update, ["materia"]);
        const findMateria = await this.materiasRepository.findOneBy({ name: materia });
        if (!findMateria)
            throw new common_1.NotFoundException(`Matéria de Nome: ${materia} não existe!`);
        await this.jogosRepository.update({ _id: new mongodb_1.ObjectId(id) }, Object.assign(Object.assign({}, partial), { materia }));
        return await this.getJogoById(id);
    }
    async deleteJogo(id) {
        this.logger.log(`Delete jogo ${id}`);
        const jogo = await this.getJogoById(id);
        if (!jogo)
            throw new common_1.NotFoundException(`Jogo de ID: ${id} não encontrado!`);
        await this.jogosRepository.delete({ _id: new mongodb_1.ObjectId(id) });
        return jogo;
    }
};
JogosService = JogosService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(jogo_entity_1.Jogo)),
    __param(1, (0, typeorm_1.InjectRepository)(materia_entity_1.Materia)),
    __metadata("design:paramtypes", [typeorm_2.MongoRepository,
        typeorm_2.MongoRepository])
], JogosService);
exports.JogosService = JogosService;
//# sourceMappingURL=jogos.service.js.map