import { IsNotEmpty, IsOptional} from "class-validator";


export class CreateMateriaDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;
}

export class UpdateMateriaDto {
  @IsOptional()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsNotEmpty()
  description: string;
}