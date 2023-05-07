import { IsNotEmpty, IsOptional} from "class-validator";


export class CreateAtividadeDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  file: string;

  @IsNotEmpty()
  materia: string;
}

export class UpdateAtividadeDto {
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