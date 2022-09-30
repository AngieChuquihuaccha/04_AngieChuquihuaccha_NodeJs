import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteController } from './controllers/cliente.controller';
import { ClienteEntity } from './entities/cliente.entity';
import { ClienteService } from './services/cliente.service';
import { UbigeoController } from './controllers/ubigeo.controller';
import { UbigeoService } from './services/ubigeo.service';
import { UbigeoEntity } from './entities/ubigeo.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'oracle',
      host: 'localhost',
      port: 1521,
      username: 'USER_ORA',
      password: '12345',
      sid: 'xe',
      entities: [__dirname + '/**/**.entity{.ts,.js}'],
      synchronize: false,
      logging: true,
    }),
    TypeOrmModule.forFeature([ClienteEntity, UbigeoEntity]),
  ],
  controllers: [AppController, ClienteController, UbigeoController],
  providers: [AppService, ClienteService, UbigeoService],
})
export class AppModule {}
