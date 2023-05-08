import { IsNotEmpty, IsOptional } from "class-validator";
import { ObjectId } from "mongodb";

export class CreateJogoDto {
  @IsNotEmpty()
  link: string;

  @IsNotEmpty()
  materia: string;
}


export class UpdateJogoDto {
  @IsOptional()
  @IsNotEmpty()
  link: string;

  @IsOptional()
  @IsNotEmpty()
  materia: string;
}