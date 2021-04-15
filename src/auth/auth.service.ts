import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repo';
import { AuthCredentalDto } from './dto/auth-credential.dto';
import { User } from './user.entity';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository:UserRepository
    ){}
    
    async SingUp(authCredentialDto:AuthCredentalDto):Promise<User>{
        return this.userRepository.signUp(authCredentialDto);
    }
}
