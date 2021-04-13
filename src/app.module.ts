import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesService } from './coffees/coffees.service';
import { CoffeesModule } from './coffees/coffees.module';
import {TypeOrmModule} from '@nestjs/typeorm'
import {Coffee} from './coffees/entities/coffee.entity'
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'postgres',
      host:'localhost',
      port:5432,
      username:'postgres',
      password:'islamghany',
      database:'amigoscode',
      //entities:[Coffee],
      autoLoadEntities:true,
      synchronize:true
    }),
    CoffeesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
