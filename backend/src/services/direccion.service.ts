import { Inject, Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DireccionEntidad } from 'src/entities/direccion.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DireccionServicio {
    constructor(
        @InjectRepository(DireccionEntidad)
        private direccionRepositorio: Repository<DireccionEntidad>,
    ){}

    public async crearNuevaDireccion(nuevaDireccion: DireccionEntidad){
        this.direccionRepositorio.save(nuevaDireccion);
    }

    public async obtenerTodasDirecciones(){
        return this.direccionRepositorio.find({relations: ['cliente']});
    }
}