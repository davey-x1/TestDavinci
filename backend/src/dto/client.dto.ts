import { DireccionDTO } from "./direccion.dto";
import { TelefonoDTO } from "./telefono.dto";

export class ClienteDTO{
    readonly id_cliente: number;
    readonly nombre: string;
    readonly apellido: string;
    readonly telefonos: TelefonoDTO[];
    readonly direcciones: DireccionDTO[];
}