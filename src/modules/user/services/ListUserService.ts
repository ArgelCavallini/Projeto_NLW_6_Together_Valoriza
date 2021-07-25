import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../user/repositories/UsersRepositories";
import { classToPlain} from "class-transformer";

class ListUserService {
  async execute(){
    const usersRepositories = getCustomRepository(UsersRepositories)

    const users = await usersRepositories.find();

    return classToPlain(users);
  }
}
export { ListUserService}