import { AtividadesService } from "services/atividades.service";
import { AtividadesController } from "controllers/atividades.controller";
import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Atividade } from "models/atividade.entity";
import { Materia } from "models/materia.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Atividade, Materia])],
  providers: [AtividadesService, ConfigService],
  controllers: [AtividadesController],
  exports: [AtividadesService],
})

export class AtividadesModule {}