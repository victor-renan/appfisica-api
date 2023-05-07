import { Injectable, Logger } from "@nestjs/common";
import { MongoRepository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Materia } from "models/materia.entity";
import { ObjectId } from "mongodb";
import { CreateMateriaDto, UpdateMateriaDto } from "dto/materias.dto";
import { NotFoundException, ConflictException } from "@nestjs/common";


@Injectable()
export class MateriasService {
  constructor(
    @InjectRepository(Materia)
    private materiasRepository: MongoRepository<Materia>
  ) { }

  private logger = new Logger(MateriasService.name);

  async getAllMaterias(): Promise<Materia[]> {
    this.logger.log("Get all materias");
    return await this.materiasRepository.find();
  }

  async getMateriaById(id: string): Promise<Materia> {
    this.logger.log(`Get the materia with id ${id}`);
    const materia = await this.materiasRepository.findOneBy({ _id: new ObjectId(id) });
    if (!materia) throw new NotFoundException(
      `Materia com ID: ${id} não existe!`
    );
    return materia;
  }

  async createMateria(materia: CreateMateriaDto): Promise<Materia> {
    this.logger.log("Creates a materia")
    const nameExists = await this.materiasRepository.findOneBy(
      { name: materia.name }
    );
    if (nameExists) throw new ConflictException(
      `Materia com este nome já existe!`
    );
    const newMateria = this.materiasRepository.create({...materia})
    return await this.materiasRepository.save(newMateria);
  }

  async updateMateria(id: string, update: UpdateMateriaDto): Promise<Materia> {
    this.logger.log(`Update materia ${id}`)
    const materia = await this.getMateriaById(id);
    if (!materia) throw new NotFoundException (
      `Matériade ID: ${id} não encontrada!`
    );
    await this.materiasRepository.update(
      {_id: new ObjectId(id)}, {...update}
    );

    return await this.getMateriaById(id);
  }

  async deleteMateria(id: string): Promise<Materia> {
    this.logger.log(`Delete materia ${id}`);
    const materia = this.getMateriaById(id);
    if (!materia) throw new NotFoundException (
      `Materia de ID: ${id} não encontrada!`
    );
    await this.materiasRepository.delete({ _id: new ObjectId(id) });

    return materia;
  }
}