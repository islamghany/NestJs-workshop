import { Controller, Get, Param, ParseIntPipe, Body, Patch, Delete } from '@nestjs/common';
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
    user(@Param('id',ParseIntPipe) id:number){
        return 'a user with a specific id';
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
