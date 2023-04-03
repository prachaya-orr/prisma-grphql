import { Injectable } from '@nestjs/common';
import { CreateUserInput, User } from 'src/graphql';
import { PrismaService } from './prisma.services';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getUsers(): Promise<User[]> {
    return this.prisma.prismaUsers.findMany({});
  }

  async createUser(input : CreateUserInput):Promise<User>{
    try {
      let newData = { ...input}

      this.prisma.prismaUsers.create({data:newData})
      return
    } catch (err) {
      console.log(err);
      return err
    }

  }
}
