import { Query, Resolver } from '@nestjs/graphql';
import { User } from 'src/modules/user/entity/user.entity';

@Resolver(() => User)
export class UserResolver {
  @Query(() => String)
  async getUsers() {
    return 'hello world';
  }
}
