import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostRepository } from './post.repository';
import { UserRepository } from 'src/modules/users/user.repository';
import { UsersModule } from 'src/modules/users/users.module';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forFeature([PostRepository, UserRepository]),
  ],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
