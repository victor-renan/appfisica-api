import { ConflictException, Injectable, Logger, NotFoundException } from "@nestjs/common";
import { CreateJogoDto, UpdateJogoDto } from "dto/jogos.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { MongoRepository } from "typeorm";
import { Jogo } from "models/jogo.entity";
import { ObjectId } from "mongodb";
import { Materia } from "models/materia.entity";

@Injectable()
export class JogosService {
  constructor(
    @InjectRepository(Jogo)
    private jogosRepository: MongoRepository<Jogo>,
    @InjectRepository(Materia)
    private materiasRepository: MongoRepository<Materia>
  ) { }

  private logger = new Logger(JogosService.name);

  async getAllJogos(): Promise<Jogo[]> {
    this.logger.log("Get all jogos")
    return await this.jogosRepository.find();
  }

  async getJogoById(id: string): Promise<Jogo> {
    this.logger.log(`Get jogo with id ${id}`);
    const jogo = await this.jogosRepository.findOneBy({ _id: new ObjectId(id) });
    if (!jogo) throw new NotFoundException(
      `Jogo de ID: ${id} não encontrado!`
    );

    return jogo;
  }

  async createJogo(jogo: CreateJogoDto): Promise<Jogo> {
    this.logger.log(`Create a jogo`);
    const nameExists = await this.jogosRepository.findOneBy({ link: jogo.link });
    if (nameExists) throw new ConflictException(
      `Uma jogo com esse link já existe!`
    );
    const { materia, ...partial } = jogo;

    const findMateria = await this.materiasRepository.findOneBy({ name: materia })

    if (!findMateria) throw new NotFoundException(
      `Matéria de Nome: ${materia} não existe!`
    );
    const newJogo = this.jogosRepository.create({ ...partial, materia })

    return await this.jogosRepository.save(newJogo);
  }

  async updateJogo(id: string, update: UpdateJogoDto): Promise<Jogo> {
    this.logger.log(`Update jogo ${id}`)
    const jogo = await this.getJogoById(id);
    if (!jogo) throw new NotFoundException(
      `Jogo de jogoId: ${id} não encontrado!`
    );
    const { materia, ...partial } = update;

    const findMateria = await this.materiasRepository.findOneBy({ name: materia });

    if (!findMateria) throw new NotFoundException(
      `Matéria de Nome: ${materia} não existe!`
    );
    await this.jogosRepository.update(
      { _id: new ObjectId(id) }, { ...partial, materia }
    );

    return await this.getJogoById(id);
  }

  async deleteJogo(id: string): Promise<Jogo> {
    this.logger.log(`Delete jogo ${id}`);
    const jogo = await this.getJogoById(id);
    if (!jogo) throw new NotFoundException(
      `Jogo de ID: ${id} não encontrado!`
    );
    await this.jogosRepository.delete({ _id: new ObjectId(id) });

    return jogo;
  }
}