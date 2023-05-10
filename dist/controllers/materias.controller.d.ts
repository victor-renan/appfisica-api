import { Materia } from "models/materia.entity";
import { MateriasService } from "services/materias.service";
import { CreateMateriaDto, UpdateMateriaDto } from "dto/materias.dto";
export declare class MateriasController {
    private readonly materiasService;
    constructor(materiasService: MateriasService);
    getAll(): Promise<Materia[]>;
    getOne(id: string): Promise<Materia>;
    getByName(name: string): Promise<Materia>;
    createMateria(materia: CreateMateriaDto): Promise<Materia>;
    updateMateria(id: string, update: UpdateMateriaDto): Promise<Materia>;
    deleteMateria(id: string): Promise<Materia>;
}
