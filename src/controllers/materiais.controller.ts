import { Body, Get, Param, Post } from "@nestjs/common";
import { Controller } from "@nestjs/common";
import { IdException } from "exceptions/id.exception";
import { Material } from "models/material.entity";
import { MateriaisService } from "services/materiais.service";
import { CreateMaterialDto, UpdateMaterialDto } from "dto/materiais.dto";


@Controller('materiais')
export class MateriaisController {
  constructor(private readonly materiaisService: MateriaisService) {}

  @Get('find/')
  async getAll(): Promise<Material[]> {
    return await this.materiaisService.getAllMateriais();
  }

  @Get('find/:id')
  async getOne(@Param('id') id: string): Promise<Material> {
    if (id.length < 12) throw new IdException();
    return await this.materiaisService.getMaterialById(id);
  }

  @Post('create/')
  async createMaterial(@Body() material: CreateMaterialDto): Promise<Material> {
    return await this.materiaisService.createMaterial(material);
  }

  @Post('update/:id')
  async updateMaterial(@Param('id') id: string, @Body() update: UpdateMaterialDto): Promise<Material> {
    if (id.length < 12) throw new IdException();
    return await this.materiaisService.updateMaterial(id, update);
  }

  @Post('delete/:id')
  async deleteMaterial(@Param('id') id: string): Promise<Material> {
    if (id.length < 12) throw new IdException();
    return await this.materiaisService.deleteMaterial(id);
  }
}