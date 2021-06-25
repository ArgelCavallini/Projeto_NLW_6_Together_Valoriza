import { Exclude } from "class-transformer";
import {Entity, PrimaryColumn,Column,CreateDateColumn,UpdateDateColumn} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("users") //NOME DA TABELA
class User {

  @PrimaryColumn()
  readonly id:string;

  @Column()
  name:string;

  @Column()
  email:string;

  @Column()
  admin:boolean;

  @Exclude()//deleta na listagem
  @Column()
  password:string;

  @CreateDateColumn()
  creaated_at:Date;

  @UpdateDateColumn()
  updated_at:Date;

  constructor(){
    if(!this.id){
      this.id = uuid();
    }
  }
}

export{User};