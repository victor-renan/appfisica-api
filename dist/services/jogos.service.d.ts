import { CreateJogoDto, UpdateJogoDto } from "dto/jogos.dto";
import { MongoRepository } from "typeorm";
import { Jogo } from "models/jogo.entity";
import { Materia } from "models/materia.entity";
export declare class JogosService {
    private jogosRepository;
    private materiasRepository;
    constructor(jogosRepository: MongoRepository<Jogo>, materiasRepository: MongoRepository<Materia>);
    private logger;
    getAllJogos(): Promise<Jogo[]>;
    getJogoById(id: string): Promise<Jogo>;
    createJogo(jogo: CreateJogoDto): Promise<Jogo>;
    updateJogo(id: string, update: UpdateJogoDto): Promise<Jogo>;
    deleteJogo(id: string): Promise<Jogo>;
}
