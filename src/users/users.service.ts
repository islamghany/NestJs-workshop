import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { User } from './user.entity';
    
@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
    ){}

    async users():Promise<User[]>{
        const users = await this.userRepository.find()
        return users;
    }
    async create(data){
        const user = await this.userRepository.create(data);
        await this.userRepository.save(user);
        return user;
    }
    async getUser(id:string){
        const users = await this.userRepository.findOne(id,{relations:['posts']})
        return users;
    }
}
