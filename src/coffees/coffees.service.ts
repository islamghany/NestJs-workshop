import { Injectable, HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';


@Injectable()
export class CoffeesService {
    constructor(
        @InjectRepository(Coffee)
        private readonly coffeeRepository:Repository<Coffee>,
    ){}
    findAll(){
        return this.coffeeRepository.find();
    }
    async findOne(id:string){
        const coffee = await this.coffeeRepository.findOne(id)
        if(!coffee){
            throw new NotFoundException(`coffe #${id} do`);
        }
        return coffee
    }
    create(createCoffeeDto:CreateCoffeeDto){
        const coffee = this.coffeeRepository.create(createCoffeeDto);
        return this.coffeeRepository.save(coffee);
    }
    async update(id:string, coffee:UpdateCoffeeDto){
        const coffeeExist = await this.coffeeRepository.preload({
            id:+id,
            ...coffee
        })
        if(!coffeeExist){
            throw new NotFoundException(`coffe #${id} do`);
        }
        return this.coffeeRepository.save(coffeeExist)
    }
    async remove(id:string){
        const coffee = await this.coffeeRepository.findOne(id);
        return this.coffeeRepository.remove(coffee)
    }
}
