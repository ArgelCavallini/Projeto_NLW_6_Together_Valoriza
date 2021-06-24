import { getCustomRepository } from "typeorm"

import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { UsersRepositories } from "../repositories/UsersRepositories"

interface IAuthenticateRequest {
  email:string;
  password:string;
}
class AuthenticateUserService{
  async execute({email, password} : IAuthenticateRequest){
    const usersRepositories = getCustomRepository(UsersRepositories);

    //Verificar e-mail
    const user = await usersRepositories.findOne({
      email
    });
    if(!user){
      throw new Error("Email/Password incorrect")
    }

    //Verificar senha
    const passwordMatch = await compare(password, user.password);
    if(!passwordMatch){
      throw new Error("Email/Password incorrect")
    }
    //Gerar token
    const token = sign({
      email: user.email
    }, "4edcab9456f57433e3c8c3da35249629",{
      subject: user.id,
      expiresIn: "1d",
    })

    return token;
  }
}

export { AuthenticateUserService}