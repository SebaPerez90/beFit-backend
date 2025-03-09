import { Module } from '@nestjs/common';
import { RoutineService } from './routine.service';
import { RoutineResolver } from './routine.resolver';

@Module({
  providers: [RoutineResolver, RoutineService],
})
export class RoutineModule {}
