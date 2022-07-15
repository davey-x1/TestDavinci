import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'

import { ClienteEntidad } from './entities/client.entity';
import { DireccionEntidad } from './entities/direccion.entity';
import { TelefonoEntidad } from './entities/telefono.entity';

import { ClienteServicio } from './services/client.service';
import { TelefonoServicio } from './services/telefono.service';
import { DireccionServicio } from './services/direccion.service';

import { ClienteModulo } from './modules/client.module';
import { TelefonoModulo } from './modules/telefono.module';
import { DireccionModulo } from './modules/direccion.module';
import { ClienteController } from './controllers/client.controller';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'oracle',
    host: 'localhost',
    port: 1521,
    username: 'DAVEY',
    password: '1234',
    sid: "xe",
    entities: [
      ClienteEntidad,
      DireccionEntidad,
      TelefonoEntidad
    ],
    synchronize: true,
    logging: true
  }),
  ClienteModulo,
  DireccionModulo,
  TelefonoModulo
],

  controllers: [
    AppController,

  ],

  providers: [
    AppService,
  ]
})


export class AppModule {}
