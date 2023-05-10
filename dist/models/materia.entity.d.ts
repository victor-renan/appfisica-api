import { ObjectId } from "typeorm";
import { Material } from "./material.entity";
import { Atividade } from "./atividade.entity";
export declare class Materia {
    _id: ObjectId;
    name: string;
    description: string;
    materiais: Material[];
    atividades: Atividade[];
}
