import { Body, Controller, Get, Post, Render, Param, Redirect, Query } from '@nestjs/common';
import { get } from 'http';
import { ClienteEntidad } from 'src/entities/client.entity';
import { DireccionEntidad } from 'src/entities/direccion.entity';
import { TelefonoEntidad } from 'src/entities/telefono.entity';

import { ClienteServicio } from 'src/services/client.service';
import { DireccionServicio } from 'src/services/direccion.service';
import { TelefonoServicio } from 'src/services/telefono.service';

@Controller('client')
export class ClienteController {
    constructor(
        public clientService: ClienteServicio,
        public telefonoService: TelefonoServicio,
        public direccionService: DireccionServicio
    ){}

    @Post('create')
    public async crearNuevoCliente(@Body() cliente): Promise<any>{
        console.log(cliente);
        
        var nuevoCliente = new ClienteEntidad;

        var telefonoArray = cliente.telefonos;
        var direccionesArray = cliente.direcciones;
        nuevoCliente.nombre = cliente.nombre;
        nuevoCliente.apellido = cliente.apellido;
        nuevoCliente.telefonos = [];
        nuevoCliente.direcciones = [];
        
        nuevoCliente = await this.clientService.crearNuevoClient(nuevoCliente);

        telefonoArray.forEach((telefono) => {
            let nuevoTelefono = new TelefonoEntidad;
            nuevoTelefono.telefono = telefono;
            nuevoTelefono.cliente = nuevoCliente;
            this.telefonoService.crearNuevoTelefono(nuevoTelefono);
            nuevoCliente.telefonos.push(nuevoTelefono);
        });

        console.log("Loggin telefonos: ");
        console.log(nuevoCliente.telefonos);

        direccionesArray.forEach((direccion) => {
            let nuevaDireccion = new DireccionEntidad;
            nuevaDireccion.direccion = direccion;
            nuevaDireccion.cliente = nuevoCliente;
            nuevoCliente.direcciones.push(nuevaDireccion);
            this.direccionService.crearNuevaDireccion(nuevaDireccion);
        });

        console.log("Just logging!!");
        console.log(nuevoCliente.telefonos);
        this.clientService.crearNuevoClient(nuevoCliente);
    }

    @Get('find')
    public async obtenerClientes(): Promise<any>{
        var clientesHallados = await this.clientService.obtenerTodosClientes();
        console.log(clientesHallados);
        return clientesHallados;
    }

    @Get('getTelefonos')
    public async obtenerTelefonos(): Promise<any>{
        var clientesHallados = await this.telefonoService.obtenerTodosTelefonos();
        console.log(clientesHallados);
        return clientesHallados;
    }

    @Get('getDirecciones')
    public async obtenerDirecciones(): Promise<any>{
        var clientesHallados = await this.direccionService.obtenerTodasDirecciones();
        console.log(clientesHallados);
        return clientesHallados;
    }
}