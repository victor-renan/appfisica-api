"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JogosModule = void 0;
const jogos_service_1 = require("../services/jogos.service");
const jogos_controller_1 = require("../controllers/jogos.controller");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const materia_entity_1 = require("../models/materia.entity");
const jogo_entity_1 = require("../models/jogo.entity");
let JogosModule = class JogosModule {
};
JogosModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([jogo_entity_1.Jogo, materia_entity_1.Materia])],
        providers: [jogos_service_1.JogosService, config_1.ConfigService],
        controllers: [jogos_controller_1.JogosController],
        exports: [jogos_service_1.JogosService],
    })
], JogosModule);
exports.JogosModule = JogosModule;
//# sourceMappingURL=jogos.module.js.map