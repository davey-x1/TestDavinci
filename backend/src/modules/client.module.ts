import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteController } from 'src/controllers/client.controller';
import { ClienteEntidad } from 'src/entities/client.entity';
import { DireccionEntidad } from 'src/entities/direccion.entity';
import { TelefonoEntidad } from 'src/entities/telefono.entity';
import { ClienteServicio } from 'src/services/client.service';
import { DireccionServicio } from 'src/services/direccion.service';
import { TelefonoServicio } from 'src/services/telefono.service';

@Module({
  imports: [TypeOrmModule.forFeature([ClienteEntidad, TelefonoEntidad, DireccionEntidad])],
  exports: [ClienteServicio, TelefonoServicio, DireccionServicio],
  controllers: [ClienteController],
  providers: [ClienteServicio, TelefonoServicio, DireccionServicio]
})
export class ClienteModulo {}