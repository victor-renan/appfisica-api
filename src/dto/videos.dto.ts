import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateVideoDto {
  @IsNotEmpty()
  videoId: string;

  @IsNotEmpty()
  materia: string;
}


export class UpdateVideoDto {
  @IsOptional()
  @IsNotEmpty()
  videoId: string;

  @IsOptional()
  @IsNotEmpty()
  materia: string;
}