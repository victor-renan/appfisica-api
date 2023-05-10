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
exports.MateriasController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const id_exception_1 = require("../exceptions/id.exception");
const materias_service_1 = require("../services/materias.service");
const materias_dto_1 = require("../dto/materias.dto");
let MateriasController = class MateriasController {
    constructor(materiasService) {
        this.materiasService = materiasService;
    }
    async getAll() {
        return await this.materiasService.getAllMaterias();
    }
    async getOne(id) {
        if (id.length < 12)
            throw new id_exception_1.IdException();
        return await this.materiasService.getMateriaById(id);
    }
    async getByName(name) {
        return await this.materiasService.getMateriaByName(name);
    }
    async createMateria(materia) {
        return await this.materiasService.createMateria(materia);
    }
    async updateMateria(id, update) {
        if (id.length < 12)
            throw new id_exception_1.IdException();
        return await this.materiasService.updateMateria(id, update);
    }
    async deleteMateria(id) {
        if (id.length < 12)
            throw new id_exception_1.IdException();
        return await this.materiasService.deleteMateria(id);
    }
};
__decorate([
    (0, common_1.Get)('find/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MateriasController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('find/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MateriasController.prototype, "getOne", null);
__decorate([
    (0, common_1.Get)('byname/:name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MateriasController.prototype, "getByName", null);
__decorate([
    (0, common_1.Post)('create/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [materias_dto_1.CreateMateriaDto]),
    __metadata("design:returntype", Promise)
], MateriasController.prototype, "createMateria", null);
__decorate([
    (0, common_1.Post)('update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, materias_dto_1.UpdateMateriaDto]),
    __metadata("design:returntype", Promise)
], MateriasController.prototype, "updateMateria", null);
__decorate([
    (0, common_1.Post)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MateriasController.prototype, "deleteMateria", null);
MateriasController = __decorate([
    (0, common_2.Controller)('materias'),
    __metadata("design:paramtypes", [materias_service_1.MateriasService])
], MateriasController);
exports.MateriasController = MateriasController;
//# sourceMappingURL=materias.controller.js.map