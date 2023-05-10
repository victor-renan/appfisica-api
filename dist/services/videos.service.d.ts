import { CreateVideoDto, UpdateVideoDto } from "dto/videos.dto";
import { MongoRepository } from "typeorm";
import { Video } from "models/video.entity";
import { Materia } from "models/materia.entity";
export declare class VideosService {
    private videosRepository;
    private materiasRepository;
    constructor(videosRepository: MongoRepository<Video>, materiasRepository: MongoRepository<Materia>);
    private logger;
    getAllVideos(): Promise<Video[]>;
    getVideoById(id: string): Promise<Video>;
    createVideo(video: CreateVideoDto): Promise<Video>;
    updateVideo(id: string, update: UpdateVideoDto): Promise<Video>;
    deleteVideo(id: string): Promise<Video>;
}
