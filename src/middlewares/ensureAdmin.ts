import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../modules/user/repositories/UsersRepositories";

export async function ensureAdmin(
  request: Request, 
  response: Response, 
  next: NextFunction
  ){
    const { user_id } = request;
    
    const usersRepositories = getCustomRepository(UsersRepositories);

    //Verificar se usuário é admin
    const {admin} = await usersRepositories.findOne(user_id)
    if(admin){
      return next();
    }

    return response.status(401).json({
      error: "Unauthorized",
    });
}