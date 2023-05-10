"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaisModule = void 0;
const materiais_service_1 = require("../services/materiais.service");
const materiais_controller_1 = require("../controllers/materiais.controller");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const materia_entity_1 = require("../models/materia.entity");
const material_entity_1 = require("../models/material.entity");
let MateriaisModule = class MateriaisModule {
};
MateriaisModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([material_entity_1.Material, materia_entity_1.Materia])],
        providers: [materiais_service_1.MateriaisService, config_1.ConfigService],
        controllers: [materiais_controller_1.MateriaisController],
        exports: [materiais_service_1.MateriaisService],
    })
], MateriaisModule);
exports.MateriaisModule = MateriaisModule;
//# sourceMappingURL=materiais.module.js.map