import { Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import { ClienteEntidad } from './client.entity';
// -------------------------------------------
@Entity('telefono')
// -------------------------------------------
export class TelefonoEntidad{
    @PrimaryGeneratedColumn()
    id_telefono: number;

    @Column('varchar', { length: 250 })
    telefono: string;

    @ManyToOne(() => ClienteEntidad, cliente => cliente.telefonos)
    cliente: ClienteEntidad;
}