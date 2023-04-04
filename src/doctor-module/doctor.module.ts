import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { DoctorResolver } from './doctor.resolver';
import { DoctorService } from './doctor.service';

@Module({
  imports:[PrismaModule],
  providers: [DoctorService, DoctorResolver],
  controllers: []
})
export class DoctorModule {}
