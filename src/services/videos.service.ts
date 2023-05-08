import { ConflictException, Injectable, Logger, NotFoundException } from "@nestjs/common";
import { CreateVideoDto, UpdateVideoDto } from "dto/videos.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { MongoRepository } from "typeorm";
import { Video } from "models/video.entity";
import { ObjectId } from "mongodb";
import { Materia } from "models/materia.entity";

@Injectable()
export class VideosService {
  constructor(
    @InjectRepository(Video)
    private videosRepository: MongoRepository<Video>,
    @InjectRepository(Materia)
    private materiasRepository: MongoRepository<Materia>
  ) { }

  private logger = new Logger(VideosService.name);

  async getAllVideos(): Promise<Video[]> {
    this.logger.log("Get all videos")
    return await this.videosRepository.find();
  }

  async getVideoById(id: string): Promise<Video> {
    this.logger.log(`Get video with id ${id}`);
    const video = await this.videosRepository.findOneBy({ _id: new ObjectId(id) });
    if (!video) throw new NotFoundException(
      `Video de ID: ${id} não encontrado!`
    );

    return video;
  }

  async createVideo(video: CreateVideoDto): Promise<Video> {
    this.logger.log(`Create a video`);
    const nameExists = await this.videosRepository.findOneBy({ videoId: video.videoId });
    if (nameExists) throw new ConflictException(
      `Uma video com esse videoId já existe!`
    );
    const { materia, ...partial } = video;

    const findMateria = await this.materiasRepository.findOneBy({ name: materia })

    if (!findMateria) throw new NotFoundException(
      `Matéria de Nome: ${materia} não existe!`
    );
    const newVideo = this.videosRepository.create({ ...partial, materia })

    return await this.videosRepository.save(newVideo);
  }

  async updateVideo(id: string, update: UpdateVideoDto): Promise<Video> {
    this.logger.log(`Update video ${id}`)
    const video = await this.getVideoById(id);
    if (!video) throw new NotFoundException(
      `Video de videoId: ${id} não encontrado!`
    );
    const { materia, ...partial } = update;

    const findMateria = await this.materiasRepository.findOneBy({ name: materia });

    if (!findMateria) throw new NotFoundException(
      `Matéria de Nome: ${materia} não existe!`
    );
    await this.videosRepository.update(
      { _id: new ObjectId(id) }, { ...partial, materia }
    );

    return await this.getVideoById(id);
  }

  async deleteVideo(id: string): Promise<Video> {
    this.logger.log(`Delete video ${id}`);
    const video = await this.getVideoById(id);
    if (!video) throw new NotFoundException(
      `Video de ID: ${id} não encontrado!`
    );
    await this.videosRepository.delete({ _id: new ObjectId(id) });

    return video;
  }
}