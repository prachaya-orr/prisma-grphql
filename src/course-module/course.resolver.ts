import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CourseService } from './course.service';
import { lastValueFrom } from 'rxjs';
// import { CreateUserInput, UpdateUserInput } from "src/graphql";
@Resolver('PrismaCourse')
export class CourseResolver {
  constructor(private readonly course: CourseService) {}

  @Query('courses')
  async courses() {
    // const data = await lastValueFrom(this.httpService.get(process.env.COURSE_URL))
    return this.course.getCourses();
  }
}
