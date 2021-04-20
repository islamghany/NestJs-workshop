import {ExtractJwt, Strategy} from 'passport-jwt';
import {PassportStrategy} from '@nestjs/passport'
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration:false,
            secretOrKey:"sfq,n42,n13n2n3kj1234j234j3243@$@#$",
        });
    }
    async validate(payload: any) {
        return { userId: payload.sub, username: payload.username };
      }
}
