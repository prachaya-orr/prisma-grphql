import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
// import { CreateUserInput, UpdateUserInput } from "src/graphql";
import { UserService } from './user.service';
@Resolver('PrismaUser')
export class UserResolver {
  constructor(private readonly user: UserService) {}

  @Query('users')
  async users() {
    return this.user.getUsers();
  }
}
