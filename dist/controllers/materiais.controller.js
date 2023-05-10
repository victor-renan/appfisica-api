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
exports.MateriaisController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const id_exception_1 = require("../exceptions/id.exception");
const materiais_service_1 = require("../services/materiais.service");
const materiais_dto_1 = require("../dto/materiais.dto");
let MateriaisController = class MateriaisController {
    constructor(materiaisService) {
        this.materiaisService = materiaisService;
    }
    async getAll() {
        return await this.materiaisService.getAllMateriais();
    }
    async getOne(id) {
        if (id.length < 12)
            throw new id_exception_1.IdException();
        return await this.materiaisService.getMaterialById(id);
    }
    async createMaterial(material) {
        return await this.materiaisService.createMaterial(material);
    }
    async updateMaterial(id, update) {
        if (id.length < 12)
            throw new id_exception_1.IdException();
        return await this.materiaisService.updateMaterial(id, update);
    }
    async deleteMaterial(id) {
        if (id.length < 12)
            throw new id_exception_1.IdException();
        return await this.materiaisService.deleteMaterial(id);
    }
};
__decorate([
    (0, common_1.Get)('find/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MateriaisController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('find/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MateriaisController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)('create/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [materiais_dto_1.CreateMaterialDto]),
    __metadata("design:returntype", Promise)
], MateriaisController.prototype, "createMaterial", null);
__decorate([
    (0, common_1.Post)('update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, materiais_dto_1.UpdateMaterialDto]),
    __metadata("design:returntype", Promise)
], MateriaisController.prototype, "updateMaterial", null);
__decorate([
    (0, common_1.Post)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MateriaisController.prototype, "deleteMaterial", null);
MateriaisController = __decorate([
    (0, common_2.Controller)('materiais'),
    __metadata("design:paramtypes", [materiais_service_1.MateriaisService])
], MateriaisController);
exports.MateriaisController = MateriaisController;
//# sourceMappingURL=materiais.controller.js.map