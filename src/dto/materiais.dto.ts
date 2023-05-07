import { IsNotEmpty, IsOptional} from "class-validator";


export class CreateMaterialDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  file: string;

  @IsNotEmpty()
  materia: string;
}

export class UpdateMaterialDto {
  @IsOptional()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsNotEmpty()
  file: string;

  @IsOptional()
  @IsNotEmpty()
  materia: string;

}