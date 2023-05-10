import { Body, Get, Param, Post } from "@nestjs/common";
import { Controller } from "@nestjs/common";
import { IdException } from "exceptions/id.exception";
import { Destaque } from "models/destaque.entity";
import { DestaquesService } from "services/destaques.service";
import { CreateDestaqueDto, UpdateDestaqueDto } from "dto/destaques.dto";


@Controller('destaques')
export class DestaquesController {
  constructor(private readonly destaquesService: DestaquesService) {}

  @Get('find/')
  async getAll(): Promise<Destaque[]> {
    return await this.destaquesService.getAllDestaques();
  }

  @Get('find/:id')
  async getOne(@Param('id') id: string): Promise<Destaque> {
    if (id.length < 12) throw new IdException();
    return await this.destaquesService.getDestaqueById(id);
  }

  @Get('byname/:name')
  async getByName(@Param('name') name: string): Promise<Destaque> {
    return await this.destaquesService.getDestaqueByName(name);
  }

  @Post('create/')
  async createDestaque(@Body() materia: CreateDestaqueDto): Promise<Destaque> {
    return await this.destaquesService.createDestaque(materia);
  }

  @Post('update/:id')
  async updateDestaque(@Param('id') id: string, @Body() update: UpdateDestaqueDto): Promise<Destaque> {
    if (id.length < 12) throw new IdException();
    return await this.destaquesService.updateDestaque(id, update);
  }

  @Post('delete/:id')
  async deleteDestaque(@Param('id') id: string): Promise<Destaque> {
    if (id.length < 12) throw new IdException();
    return await this.destaquesService.deleteDestaque(id);
  }
}