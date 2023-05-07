import { MateriasService } from "services/materias.service";
import { MateriasController } from "controllers/materias.controller";
import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Materia } from "models/materia.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Materia])],
  providers: [MateriasService, ConfigService],
  controllers: [MateriasController],
  exports: [MateriasService],
})

export class MateriasModule {}