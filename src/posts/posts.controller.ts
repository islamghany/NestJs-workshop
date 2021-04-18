import {Controller, Get, Param, ParseUUIDPipe, Post, Body, Patch, Delete} from '@nestjs/common'
import { PostsService } from './posts.service';


@Controller('posts')
export class PostsController{
    constructor(
        private postsService:PostsService
    ){}
    @Get()
    posts(){
        return this.postsService.getPosts();
    }
    @Get(":id")
    post(@Param('id', ParseUUIDPipe) id:string){
        return this.postsService.getPost(id);
    }
    @Post()
    createPost(@Body() createPostDto){
        return this.postsService.createPost(createPostDto);
    }
    @Patch(':id')
    updatePost(@Param('id', ParseUUIDPipe) id:string, @Body() updatePostDto){
        return this.postsService.updatePost(id,updatePostDto);
    }
    @Delete(":id")
    deletePost(@Param('id', ParseUUIDPipe) id:string){
        return this.postsService.deletePost(id);
    }

}