import { CreateMaterialDto, UpdateMaterialDto } from "dto/materiais.dto";
import { MongoRepository } from "typeorm";
import { Material } from "models/material.entity";
import { Materia } from "models/materia.entity";
export declare class MateriaisService {
    private materiaisRepository;
    private materiasRepository;
    constructor(materiaisRepository: MongoRepository<Material>, materiasRepository: MongoRepository<Materia>);
    private logger;
    getAllMateriais(): Promise<Material[]>;
    getMaterialById(id: string): Promise<Material>;
    createMaterial(material: CreateMaterialDto): Promise<Material>;
    updateMaterial(id: string, update: UpdateMaterialDto): Promise<Material>;
    deleteMaterial(id: string): Promise<Material>;
}
