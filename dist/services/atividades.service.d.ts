import { MongoRepository } from "typeorm";
import { Atividade } from "models/atividade.entity";
import { CreateAtividadeDto, UpdateAtividadeDto } from "dto/atividades.dto";
import { Materia } from "models/materia.entity";
export declare class AtividadesService {
    private atividadesRepository;
    private materiasRepository;
    constructor(atividadesRepository: MongoRepository<Atividade>, materiasRepository: MongoRepository<Materia>);
    private logger;
    getAllAtividades(): Promise<Atividade[]>;
    getAtividadeById(id: string): Promise<Atividade>;
    createAtividade(atividade: CreateAtividadeDto): Promise<Atividade>;
    updateAtividade(id: string, update: UpdateAtividadeDto): Promise<Atividade>;
    deleteAtividade(id: string): Promise<Atividade>;
}
