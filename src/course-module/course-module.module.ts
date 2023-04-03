import { Module } from '@nestjs/common';
import { CourseResolver } from './course.resolver';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { PrismaService } from 'src/user-module/prisma.services';

@Module({
  providers: [CourseService, CourseResolver, PrismaService],
  controllers: [CourseController]
})
export class CourseModuleModule {}
