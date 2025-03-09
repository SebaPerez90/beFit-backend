import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Routine {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
