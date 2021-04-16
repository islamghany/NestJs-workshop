import {Column,PrimaryGeneratedColumn, ManyToMany} from 'typeorm'
import { Coffee } from './coffee.entity';
export class Flavor {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @ManyToMany(type=>Coffee, coffee=>coffee.flavors)
    coffees:Coffee[];
}
