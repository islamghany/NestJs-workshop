import { Injectable, HttpException, NotFoundException } from '@nestjs/common';
import { PostRepository } from './post.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UserRepository } from 'src/modules/users/user.repository';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostRepository)
    private postRepository: PostRepository,
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async getPosts() {
    return await this.postRepository.find();
  }

  async getPost(id: string) {
    const post = await this.postRepository.findOne(id);
    if (!post) {
      throw new NotFoundException('Post Does not exist');
    }
    return post;
  }

  async createPost(userId: string, createPostDto: CreatePostDto) {
    let user;
    try {
      user = await this.userRepository.findOne(userId);
    } catch (err) {
      console.log(err);
      throw new HttpException('unknowon err', 400);
    }
    if (!user) {
      throw new NotFoundException('User Does not exist');
    }
    let post;
    try {
      post = await this.postRepository.create({ ...createPostDto, user });
      await this.postRepository.save(post);
    } catch (err) {
      console.log(err);
      throw new HttpException('unknowon err', 400);
    }

    return post;
  }

  async updatePost(id: string, updatePostDto) {
    const post = await this.postRepository.findOne(id);
    if (!post) {
      throw new NotFoundException('Post Does not exist');
    }
    await this.postRepository.update({ id }, updatePostDto);

    return { ...post, ...updatePostDto };
  }

  async deletePost(id: string) {
    const post = await this.postRepository.findOne(id);
    if (!post) {
      throw new NotFoundException('Post Does not exist');
    }
    await this.postRepository.remove(post);

    return 'Deleted Successfully';
  }
}
