import { Atividade } from "models/atividade.entity";
import { AtividadesService } from "services/atividades.service";
import { CreateAtividadeDto, UpdateAtividadeDto } from "dto/atividades.dto";
export declare class AtividadesController {
    private readonly atividadesService;
    constructor(atividadesService: AtividadesService);
    getAll(): Promise<Atividade[]>;
    getOne(id: string): Promise<Atividade>;
    createAtividade(atividade: CreateAtividadeDto): Promise<Atividade>;
    updateAtividade(id: string, update: UpdateAtividadeDto): Promise<Atividade>;
    deleteAtividade(id: string): Promise<Atividade>;
}
