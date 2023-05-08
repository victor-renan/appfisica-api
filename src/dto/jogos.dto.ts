import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateJogoDto {
  @IsNotEmpty()
  link: string;

  @IsNotEmpty()
  materia: string;

  @IsNotEmpty()
  name: string;
}


export class UpdateJogoDto {
  @IsOptional()
  @IsNotEmpty()
  link: string;

  @IsOptional()
  @IsNotEmpty()
  materia: string;

  @IsNotEmpty()
  @IsOptional()
  name: string;
}