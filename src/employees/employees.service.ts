/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
@Injectable()
export class EmployeesService {
  constructor(private readonly databaseService: DatabaseService){}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async create(createEmployeeDto: Prisma.EmployeeCreateInput) {
    return this.databaseService.employee.create({
      data: createEmployeeDto
      
    });
  }

  async findAll(role: 'INTERN' | 'ENGINEER' | 'ADMIN'){
    if(role) return this.databaseService.employee.findMany({
      where:{
        role,
      }
    })
    return this.databaseService.employee.findMany()

  }

  async findOne(id: number) {
    return this.databaseService.employee.findUnique({
      where:{
        id,
      }
    })
;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async update(id: number, updateEmployeeDto: Prisma.EmployeeUpdateInput) {
    return this.databaseService.employee.update({
      where:{
        id,
      },
      data: updateEmployeeDto
    });
  }

  async remove(id: number) {
    return this.databaseService.employee.delete({
      where:{
        id,
      }
      
    });
  }
}
