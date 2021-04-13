import { Injectable, HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

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
    create(coffee:any){
        this.coffees.push(coffee);
    }
    update(id:string, coffee:any){
        this.coffees[+id] 
    }
    remove(id:string){

    }
}
