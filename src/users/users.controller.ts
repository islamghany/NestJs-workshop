import { Controller, Get, Param, ParseIntPipe, Body, Patch, Delete,Post, ParseUUIDPipe } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(
        private userService:UsersService
    ){}

    @Get()
    users(){
        return this.userService.users();
    }

    @Get(':id')
    user(@Param('id',ParseUUIDPipe) id:string){
        return this.userService.getUser(id);
    }

    @Post()
    createUser(@Body() createUserDto){
        return this.userService.create(createUserDto);
    }

    @Patch(':id')
    updateUser(@Body() updateUserDto){
        return 'updtae user'
    }

    @Delete('id')
    deleteUser(@Param('id', ParseIntPipe) id:number){
        return 'delete user'
    }
}
