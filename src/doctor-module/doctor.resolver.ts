import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DoctorService } from './doctor.service';

@Resolver('Doctors')
export class DoctorResolver {
  constructor(private readonly doctor: DoctorService) {}

  @Query('doctors')
  async doctors() {
    // const data = await lastValueFrom(this.httpService.get(process.env.COURSE_URL))
    return this.doctor.getDoctors();
  }
}
