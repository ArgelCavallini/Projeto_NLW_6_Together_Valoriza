import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";
import { classToPlain} from "class-transformer";

class ListTagService {
  async execute(){
    const tagsRepositories = getCustomRepository(TagsRepositories)

    const tags = await tagsRepositories.find();
    /* // OPÇÃO SEM O CLASS-TRANSFORMER
    let tags = await tagsRepositories.find();
    tags = tags.map(tag =>({...tag, nome_hashtag: `#${tag.name}`}));
    return tags;
    */
    
    return classToPlain(tags);
  }
}
export { ListTagService}