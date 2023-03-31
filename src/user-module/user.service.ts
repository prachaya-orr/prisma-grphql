import { Injectable } from '@nestjs/common';
import { User } from 'src/graphql';
import { PrismaService } from './prisma.services';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getUsers(): Promise<User[]> {
    return this.prisma.prismaUsers.findMany({});
  }
}
