"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriasModule = void 0;
const materias_service_1 = require("../services/materias.service");
const materias_controller_1 = require("../controllers/materias.controller");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const materia_entity_1 = require("../models/materia.entity");
let MateriasModule = class MateriasModule {
};
MateriasModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([materia_entity_1.Materia])],
        providers: [materias_service_1.MateriasService, config_1.ConfigService],
        controllers: [materias_controller_1.MateriasController],
        exports: [materias_service_1.MateriasService],
    })
], MateriasModule);
exports.MateriasModule = MateriasModule;
//# sourceMappingURL=materias.module.js.map