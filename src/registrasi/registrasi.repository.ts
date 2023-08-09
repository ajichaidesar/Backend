import { EntityRepository, Repository } from 'typeorm';
import { Registrasi } from './entities/registrasi.entity';

@EntityRepository(Registrasi)
export class RegistrasiRepository extends Repository<Registrasi> {}
