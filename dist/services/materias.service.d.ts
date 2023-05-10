import { MongoRepository } from "typeorm";
import { Materia } from "models/materia.entity";
import { CreateMateriaDto, UpdateMateriaDto } from "dto/materias.dto";
export declare class MateriasService {
    private materiasRepository;
    constructor(materiasRepository: MongoRepository<Materia>);
    private logger;
    getAllMaterias(): Promise<Materia[]>;
    getMateriaById(id: string): Promise<Materia>;
    getMateriaByName(name: string): Promise<Materia>;
    createMateria(materia: CreateMateriaDto): Promise<Materia>;
    updateMateria(id: string, update: UpdateMateriaDto): Promise<Materia>;
    deleteMateria(id: string): Promise<Materia>;
}
