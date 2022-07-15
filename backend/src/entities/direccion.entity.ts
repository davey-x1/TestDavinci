import { Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import { ClienteEntidad } from './client.entity';
// -------------------------------------------
@Entity('direccion')
// -------------------------------------------
export class DireccionEntidad{
    @PrimaryGeneratedColumn()
    id_direccion: number;

    @Column('varchar', { length: 250 })
    direccion: string;

    @ManyToOne(() => ClienteEntidad, cliente => cliente.direcciones)
    cliente: ClienteEntidad;
}