import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports:[TypeOrmModule.forRootAsync({
    useFactory:async ()=>
    Object.assign(await getConnectionOptions(),{
      autoLoadEntities:true
    })
  }), UsersModule]
})
export class AppModule {}
