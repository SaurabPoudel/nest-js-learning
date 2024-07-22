import {
  Body,
  Controller,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUserdto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get()
  getUsers() {
    return this.userService.fetchUser();
  }
  @Get('posts')
  getUsersPosts() {
    return [
      {
        username: 'saurab',
        email: 'saurab@saurab.com',
        posts: [
          {
            id: 1,
            title: 'Post 1',
          },
          {
            id: 2,
            title: 'Post 2',
          },
        ],
      },
    ];
  }
  @Get('/posts/comments')
  getUsersPostsComments() {
    return [
      {
        id: 1,
        comments: [],
      },
    ];
  }
  @Post('create')
  @UsePipes(new ValidationPipe())
  create(@Body() userData: CreateUserDto) {
    console.log(userData);
    return this.userService.createUser(userData);
  }
  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    return { id };
  }
}
