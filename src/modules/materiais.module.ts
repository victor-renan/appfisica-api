import { MateriaisService } from "services/materiais.service";
import { MateriaisController } from "controllers/materiais.controller";
import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Materia } from "models/materia.entity";
import { Material } from "models/material.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Material, Materia])],
  providers: [MateriaisService, ConfigService],
  controllers: [MateriaisController],
  exports: [MateriaisService],
})

export class MateriaisModule {}