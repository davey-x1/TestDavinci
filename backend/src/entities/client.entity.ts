import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import { DireccionEntidad } from './direccion.entity';
import { TelefonoEntidad } from './telefono.entity';
// -------------------------------------------
@Entity('cliente')
// -------------------------------------------
export class ClienteEntidad{
    @PrimaryGeneratedColumn()
    id_cliente: number;

    @Column('varchar', 
    {length: 250, nullable: true})
    nombre: string;

    @Column('varchar', {length: 250, nullable: true})
    apellido: string;

    @OneToMany(() => TelefonoEntidad, telefono => telefono.cliente)
    telefonos: TelefonoEntidad[];

    @OneToMany(() => DireccionEntidad, direccion => direccion.cliente)
    direcciones: DireccionEntidad[];
}