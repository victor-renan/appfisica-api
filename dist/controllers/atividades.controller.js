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
exports.AtividadesController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const id_exception_1 = require("../exceptions/id.exception");
const atividades_service_1 = require("../services/atividades.service");
const atividades_dto_1 = require("../dto/atividades.dto");
let AtividadesController = class AtividadesController {
    constructor(atividadesService) {
        this.atividadesService = atividadesService;
    }
    async getAll() {
        return await this.atividadesService.getAllAtividades();
    }
    async getOne(id) {
        if (id.length < 12)
            throw new id_exception_1.IdException();
        return await this.atividadesService.getAtividadeById(id);
    }
    async createAtividade(atividade) {
        return await this.atividadesService.createAtividade(atividade);
    }
    async updateAtividade(id, update) {
        if (id.length < 12)
            throw new id_exception_1.IdException();
        return await this.atividadesService.updateAtividade(id, update);
    }
    async deleteAtividade(id) {
        if (id.length < 12)
            throw new id_exception_1.IdException();
        return await this.atividadesService.deleteAtividade(id);
    }
};
__decorate([
    (0, common_1.Get)('find/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AtividadesController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('find/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AtividadesController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)('create/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [atividades_dto_1.CreateAtividadeDto]),
    __metadata("design:returntype", Promise)
], AtividadesController.prototype, "createAtividade", null);
__decorate([
    (0, common_1.Post)('update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, atividades_dto_1.UpdateAtividadeDto]),
    __metadata("design:returntype", Promise)
], AtividadesController.prototype, "updateAtividade", null);
__decorate([
    (0, common_1.Post)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AtividadesController.prototype, "deleteAtividade", null);
AtividadesController = __decorate([
    (0, common_2.Controller)('atividades'),
    __metadata("design:paramtypes", [atividades_service_1.AtividadesService])
], AtividadesController);
exports.AtividadesController = AtividadesController;
//# sourceMappingURL=atividades.controller.js.map