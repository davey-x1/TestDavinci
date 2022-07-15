import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DireccionController } from 'src/controllers/direccion.controller';
import { DireccionEntidad } from 'src/entities/direccion.entity';
import { DireccionServicio } from 'src/services/direccion.service';

@Module({
  imports: [TypeOrmModule.forFeature([DireccionEntidad])],
  exports: [DireccionServicio],
  controllers: [DireccionController],
  providers: [DireccionServicio]
})

export class DireccionModulo {}