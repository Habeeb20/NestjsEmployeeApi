/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";
export class CreateUserDto{
    @IsString()
    @IsNotEmpty()
    name:string;

    @IsEmail()
    email:string;

    @IsEnum(["INTER", "ENGINEER" , "ADMIN"], {
        message: 'Valid role required'
    })
    role:"INTER" | "ENGINEER" | "ADMIN";
}