import { EntityRepository, Repository} from "typeorm";
import { Tag } from "../infra/typeorm/entities/Tag";

@EntityRepository(Tag)
class TagsRepositories extends Repository<Tag>{}

export { TagsRepositories}