import { Inject, Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TelefonoEntidad } from 'src/entities/telefono.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TelefonoServicio {
    constructor(
        @InjectRepository(TelefonoEntidad)
        private telefonoRepositorio: Repository<TelefonoEntidad>,
    ){}

    public async crearNuevoTelefono(nuevoTelefono: TelefonoEntidad){
        this.telefonoRepositorio.save(nuevoTelefono);
    }

    public async obtenerTodosTelefonos(){
        return this.telefonoRepositorio.find({relations: ['cliente']});
    }
}