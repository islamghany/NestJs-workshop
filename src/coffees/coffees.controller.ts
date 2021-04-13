import { Controller,Get, Param, Post, Body ,Res, Patch, Delete, Query} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
    constructor(private readonly coffeesService:CoffeesService){}
    @Get('/')
    findAll(@Query() query){
        return this.coffeesService.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id: string){
        return this.coffeesService.findOne(id);
    }
    @Post()
    addOne(@Body() createCoffeeDto:CreateCoffeeDto){
        return this.coffeesService.create(createCoffeeDto);
    }
    @Patch(':id')
    updateOne(@Param('id') id:string, @Body() updateCoffeeDto:UpdateCoffeeDto){
        return this.coffeesService.update(id,updateCoffeeDto);
    }
    @Delete(':id')
    deleteOne(@Param('id') id:string){
        return this.coffeesService.remove(id);
    }
}
