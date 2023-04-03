import { Injectable } from '@nestjs/common';
import { Course } from 'src/graphql';
import { PrismaService } from 'src/user-module/prisma.services';

@Injectable()
export class CourseService {
  constructor(private readonly prisma: PrismaService) {}

  async getCourses(): Promise<Course[]> {
    return this.prisma.prismaCourses.findMany({})
  }
}
