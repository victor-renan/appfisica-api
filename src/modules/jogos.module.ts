import { JogosService } from "services/jogos.service";
import { JogosController } from "controllers/jogos.controller";
import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Materia } from "models/materia.entity";
import { Jogo } from "models/jogo.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Jogo, Materia])],
  providers: [JogosService, ConfigService],
  controllers: [JogosController],
  exports: [JogosService],
})

export class JogosModule {}