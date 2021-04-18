import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';
import { UsersModule } from './users/users.module';
import {ConfigModule} from '@nestjs/config'
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
  }), UsersModule]
})
export class AppModule {}
