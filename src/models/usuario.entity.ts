import { Entity, ObjectId, ObjectIdColumn, Column } from "typeorm";
import { IsEmail } from "class-validator";


@Entity()
export class User {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  password: string;
}