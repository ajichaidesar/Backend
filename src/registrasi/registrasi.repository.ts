import { EntityRepository, Repository } from 'typeorm';
import { Registrasis } from './entities/registrasi.entity';

@EntityRepository(Registrasis)
export class RegistrasiRepository extends Repository<Registrasis> {}
