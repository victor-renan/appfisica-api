import { DestaquesService } from "services/destaques.service";
import { DestaquesController } from "controllers/destaques.controller";
import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Destaque} from "models/destaque.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Destaque])],
  providers: [DestaquesService, ConfigService],
  controllers: [DestaquesController],
  exports: [DestaquesService],
})

export class DestaquesModule {}