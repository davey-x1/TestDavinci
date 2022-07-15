import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TelefonoController } from 'src/controllers/telefono.controller';
import { TelefonoEntidad } from 'src/entities/telefono.entity';
import { TelefonoServicio } from 'src/services/telefono.service';

@Module({
  imports: [TypeOrmModule.forFeature([TelefonoEntidad])],
  exports: [TelefonoServicio],
  controllers: [TelefonoController],
  providers: [TelefonoServicio]
})
export class TelefonoModulo {}