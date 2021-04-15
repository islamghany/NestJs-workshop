import {  MaxLength, IsString, MinLength } from 'class-validator'

export class AuthCredentalDto{
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    username:string;

    @IsString()
    @MinLength(4)
    @MaxLength(20)
    password:string;
}