import { Column, Entity, ObjectIdColumn } from "typeorm";
import { ObjectId } from "mongodb";

@Entity()
export class Video {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  videoId: string;

  @Column()
  materia: string;
}