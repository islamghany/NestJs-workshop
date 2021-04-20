import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local-stratigy';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt-strategy';

@Module({
  imports:[
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret:"sfq,n42,n13n2n3kj1234j234j3243@$@#$",
      signOptions:{expiresIn:'30d'},
    }),
  ], 
  controllers:[AuthController],
  providers: [AuthService,LocalStrategy,JwtStrategy],
  exports:[AuthService]
})
export class AuthModule {}
