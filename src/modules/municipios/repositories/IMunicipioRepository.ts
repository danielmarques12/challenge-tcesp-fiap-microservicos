import { ICreateMunicipioDTO } from '../dtos/ICreateMunicipioDTO';
import { Municipio } from '../infra/typeorm/entities/Municipio';

interface IMunicipioRepository {
  create(data: ICreateMunicipioDTO): Promise<void>;
  findById(municipio_id: string): Promise<Municipio>;
}

export { IMunicipioRepository };
