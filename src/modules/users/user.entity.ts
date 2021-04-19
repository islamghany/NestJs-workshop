import { OneToMany, Entity, Column } from 'typeorm';
import { Post } from '../posts/post.entity';
import { BaseColumns } from 'src/common/entities/base.entity';

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  GHOST = 'ghost',
}

@Entity('users')
export class User extends BaseColumns {
  @Column({ type: 'varchar', unique: true, length: 30, nullable: false })
  username: string;

  @Column({ type: 'varchar', length: 256, nullable: false, unique: true })
  email: string;

  @Column({ type: 'text', nullable: false })
  password: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.USER })
  role: UserRole;

  @OneToMany((type) => Post, (post) => post.user, { onDelete: 'CASCADE' })
  posts: Post[];
}
