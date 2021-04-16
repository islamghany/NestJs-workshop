import {Entity, PrimaryGeneratedColumn, ManyToMany,Column, JoinTable} from 'typeorm';
import { Flavor } from './flavor.entity';

@Entity() // sql table = coffee
export class Coffee{
    @PrimaryGeneratedColumn()
    id:number; //table column

    @Column()
    name:string;

    @Column()
    brand:string;

    @JoinTable()
    @ManyToMany(
        type => Flavor,
        falvor=>falvor.coffees,
        {
            cascade:true
        }
        )
    flavors:string[];
}