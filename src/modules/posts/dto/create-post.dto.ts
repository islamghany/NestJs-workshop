import { IsString, IsUrl } from 'class-validator';

export class CreatePostDto {
  @IsString()
  caption: string;

  @IsUrl()
  url: string;
}
