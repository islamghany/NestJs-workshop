import {Module} from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostRepository } from './post.repository';
import { UserRepository } from 'src/users/user.repository';
import { UsersModule } from 'src/users/users.module';

@Module({
    imports:[UsersModule,
        TypeOrmModule.forFeature([PostRepository,UserRepository])],
    controllers:[PostsController],
    providers:[PostsService]
})
export class PostsModule{}