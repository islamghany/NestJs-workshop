import { 
    OneToMany,
    Entity,
     PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BaseEntity, JoinColumn } from 'typeorm';
import { type } from 'os';
import { Post } from 'src/posts/post.entity';

export enum UserRole {
    ADMIN = "admin",
    USER = "user",
    GHOST = "ghost"
}

@Entity('users')
export class User extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column({type:'varchar', unique:true, length:30, nullable:false})
    username:string

    @Column({type:'varchar',length:256, nullable:false, unique:true})
    email:string;
    
    @Column({type:'text',nullable:false})
    password:string

    @Column({type:"enum",enum:UserRole, default:UserRole.USER})
    role:UserRole

    @OneToMany(type => Post, post => post.user,{onDelete:'CASCADE'})
    posts:Post[];

    @CreateDateColumn({name:'created_at',type:'timestamp',nullable:false})
    createdAt:Date

    @UpdateDateColumn({name:'updated_at',type:'timestamp',nullable:true})
    updatedAt:Date

}