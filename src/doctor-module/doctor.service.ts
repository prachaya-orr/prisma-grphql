import { Injectable } from '@nestjs/common';
import {  Doctor } from 'src/graphql';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DoctorService {
  constructor(private readonly prisma: PrismaService) {}

  async getDoctors(): Promise<Doctor[]> {
    return this.prisma.doctors.findMany({})
  }
}
