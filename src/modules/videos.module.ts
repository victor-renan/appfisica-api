import { VideosService } from "services/videos.service";
import { VideosController } from "controllers/videos.controller";
import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Materia } from "models/materia.entity";
import { Video } from "models/video.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Video, Materia])],
  providers: [VideosService, ConfigService],
  controllers: [VideosController],
  exports: [VideosService],
})

export class VideosModule {}