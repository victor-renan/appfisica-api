"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DestaquesModule = void 0;
const destaques_service_1 = require("../services/destaques.service");
const destaques_controller_1 = require("../controllers/destaques.controller");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const destaque_entity_1 = require("../models/destaque.entity");
let DestaquesModule = class DestaquesModule {
};
DestaquesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([destaque_entity_1.Destaque])],
        providers: [destaques_service_1.DestaquesService, config_1.ConfigService],
        controllers: [destaques_controller_1.DestaquesController],
        exports: [destaques_service_1.DestaquesService],
    })
], DestaquesModule);
exports.DestaquesModule = DestaquesModule;
//# sourceMappingURL=destaques.module.js.map