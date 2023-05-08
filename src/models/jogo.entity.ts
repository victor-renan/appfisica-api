import { Column, Entity, ObjectIdColumn } from "typeorm";
import { ObjectId } from "mongodb";

@Entity()
export class Jogo {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  link: string;

  @Column()
  materia: string;
}