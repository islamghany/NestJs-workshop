import {Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn} from 'typeorm'
import { User } from 'src/users/user.entity';

@Entity('posts')
export class Post extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column({type:'varchar',length:256,nullable:true})
    caption:string;

    @Column({type:'text',nullable:false})
    url:string;
    
    @ManyToOne(type=>User, user => user.posts)
    @JoinColumn({name:'user_id'})
    user:User;

    @CreateDateColumn({name:'created_at',type:'timestamp',nullable:false})
    createdAt:Date;

    @UpdateDateColumn({name:'updated_at',type:'timestamp',nullable:true,})
    updatedAt:Date;
}