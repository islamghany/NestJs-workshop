import { Injectable, HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';
import { CreateCoffeeDto } from './dto/create-coffee.dto';

@Injectable()
export class CoffeesService {
    private coffees:Coffee[] = [
        {
            brand:'startbakus',
            id:12,
            name:'turky',
            flavors:['chocolta','vanilia']
        }
    ];
    findAll(){
        return this.coffees;
    }
    findOne(id:string){
        const coffee = this.coffees.find(item=> item.id === +id);
        if(!coffee){
            throw new NotFoundException(`coffe #${id} do`);
        }
        return coffee
    }
    create(createCoffeeDto:any){
        this.coffees.push(createCoffeeDto);
        return createCoffeeDto;
    }
    update(id:string, coffee:any){
        const coffeeExist = this.coffees.find(item=> item.id === +id);
        if(!coffeeExist){
            throw new NotFoundException(`coffe #${id} do`);
        }
        this.coffees[+id] = {...coffeeExist,...coffee} 
    }
    remove(id:string){
        this.coffees.filter(item=>item.id == +id);
    }
}
