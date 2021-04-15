import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskRepository } from './task.repo';
import { Task } from './task.entity';
import { TaskStatus } from './task-status.enum';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(TaskRepository)
        private taskRepository:TaskRepository,
    ){}
    getTasks():Promise<Task[]>{
        return this.taskRepository.find();
    }
    // findTasks():Task[]{
    //     return this.tasks;
    // }
    async getTaskById(id:number):Promise<Task>{
        const found = await this.taskRepository.findOne(id);
        if(!found){
            throw new NotFoundException('id does not exist');
        }
        return found;
    }
    createTask(createTaskDro:CreateTaskDto):Promise<Task>{
       return  this.taskRepository.createTask(createTaskDro)
    }
    async deleteTask(id:number){

       const result  =await  this.taskRepository.delete(id);
       if(result.affected === 0){
        throw new NotFoundException('id does not exist');
       }
    }
    async updateTask(id:number,status:TaskStatus):Promise<Task>{
        const task = await this.taskRepository.findOne(id);
        if(!task){
            throw new NotFoundException('id does not exist');
        }
        task.status=status;
        await task.save();
        return task;
    }

}
