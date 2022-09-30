import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClienteEntity } from 'src/entities/cliente.entity';
import { ClienteService } from 'src/services/cliente.service';

@Controller('cliente')
export class ClienteController {
  constructor(private clienteService: ClienteService) {}
  @Post()
  register(@Body() cliente: ClienteEntity) {
    return this.clienteService.register(cliente);
  }
  @Get()
  async findAll(): Promise<ClienteEntity[]> {
    return this.clienteService.findAll();
  }
}
