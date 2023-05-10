import { Material } from "models/material.entity";
import { MateriaisService } from "services/materiais.service";
import { CreateMaterialDto, UpdateMaterialDto } from "dto/materiais.dto";
export declare class MateriaisController {
    private readonly materiaisService;
    constructor(materiaisService: MateriaisService);
    getAll(): Promise<Material[]>;
    getOne(id: string): Promise<Material>;
    createMaterial(material: CreateMaterialDto): Promise<Material>;
    updateMaterial(id: string, update: UpdateMaterialDto): Promise<Material>;
    deleteMaterial(id: string): Promise<Material>;
}
