import { Inject, Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClienteEntidad } from 'src/entities/client.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClienteServicio {
    constructor(
        @InjectRepository(ClienteEntidad)
        private clienteRepositorio: Repository<ClienteEntidad>,
    ){}

    public async crearNuevoClient(nuevoCliente: ClienteEntidad){
        return await this.clienteRepositorio.save(nuevoCliente);
    }

    public async obtenerTodosClientes(){
        return await this.clienteRepositorio.find({relations: ['telefonos', 'direcciones']});
    }
}