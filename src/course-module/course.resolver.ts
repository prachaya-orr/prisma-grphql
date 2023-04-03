import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CourseService } from './course.service';
// import { CreateUserInput, UpdateUserInput } from "src/graphql";
@Resolver('PrismaCourse')
export class CourseResolver {
  constructor(private readonly course: CourseService) {}

  @Query('courses')
  async courses() {
    return this.course.getCourses();
  }
}
