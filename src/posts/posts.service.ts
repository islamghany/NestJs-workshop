import {Injectable, HttpException, NotFoundException} from '@nestjs/common';
import { PostRepository } from './post.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(PostRepository)
        private postRepository:PostRepository
    ){}

    async getPosts(){
        return await this.postRepository.find()
    }

    async getPost(id:string){
        const post = await this.postRepository.findOne(id);
        if(!post){
            throw new NotFoundException('Post Does not exist');
        }
        return post;
    }

    async createPost(createPostDto){
        let post;
        try{
              post = await this.postRepository.create(createPostDto);
              await this.postRepository.save(post);
        }catch(err){
            console.log(err)
            throw new HttpException('unknowon err',400);
        }
        
        return post
    }

    async updatePost(id:string,updatePostDto){
        const post = await this.postRepository.findOne(id);
        if(!post){
            throw new NotFoundException('Post Does not exist');
        }
        await this.postRepository.update({id},updatePostDto);

        return {...post,...updatePostDto};
    }

    async deletePost(id:string){
        const post = await this.postRepository.findOne(id);
        if(!post){
            throw new NotFoundException('Post Does not exist');
        }
        await this.postRepository.remove(post);

        return 'Deleted Successfully';
    }
}