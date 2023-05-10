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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Materia = void 0;
const typeorm_1 = require("typeorm");
const material_entity_1 = require("./material.entity");
const atividade_entity_1 = require("./atividade.entity");
let Materia = class Materia {
};
__decorate([
    (0, typeorm_1.ObjectIdColumn)(),
    __metadata("design:type", typeorm_1.ObjectId)
], Materia.prototype, "_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Materia.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Materia.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)((type) => material_entity_1.Material),
    __metadata("design:type", Array)
], Materia.prototype, "materiais", void 0);
__decorate([
    (0, typeorm_1.Column)((type) => atividade_entity_1.Atividade),
    __metadata("design:type", Array)
], Materia.prototype, "atividades", void 0);
Materia = __decorate([
    (0, typeorm_1.Entity)()
], Materia);
exports.Materia = Materia;
//# sourceMappingURL=materia.entity.js.map