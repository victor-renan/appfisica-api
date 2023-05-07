import { ConflictException, Injectable, Logger, NotFoundException } from "@nestjs/common";
import { CreateMaterialDto, UpdateMaterialDto } from "dto/materiais.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { MongoRepository } from "typeorm";
import { Material } from "models/material.entity";
import { ObjectId } from "mongodb";
import { Materia } from "models/materia.entity";

@Injectable()
export class MateriaisService {
  constructor(
    @InjectRepository(Material)
    private materiaisRepository: MongoRepository<Material>,
    @InjectRepository(Materia)
    private materiasRepository: MongoRepository<Materia>
  ) { }

  private logger = new Logger(MateriaisService.name);

  async getAllMateriais(): Promise<Material[]> {
    this.logger.log("Get all materiais")
    return await this.materiaisRepository.find();
  }

  async getMaterialById(id: string): Promise<Material> {
    this.logger.log(`Get material with id ${id}`);
    const material = await this.materiaisRepository.findOneBy({ _id: new ObjectId(id) });
    if (!material) throw new NotFoundException(
      `Material de ID: ${id} não encontrado!`
    );

    return material;
  }

  async createMaterial(material: CreateMaterialDto): Promise<Material> {
    this.logger.log(`Create a material`);
    const nameExists = await this.materiaisRepository.findOneBy({ name: material.name });
    if (nameExists) throw new ConflictException(
      `Uma material com esse nome já existe!`
    );
    const { materia, ...partial } = material;

    const findMateria = await this.materiasRepository.findOneBy({ _id: new ObjectId(materia) })

    if (!findMateria) throw new NotFoundException(
      `Matéria de ID: ${materia} não existe!`
    );
    const newMaterial = this.materiaisRepository.create({ ...partial, materia })

    return await this.materiaisRepository.save(newMaterial);
  }

  async updateMaterial(id: string, update: UpdateMaterialDto): Promise<Material> {
    this.logger.log(`Update material ${id}`)
    const material = await this.getMaterialById(id);
    if (!material) throw new NotFoundException(
      `Material ID: ${id} não encontrado!`
    );
    const { materia, ...partial } = update;

    const findMateria = await this.materiasRepository.findOneBy({ _id: new ObjectId(materia) });

    if (!findMateria) throw new NotFoundException(
      `Matéria de ID: ${materia} não existe!`
    );
    await this.materiaisRepository.update(
      { _id: new ObjectId(id) }, { ...partial, materia }
    );

    return await this.getMaterialById(id);
  }

  async deleteMaterial(id: string): Promise<Material> {
    this.logger.log(`Delete material ${id}`);
    const material = await this.getMaterialById(id);
    if (!material) throw new NotFoundException(
      `Material de ID: ${id} não encontrado!`
    );
    await this.materiaisRepository.delete({ _id: new ObjectId(id) });

    return material;
  }
}