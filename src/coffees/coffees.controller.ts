import { Controller,Get, Param, Post, Body ,Res, Patch, Delete, Query} from '@nestjs/common';
import { CoffeesService } from './coffees.service';

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
    addOne(@Body() body){
        return this.coffeesService.create(body);
    }
    @Patch(':id')
    updateOne(@Param('id') id:string, @Body() body){
        return this.coffeesService.update(id,body);
    }
    @Delete(':id')
    deleteOne(@Param('id') id:string){
        return this.coffeesService.remove(id);
    }
}
