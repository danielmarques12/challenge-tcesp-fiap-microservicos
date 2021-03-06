import { getRepository, Repository } from 'typeorm';

import { ICreateMunicipioDTO } from '../../../dtos/ICreateMunicipioDTO';
import { IMunicipioRepository } from '../../../repositories/IMunicipioRepository';
import { Municipio } from '../entities/Municipio';

class MunicipioRepository implements IMunicipioRepository {
  private repository: Repository<Municipio>;

  constructor() {
    this.repository = getRepository(Municipio);
  }

  async create({ nome, populacao }: ICreateMunicipioDTO): Promise<Municipio> {
    const municipio = this.repository.create({ nome, populacao });
    await this.repository.save(municipio);
    return municipio;
  }

  async listAll(): Promise<Municipio[]> {
    const municipios = await this.repository.find();
    return municipios;
  }
}

export { MunicipioRepository };
