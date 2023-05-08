import { Body, Get, Param, Post } from "@nestjs/common";
import { Controller } from "@nestjs/common";
import { IdException } from "exceptions/id.exception";
import { Materia } from "models/materia.entity";
import { MateriasService } from "services/materias.service";
import { CreateMateriaDto, UpdateMateriaDto } from "dto/materias.dto";


@Controller('materias')
export class MateriasController {
  constructor(private readonly materiasService: MateriasService) {}

  @Get('find/')
  async getAll(): Promise<Materia[]> {
    return await this.materiasService.getAllMaterias();
  }

  @Get('find/:id')
  async getOne(@Param('id') id: string): Promise<Materia> {
    if (id.length < 12) throw new IdException();
    return await this.materiasService.getMateriaById(id);
  }

  @Get('byname/:name')
  async getByName(@Param('name') name: string): Promise<Materia> {
    return await this.materiasService.getMateriaByName(name);
  }

  @Post('create/')
  async createMateria(@Body() materia: CreateMateriaDto): Promise<Materia> {
    return await this.materiasService.createMateria(materia);
  }

  @Post('update/:id')
  async updateMateria(@Param('id') id: string, @Body() update: UpdateMateriaDto): Promise<Materia> {
    if (id.length < 12) throw new IdException();
    return await this.materiasService.updateMateria(id, update);
  }

  @Post('delete/:id')
  async deleteMateria(@Param('id') id: string): Promise<Materia> {
    if (id.length < 12) throw new IdException();
    return await this.materiasService.deleteMateria(id);
  }
}