import { getRepository, Repository } from 'typeorm';

import { ICreateMunicipioDTO } from '../../../dtos/ICreateMunicipioDTO';
import { IMunicipioRepository } from '../../../repositories/IMunicipioRepository';
import { Municipio } from '../entities/Municipio';

class MunicipioRepository implements IMunicipioRepository {
  private repository: Repository<Municipio>;

  constructor() {
    this.repository = getRepository(Municipio);
  }

  async create({ nome, populacao }: ICreateMunicipioDTO): Promise<void> {
    const municipio = this.repository.create({ nome, populacao });
    await this.repository.save(municipio);
  }

  async findById(municipio_id: string): Promise<Municipio> {
    const municipio = await this.repository.findOne(municipio_id);
    return municipio;
  }
}

export { MunicipioRepository };