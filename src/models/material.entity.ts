import { Entity, ObjectIdColumn, ObjectId, Column } from "typeorm";


@Entity()
export class Material {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  name: string;

  @Column()
  file: string;

  @Column()
  materia: string;
}