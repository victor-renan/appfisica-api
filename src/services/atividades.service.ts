import { InjectRepository } from "@nestjs/typeorm";
import { MongoRepository } from "typeorm";
import { ConflictException, Injectable, Logger, NotFoundException } from "@nestjs/common";
import { Atividade } from "models/atividade.entity";
import { ObjectId } from "mongodb";
import { CreateAtividadeDto, UpdateAtividadeDto } from "dto/atividades.dto";
import { Materia } from "models/materia.entity";

@Injectable()
export class AtividadesService {
  constructor(
    @InjectRepository(Atividade)
    private atividadesRepository: MongoRepository<Atividade>,
    @InjectRepository(Materia)
    private materiasRepository: MongoRepository<Materia>
  ) { }

  private logger = new Logger(AtividadesService.name);

  async getAllAtividades(): Promise<Atividade[]> {
    this.logger.log("Get all atividades")
    return await this.atividadesRepository.find();
  }

  async getAtividadeById(id: string): Promise<Atividade> {
    this.logger.log(`Get atividade with id ${id}`);
    const atividade = await this.atividadesRepository.findOneBy({ _id: new ObjectId(id) });
    if (!atividade) throw new NotFoundException(
      `Atividade de ID: ${id} não encontrada!`
    );

    return atividade;
  }

  async createAtividade(atividade: CreateAtividadeDto): Promise<Atividade> {
    this.logger.log(`Create a atividade`);
    const nameExists = await this.atividadesRepository.findOneBy({ name: atividade.name });
    if (nameExists) throw new ConflictException(
      `Uma atividade com esse nome já existe!`
    );
    const { materia, ...partial } = atividade;

    const findMateria = await this.materiasRepository.findOneBy({ name: materia })

    if (!findMateria) throw new NotFoundException(
      `Matéria de Nome: ${materia} não existe!`
    );
    const newAtividade = this.atividadesRepository.create({ ...partial, materia })

    return await this.atividadesRepository.save(newAtividade);
  }

  async updateAtividade(id: string, update: UpdateAtividadeDto): Promise<Atividade> {
    this.logger.log(`Update atividade ${id}`)
    const atividade = await this.getAtividadeById(id);
    if (!atividade) throw new NotFoundException(
      `Atividade ID: ${id} não encontrada!`
    );
    const { materia, ...partial } = update;

    const findMateria = await this.materiasRepository.findOneBy({ name: materia });

    if (!findMateria) throw new NotFoundException(
      `Matéria de Nome: ${materia} não existe!`
    );
    await this.atividadesRepository.update(
      { _id: new ObjectId(id) }, { ...partial, materia }
    );

    return await this.getAtividadeById(id);
  }

  async deleteAtividade(id: string): Promise<Atividade> {
    this.logger.log(`Delete atividade ${id}`);
    const atividade = await this.getAtividadeById(id);
    if (!atividade) throw new NotFoundException(
      `Atividade de ID: ${id} não encontrada!`
    );
    await this.atividadesRepository.delete({ _id: new ObjectId(id) });

    return atividade;
  }
}