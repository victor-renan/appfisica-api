import { Injectable, Logger } from "@nestjs/common";
import { MongoRepository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Destaque } from "models/destaque.entity";
import { ObjectId } from "mongodb";
import { CreateDestaqueDto, UpdateDestaqueDto } from "dto/destaques.dto";
import { NotFoundException, ConflictException } from "@nestjs/common";


@Injectable()
export class DestaquesService {
  constructor(
    @InjectRepository(Destaque)
    private destaquesRepository: MongoRepository<Destaque>
  ) { }

  private logger = new Logger(DestaquesService.name);

  async getAllDestaques(): Promise<Destaque[]> {
    this.logger.log("Get all destaques");
    return await this.destaquesRepository.find();
  }

  async getDestaqueById(id: string): Promise<Destaque> {
    this.logger.log(`Get the destaque with id ${id}`);
    const destaque = await this.destaquesRepository.findOneBy({ _id: new ObjectId(id) });
    if (!destaque) throw new NotFoundException(
      `Destaque com ID: ${id} não existe!`
    );
    return destaque;
  }

  async getDestaqueByName(name: string): Promise<Destaque> {
    this.logger.log(`Get the destaque with Name ${name}`);
    const destaque = await this.destaquesRepository.findOneBy({ name: name });
    if (!destaque) throw new NotFoundException(
      `Destaque com Nome: ${name} não existe!`
    );
    return destaque;
  }

  async createDestaque(destaque: CreateDestaqueDto): Promise<Destaque> {
    this.logger.log("Creates a destaque")
    const nameExists = await this.destaquesRepository.findOneBy(
      { name: destaque.name }
    );
    if (nameExists) throw new ConflictException(
      `Destaque com este nome já existe!`
    );
    const newDestaque = this.destaquesRepository.create({...destaque})
    return await this.destaquesRepository.save(newDestaque);
  }

  async updateDestaque(id: string, update: UpdateDestaqueDto): Promise<Destaque> {
    this.logger.log(`Update destaque ${id}`)
    const destaque = await this.getDestaqueById(id);
    if (!destaque) throw new NotFoundException (
      `Matériade ID: ${id} não encontrada!`
    );
    await this.destaquesRepository.update(
      {_id: new ObjectId(id)}, {...update}
    );

    return await this.getDestaqueById(id);
  }

  async deleteDestaque(id: string): Promise<Destaque> {
    this.logger.log(`Delete destaque ${id}`);
    const destaque = this.getDestaqueById(id);
    if (!destaque) throw new NotFoundException (
      `Destaque de ID: ${id} não encontrada!`
    );
    await this.destaquesRepository.delete({ _id: new ObjectId(id) });

    return destaque;
  }
}