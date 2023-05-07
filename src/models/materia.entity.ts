import { Entity, ObjectIdColumn, ObjectId, Column, ManyToMany } from "typeorm";
import { Material } from "./material.entity";
import { Atividade } from "./atividade.entity";


@Entity()
export class Materia {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column((type) => Material)
  materiais: Material[];

  @Column((type) => Atividade)
  atividades: Atividade[];
}