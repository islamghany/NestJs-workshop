import {
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Body,
  Patch,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}
  @Get()
  posts() {
    return this.postsService.getPosts();
  }
  @Get(':id')
  post(@Param('id', ParseUUIDPipe) id: string) {
    return this.postsService.getPost(id);
  }
  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  createPost(@Body() createPostDto: CreatePostDto) {
    return this.postsService.createPost(
      'aec4033a-ff1b-46a2-802d-997c8d555093',
      createPostDto,
    );
  }
  @Patch(':id')
  @UsePipes(
    new ValidationPipe({
      whitelist: true,
      forbidUnknownValues: true,
    }),
  )
  updatePost(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updatePostDto: CreatePostDto,
  ) {
    console.log(updatePostDto);
    return this.postsService.updatePost(id, updatePostDto);
  }
  @Delete(':id')
  deletePost(@Param('id', ParseUUIDPipe) id: string) {
    return this.postsService.deletePost(id);
  }
}
