import { Controller,Get, Post, Body, Param, Delete, Patch, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
//import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';
import { TaskStatus } from './task-status.enum';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService){}

    @Get()
    getAllTask():Promise<Task[]>{
        return this.taskService.getTasks()
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id:number){
        return this.taskService.getTaskById(id);
    }
    @UsePipes(ValidationPipe)
    @Post()
    createTask(@Body() createTaskDto:CreateTaskDto){
        return this.taskService.createTask(createTaskDto)
    }

    @Delete(':id')
    removeOne(@Param('id',ParseIntPipe) id:number){
        return this.taskService.deleteTask(id);
    }

    @Patch(':id')
    updateOne(
        @Param('id',ParseIntPipe) id :number , 
        @Body('status',TaskStatusValidationPipe) status:TaskStatus
        ){
        return this.taskService.updateTask(id,status)
    }
}
