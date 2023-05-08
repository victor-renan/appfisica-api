import { Body, Get, Param, Post } from "@nestjs/common";
import { Controller } from "@nestjs/common";
import { IdException } from "exceptions/id.exception";
import { Video } from "models/video.entity";
import { VideosService } from "services/videos.service";
import { CreateVideoDto, UpdateVideoDto } from "dto/videos.dto";


@Controller('videos')
export class VideosController {
  constructor(private readonly videosService: VideosService) {}

  @Get('find/')
  async getAll(): Promise<Video[]> {
    return await this.videosService.getAllVideos();
  }

  @Get('find/:id')
  async getOne(@Param('id') id: string): Promise<Video> {
    if (id.length < 12) throw new IdException();
    return await this.videosService.getVideoById(id);
  }

  @Post('create/')
  async createVideo(@Body() video: CreateVideoDto): Promise<Video> {
    return await this.videosService.createVideo(video);
  }

  @Post('update/:id')
  async updateVideo(@Param('id') id: string, @Body() update: UpdateVideoDto): Promise<Video> {
    if (id.length < 12) throw new IdException();
    return await this.videosService.updateVideo(id, update);
  }

  @Post('delete/:id')
  async deleteVideo(@Param('id') id: string): Promise<Video> {
    if (id.length < 12) throw new IdException();
    return await this.videosService.deleteVideo(id);
  }
}