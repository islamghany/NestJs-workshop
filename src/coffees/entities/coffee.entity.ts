import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity() // sql table = coffee
export class Coffee{
    @PrimaryGeneratedColumn()
    id:number; //table column

    @Column()
    name:string;

    @Column()
    brand:string;

    @Column('json',{nullable:true})
    flavors:string[];
}