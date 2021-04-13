import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import {TypeOrmModule} from '@nestjs/typeorm'
import { Coffee } from './entities/coffee.entity';

@Module({
    providers:[CoffeesService],
    imports:[TypeOrmModule.forFeature([Coffee])],
    controllers:[CoffeesController],
})
export class CoffeesModule {}
