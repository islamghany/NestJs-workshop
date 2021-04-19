import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from 'src/modules/users/user.entity';
import { BaseColumns } from 'src/common/entities/base.entity';
@Entity('posts')
export class Post extends BaseColumns {
  @Column({ type: 'varchar', length: 256, nullable: true })
  caption: string;

  @Column({ type: 'text', nullable: false })
  url: string;

  @ManyToOne((type) => User, (user) => user.posts)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
