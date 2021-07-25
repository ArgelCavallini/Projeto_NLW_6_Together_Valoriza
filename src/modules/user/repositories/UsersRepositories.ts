import { EntityRepository, Repository} from "typeorm";
import { User } from "../infra/typeorm/entities/User";

@EntityRepository(User)
class UsersRepositories extends Repository<User>{}

export { UsersRepositories}