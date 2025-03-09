import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RoutineService } from './routine.service';
import { Routine } from './entities/routine.entity';
import { CreateRoutineInput } from './dto/create-routine.input';
import { UpdateRoutineInput } from './dto/update-routine.input';

@Resolver(() => Routine)
export class RoutineResolver {
  constructor(private readonly routineService: RoutineService) {}

  @Mutation(() => Routine)
  createRoutine(
    @Args('createRoutineInput') createRoutineInput: CreateRoutineInput,
  ) {
    return this.routineService.create(createRoutineInput);
  }

  @Query(() => [Routine], { name: 'routine' })
  findAll() {
    return this.routineService.findAll();
  }

  @Query(() => Routine, { name: 'routine' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.routineService.findOne(id);
  }

  @Mutation(() => Routine)
  updateRoutine(
    @Args('updateRoutineInput') updateRoutineInput: UpdateRoutineInput,
  ) {
    return this.routineService.update(
      updateRoutineInput.id,
      updateRoutineInput,
    );
  }

  @Mutation(() => Routine)
  removeRoutine(@Args('id', { type: () => Int }) id: number) {
    return this.routineService.remove(id);
  }
}
