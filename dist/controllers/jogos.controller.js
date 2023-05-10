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
Object.defineProperty(exports, "__esModule", { value: true });
exports.JogosController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const id_exception_1 = require("../exceptions/id.exception");
const jogos_service_1 = require("../services/jogos.service");
const jogos_dto_1 = require("../dto/jogos.dto");
let JogosController = class JogosController {
    constructor(jogosService) {
        this.jogosService = jogosService;
    }
    async getAll() {
        return await this.jogosService.getAllJogos();
    }
    async getOne(id) {
        if (id.length < 12)
            throw new id_exception_1.IdException();
        return await this.jogosService.getJogoById(id);
    }
    async createJogo(jogo) {
        return await this.jogosService.createJogo(jogo);
    }
    async updateJogo(id, update) {
        if (id.length < 12)
            throw new id_exception_1.IdException();
        return await this.jogosService.updateJogo(id, update);
    }
    async deleteJogo(id) {
        if (id.length < 12)
            throw new id_exception_1.IdException();
        return await this.jogosService.deleteJogo(id);
    }
};
__decorate([
    (0, common_1.Get)('find/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JogosController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('find/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], JogosController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)('create/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [jogos_dto_1.CreateJogoDto]),
    __metadata("design:returntype", Promise)
], JogosController.prototype, "createJogo", null);
__decorate([
    (0, common_1.Post)('update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, jogos_dto_1.UpdateJogoDto]),
    __metadata("design:returntype", Promise)
], JogosController.prototype, "updateJogo", null);
__decorate([
    (0, common_1.Post)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], JogosController.prototype, "deleteJogo", null);
JogosController = __decorate([
    (0, common_2.Controller)('jogos'),
    __metadata("design:paramtypes", [jogos_service_1.JogosService])
], JogosController);
exports.JogosController = JogosController;
//# sourceMappingURL=jogos.controller.js.map