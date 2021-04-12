import { Controller,Get, Param, Post, Body ,Res} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
    @Get('/')
    findAll(@Res() res){
        res.status(200).json({message:"hello"})
    }
    @Get(':id')
    findOne(@Param('id') id: string){
        return `find user by id : ${id}`;
    }
    @Post()
    addOne(@Body() body){
        return body
    }
}
