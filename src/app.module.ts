import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';
import { UsersModule } from './users/users.module';
import {ConfigModule} from '@nestjs/config'
import { PostsModule } from './posts/posts.module';
@Module({
  imports:[
    ConfigModule.forRoot({
      isGlobal:true
    }),
    TypeOrmModule.forRootAsync({
    useFactory:async ()=>
    Object.assign(await getConnectionOptions(),{
      autoLoadEntities:true
    })
  }), 
  UsersModule,
  PostsModule
]
})
export class AppModule {}
