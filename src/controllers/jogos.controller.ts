import { Body, Get, Param, Post } from "@nestjs/common";
import { Controller } from "@nestjs/common";
import { IdException } from "exceptions/id.exception";
import { Jogo } from "models/jogo.entity";
import { JogosService } from "services/jogos.service";
import { CreateJogoDto, UpdateJogoDto } from "dto/jogos.dto";


@Controller('jogos')
export class JogosController {
  constructor(private readonly jogosService: JogosService) {}

  @Get('find/')
  async getAll(): Promise<Jogo[]> {
    return await this.jogosService.getAllJogos();
  }

  @Get('find/:id')
  async getOne(@Param('id') id: string): Promise<Jogo> {
    if (id.length < 12) throw new IdException();
    return await this.jogosService.getJogoById(id);
  }

  @Post('create/')
  async createJogo(@Body() jogo: CreateJogoDto): Promise<Jogo> {
    return await this.jogosService.createJogo(jogo);
  }

  @Post('update/:id')
  async updateJogo(@Param('id') id: string, @Body() update: UpdateJogoDto): Promise<Jogo> {
    if (id.length < 12) throw new IdException();
    return await this.jogosService.updateJogo(id, update);
  }

  @Post('delete/:id')
  async deleteJogo(@Param('id') id: string): Promise<Jogo> {
    if (id.length < 12) throw new IdException();
    return await this.jogosService.deleteJogo(id);
  }
}