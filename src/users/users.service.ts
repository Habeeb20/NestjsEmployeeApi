/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create_user_dto';
import { UpdateUserDto } from './dto/update_user-dto';
import { NotFoundException } from '@nestjs/common';
@Injectable()
export class UsersService {
    private users =[
        {
            "id": 1,
            "name": "habeeb",
            "email": "ade@gmail.com",
            "role" : "INTERN"

        },

        {
            "id": 2,
            "name": "habeebade",
            "email": "adehabeeb@gmail.com",
            "role" : "ENGINEER"

        },

        {
            "id": 3,
            "name": "habeebADemola",
            "email": "adeabeeb@gmail.com",
            "role" : "ADMIN"

        }   
       

    ]

    //Methods

    findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN'){
        if(role){
            const roleArray = this.users.filter(user => user.role === role)
            if(roleArray.length === 0) throw new NotFoundException("User role not found")
            return roleArray
        }
        return this.users
    }

    findOne(id: number){
        const user = this.users.find(user => user.id === id)
        if(!user) throw new NotFoundException('Not found user')
        return user
    }

    create(createUserDto: CreateUserDto){
        const usersByHighestId = [...this.users].sort((a,b) => b.id - a.id)
        const newUser = {
            id: usersByHighestId[0].id + 1,
            ...createUserDto
        }
        this.users.push(newUser)
        return newUser
    }

    update(id: number, updateUserDto: UpdateUserDto){
        this.users = this.users.map(user => {
            if(user.id === id){
                return{...user, ...updateUserDto}
            }
            return user
        })
        return this.findOne(id)

    }

    delete(id: number){
        const removeUser = this.findOne(id)

        this.users = this.users.filter(user => user.id !== id)
        return removeUser
    }

}
