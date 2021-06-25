import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload{
  sub:string;
}
export function ensureAthenticated(
  request: Request, 
  response: Response, 
  next: NextFunction){

  //Receber TOKEN
  const authToken = request.headers.authorization
  //Validar TOKEN se está preenchido
  if(!authToken){
    return response.status(401).end();
  }

  const [,token] = authToken.split(" ")

  //Validar se TOKEN é válido
  try{
    const { sub } = verify(token,"4edcab9456f57433e3c8c3da35249629") as IPayload;

    //Recuperar informações do usuário
    request.user_id = sub;

    return next();
  }catch(err){
    return response.status(401).end();
  }
 


}