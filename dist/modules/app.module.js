"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const users_module_1 = require("./users.module");
const database_module_1 = require("./database.module");
const materias_module_1 = require("./materias.module");
const atividades_module_1 = require("./atividades.module");
const materiais_module_1 = require("./materiais.module");
const jogos_module_1 = require("./jogos.module");
const videos_module_1 = require("./videos.module");
const destaques_module_1 = require("./destaques.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            database_module_1.DatabaseModule,
            users_module_1.UsersModule,
            materias_module_1.MateriasModule,
            atividades_module_1.AtividadesModule,
            materiais_module_1.MateriaisModule,
            videos_module_1.VideosModule,
            jogos_module_1.JogosModule,
            destaques_module_1.DestaquesModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map