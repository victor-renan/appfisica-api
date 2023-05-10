import { Destaque } from "models/destaque.entity";
import { DestaquesService } from "services/destaques.service";
import { CreateDestaqueDto, UpdateDestaqueDto } from "dto/destaques.dto";
export declare class DestaquesController {
    private readonly destaquesService;
    constructor(destaquesService: DestaquesService);
    getAll(): Promise<Destaque[]>;
    getOne(id: string): Promise<Destaque>;
    getByName(name: string): Promise<Destaque>;
    createDestaque(materia: CreateDestaqueDto): Promise<Destaque>;
    updateDestaque(id: string, update: UpdateDestaqueDto): Promise<Destaque>;
    deleteDestaque(id: string): Promise<Destaque>;
}
