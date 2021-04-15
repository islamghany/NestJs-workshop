import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { AuthCredentalDto } from './dto/auth-credential.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(
        private authService:AuthService,
    ){}
    @Post('/signup')
    signUp(@Body(ValidationPipe) authCredentalDto:AuthCredentalDto){
        return this.authService.SingUp(authCredentalDto);
    }
}
