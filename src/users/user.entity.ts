import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum UserRole {
    ADMIN = "admin",
    USER = "user",
    GHOST = "ghost"
}

@Entity('users')
export class User{
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column({type:'varchar', unique:true, length:30, nullable:false})
    username:string

    @Column({type:'varchar',length:256, nullable:false, unique:true})

    @Column({type:'text',nullable:false})
    password:string

    @Column({type:"enum",enum:UserRole, default:UserRole.USER})
    role:UserRole

    @Column({type:'timestamp', default:()=> 'NOW()'})
    created_at:string;

    @Column({type:'timestamp', default:()=> 'NOW()'})
    updated_at:string
}