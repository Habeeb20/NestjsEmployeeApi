/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ParseIntPipe, ValidationPipe } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CreateUserDto } from './dto/create_user_dto';
import { UpdateUserDto } from './dto/update_user-dto';
import { UsersService } from './users.service';
@Controller('users')  //users
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

    /*
    ROUTES

    */

    @Get() //GET /users
    findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN'){
        return this.usersService.findAll(role)
    }

    @Get(':id') //GET /users/:id
    findOne(@Param('id', ParseIntPipe) id: number){
        return this.usersService.findOne(id)

    }

    @Post() //POST /users
    create(@Body(ValidationPipe) createUserDto: CreateUserDto){
        return this.usersService.create(createUserDto)
    }

    @Patch(':id')
    update(@Param('id', ParseIntPipe) id:number , @Body(ValidationPipe) updateUserDto: UpdateUserDto){
        return this.usersService.update(id, updateUserDto)
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id:number){
        return this.usersService.delete(id)
    }
  
}
