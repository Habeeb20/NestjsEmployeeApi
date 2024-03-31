/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { CreateUserDto } from "./create_user_dto";
// eslint-disable-next-line prettier/prettier
import {PartialType} from "@nestjs/mapped-types";


export class UpdateUserDto extends PartialType(CreateUserDto){}