import { Repository, EntityRepository } from "typeorm";
import { User } from "./user.entity";
import { AuthCredentalDto } from "./dto/auth-credential.dto";
import { ConflictException, InternalServerErrorException } from "@nestjs/common";

@EntityRepository(User)
export class UserRepository extends Repository<User>{
    async signUp(authcredentialDto:AuthCredentalDto){
        const {username,password} = authcredentialDto;

        const user = new User();
        user.username = username;
        user.password = password;
        try{
            await user.save();
        }catch(err){
            if(err.code === '23505'){
                throw new ConflictException('user already exist');
            } 
            else{
                throw new InternalServerErrorException();
            }
        }
        
        return user;

    }
}