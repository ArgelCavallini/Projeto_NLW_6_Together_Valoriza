import { EntityRepository, Repository} from "typeorm";
import { Compliment } from "../infra/typeorm/entities/Compliment";

@EntityRepository(Compliment)
class ComplimentsRepositories extends Repository<Compliment>{}

export { ComplimentsRepositories}