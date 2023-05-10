import { MongoRepository } from "typeorm";
import { Destaque } from "models/destaque.entity";
import { CreateDestaqueDto, UpdateDestaqueDto } from "dto/destaques.dto";
export declare class DestaquesService {
    private destaquesRepository;
    constructor(destaquesRepository: MongoRepository<Destaque>);
    private logger;
    getAllDestaques(): Promise<Destaque[]>;
    getDestaqueById(id: string): Promise<Destaque>;
    getDestaqueByName(name: string): Promise<Destaque>;
    createDestaque(destaque: CreateDestaqueDto): Promise<Destaque>;
    updateDestaque(id: string, update: UpdateDestaqueDto): Promise<Destaque>;
    deleteDestaque(id: string): Promise<Destaque>;
}
