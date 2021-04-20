import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private usersService:UsersService
    ){}

    async validateUser(username: string, pass: string): Promise<any> {
        let user;
        try{
          user = await this.usersService.getUserbyUsername(username);
        }catch(err){}
        if (user && user.password === pass) {
          const { password, ...result } = user;
          return result;
        }
        return null;
      }    
}
