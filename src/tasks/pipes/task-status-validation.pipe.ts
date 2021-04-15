import {PipeTransform, BadRequestException} from '@nestjs/common'
import { TaskStatus } from '../task-status.enum'

export class TaskStatusValidationPipe implements PipeTransform{
    readonly allowedStatuess = [
        TaskStatus.OPEN,
        TaskStatus.IN_PROGRESS,
        TaskStatus.DONE
    ]
    transform(value:any){
        value = value.toUpperCase();
        console.log(this.allowedStatuess.indexOf(value),value,this.allowedStatuess[2])
        if(!this.isStatusValid(value)){
            throw new BadRequestException(value + 'status is invalid')
        }
        return value

    }
    private isStatusValid(status:any){
        const idx = this.allowedStatuess.indexOf(status);
        return idx !== -1;
    }
}