// import {
//   Body,
//   Controller,
//   Delete,
//   Get,
//   Param,
//   Patch,
//   Post,
// } from '@nestjs/common';
// import { UsersService } from '@/users/users.service';
// import { ApiTags } from '@nestjs/swagger';
// import { CreateUserDto } from '@/users/dto/create-user.dto';
// import { UpdateUserDto } from '@/users/dto/update-user.dto';
// import { User } from '@/users/interfaces/user.interface';

// @ApiTags('users')
// @Controller('users')
// export class UsersController {
//   constructor(private usersService: UsersService) {}

//   @Get()
//   getUsers(): User[] {
//     return this.usersService.getUsers();
//   }

//   @Post()
//   create(@Body() createUserDto: CreateUserDto) {
//     this.usersService.create(createUserDto);
//   }

//   @Patch('/:id')
//   update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
//     this.usersService.update(id, updateUserDto);
//   }

//   @Delete('/:id')
//   delete(@Param('id') id: string) {
//     this.usersService.delete(id);
//   }
// }

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from '@/users/users.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from '@/users/dto/create-user.dto';
import { UpdateUserDto } from '@/users/dto/update-user.dto';
import { User } from '@/users/interfaces/user.interface';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers(): User[] {
    return this.usersService.getUsers();
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    this.usersService.create(createUserDto);
    return { message: 'User created successfully' };
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    this.usersService.update(id, updateUserDto);
    return { message: 'User updated successfully' };
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    this.usersService.delete(id);
    return { message: 'User deleted successfully' };
  }
}
