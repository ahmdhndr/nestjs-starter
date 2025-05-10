import {
  BadRequestException,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { extractFirstZodError, handleServiceError } from '@shared/utils';
import { FindOptionsWhere } from 'typeorm';

import { CreateUserDto, createUserSchema } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository) {}

  private async validateCreateUser(createUser: CreateUserDto) {
    try {
      await this.userRepository.findOne({
        email: createUser.email,
      });
    } catch (_error) {
      return;
    }
    throw new UnprocessableEntityException('Email already exists');
  }
  async create(createUserDto: CreateUserDto) {
    try {
      await this.validateCreateUser(createUserDto);
      const result = createUserSchema.safeParse(createUserDto);
      if (!result.success) {
        throw new BadRequestException({
          message: extractFirstZodError(result.error.format()),
        });
      }

      return await this.userRepository.create(result.data);
    } catch (error) {
      handleServiceError(error);
    }
  }

  async findAll(filter: FindOptionsWhere<User>) {
    return await this.userRepository.find(filter);
  }

  async findOne(id: number) {
    return await this.userRepository.findOne({ id });
    // if (!user) {
    //   throw new NotFoundException('User not found');
    // }

    // return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.userRepository.findOneAndUpdate({ id }, updateUserDto);
  }

  async remove(id: number) {
    return await this.userRepository.findOneAndDelete({ id });
  }
}
