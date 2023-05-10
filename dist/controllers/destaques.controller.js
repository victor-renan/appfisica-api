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
exports.DestaquesController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const id_exception_1 = require("../exceptions/id.exception");
const destaques_service_1 = require("../services/destaques.service");
const destaques_dto_1 = require("../dto/destaques.dto");
let DestaquesController = class DestaquesController {
    constructor(destaquesService) {
        this.destaquesService = destaquesService;
    }
    async getAll() {
        return await this.destaquesService.getAllDestaques();
    }
    async getOne(id) {
        if (id.length < 12)
            throw new id_exception_1.IdException();
        return await this.destaquesService.getDestaqueById(id);
    }
    async getByName(name) {
        return await this.destaquesService.getDestaqueByName(name);
    }
    async createDestaque(materia) {
        return await this.destaquesService.createDestaque(materia);
    }
    async updateDestaque(id, update) {
        if (id.length < 12)
            throw new id_exception_1.IdException();
        return await this.destaquesService.updateDestaque(id, update);
    }
    async deleteDestaque(id) {
        if (id.length < 12)
            throw new id_exception_1.IdException();
        return await this.destaquesService.deleteDestaque(id);
    }
};
__decorate([
    (0, common_1.Get)('find/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DestaquesController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('find/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DestaquesController.prototype, "getOne", null);
__decorate([
    (0, common_1.Get)('byname/:name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DestaquesController.prototype, "getByName", null);
__decorate([
    (0, common_1.Post)('create/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [destaques_dto_1.CreateDestaqueDto]),
    __metadata("design:returntype", Promise)
], DestaquesController.prototype, "createDestaque", null);
__decorate([
    (0, common_1.Post)('update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, destaques_dto_1.UpdateDestaqueDto]),
    __metadata("design:returntype", Promise)
], DestaquesController.prototype, "updateDestaque", null);
__decorate([
    (0, common_1.Post)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DestaquesController.prototype, "deleteDestaque", null);
DestaquesController = __decorate([
    (0, common_2.Controller)('destaques'),
    __metadata("design:paramtypes", [destaques_service_1.DestaquesService])
], DestaquesController);
exports.DestaquesController = DestaquesController;
//# sourceMappingURL=destaques.controller.js.map