import { InjectRepository } from '@nestjs/typeorm';
import { ClienteEntity } from 'src/entities/cliente.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(ClienteEntity)
    private clienteRepository: Repository<ClienteEntity>,
  ) {}
  register(cliente: ClienteEntity) {
    return this.clienteRepository.save(cliente);
  }

  update(cliente: ClienteEntity) {
    return this.clienteRepository.save(cliente);
  }

  findAll() {
    return this.clienteRepository.find();
  }

  delete(idcli: number) {
    return this.clienteRepository.delete(idcli);
  }

  findById(idcli: number) {
    return this.clienteRepository.findBy({ idcli });
  }
}
