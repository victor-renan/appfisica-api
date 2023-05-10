import { Video } from "models/video.entity";
import { VideosService } from "services/videos.service";
import { CreateVideoDto, UpdateVideoDto } from "dto/videos.dto";
export declare class VideosController {
    private readonly videosService;
    constructor(videosService: VideosService);
    getAll(): Promise<Video[]>;
    getOne(id: string): Promise<Video>;
    createVideo(video: CreateVideoDto): Promise<Video>;
    updateVideo(id: string, update: UpdateVideoDto): Promise<Video>;
    deleteVideo(id: string): Promise<Video>;
}
