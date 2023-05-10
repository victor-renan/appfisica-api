"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var VideosService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const video_entity_1 = require("../models/video.entity");
const mongodb_1 = require("mongodb");
const materia_entity_1 = require("../models/materia.entity");
let VideosService = VideosService_1 = class VideosService {
    constructor(videosRepository, materiasRepository) {
        this.videosRepository = videosRepository;
        this.materiasRepository = materiasRepository;
        this.logger = new common_1.Logger(VideosService_1.name);
    }
    async getAllVideos() {
        this.logger.log("Get all videos");
        return await this.videosRepository.find();
    }
    async getVideoById(id) {
        this.logger.log(`Get video with id ${id}`);
        const video = await this.videosRepository.findOneBy({ _id: new mongodb_1.ObjectId(id) });
        if (!video)
            throw new common_1.NotFoundException(`Video de ID: ${id} não encontrado!`);
        return video;
    }
    async createVideo(video) {
        this.logger.log(`Create a video`);
        const nameExists = await this.videosRepository.findOneBy({ videoId: video.videoId });
        if (nameExists)
            throw new common_1.ConflictException(`Uma video com esse videoId já existe!`);
        const { materia } = video, partial = __rest(video, ["materia"]);
        const findMateria = await this.materiasRepository.findOneBy({ name: materia });
        if (!findMateria)
            throw new common_1.NotFoundException(`Matéria de Nome: ${materia} não existe!`);
        const newVideo = this.videosRepository.create(Object.assign(Object.assign({}, partial), { materia }));
        return await this.videosRepository.save(newVideo);
    }
    async updateVideo(id, update) {
        this.logger.log(`Update video ${id}`);
        const video = await this.getVideoById(id);
        if (!video)
            throw new common_1.NotFoundException(`Video de videoId: ${id} não encontrado!`);
        const { materia } = update, partial = __rest(update, ["materia"]);
        const findMateria = await this.materiasRepository.findOneBy({ name: materia });
        if (!findMateria)
            throw new common_1.NotFoundException(`Matéria de Nome: ${materia} não existe!`);
        await this.videosRepository.update({ _id: new mongodb_1.ObjectId(id) }, Object.assign(Object.assign({}, partial), { materia }));
        return await this.getVideoById(id);
    }
    async deleteVideo(id) {
        this.logger.log(`Delete video ${id}`);
        const video = await this.getVideoById(id);
        if (!video)
            throw new common_1.NotFoundException(`Video de ID: ${id} não encontrado!`);
        await this.videosRepository.delete({ _id: new mongodb_1.ObjectId(id) });
        return video;
    }
};
VideosService = VideosService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(video_entity_1.Video)),
    __param(1, (0, typeorm_1.InjectRepository)(materia_entity_1.Materia)),
    __metadata("design:paramtypes", [typeorm_2.MongoRepository,
        typeorm_2.MongoRepository])
], VideosService);
exports.VideosService = VideosService;
//# sourceMappingURL=videos.service.js.map