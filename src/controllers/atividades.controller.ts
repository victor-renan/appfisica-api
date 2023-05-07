import { Body, Get, Param, Post } from "@nestjs/common";
import { Controller } from "@nestjs/common";
import { IdException } from "exceptions/id.exception";
import { Atividade } from "models/atividade.entity";
import { AtividadesService } from "services/atividades.service";
import { CreateAtividadeDto, UpdateAtividadeDto } from "dto/atividades.dto";


@Controller('atividades')
export class AtividadesController {
  constructor(private readonly atividadesService: AtividadesService) {}

  @Get('find/')
  async getAll(): Promise<Atividade[]> {
    return await this.atividadesService.getAllAtividades();
  }

  @Get('find/:id')
  async getOne(@Param('id') id: string): Promise<Atividade> {
    if (id.length < 12) throw new IdException();
    return await this.atividadesService.getAtividadeById(id);
  }

  @Post('create/')
  async createAtividade(@Body() user: CreateAtividadeDto): Promise<Atividade> {
    return await this.atividadesService.createAtividade(user);
  }

  @Post('update/:id')
  async updateAtividade(@Param('id') id: string, @Body() update: UpdateAtividadeDto): Promise<Atividade> {
    if (id.length < 12) throw new IdException();
    return await this.atividadesService.updateAtividade(id, update);
  }

  @Post('delete/:id')
  async deleteAtividade(@Param('id') id: string): Promise<Atividade> {
    if (id.length < 12) throw new IdException();
    return await this.atividadesService.deleteAtividade(id);
  }
}