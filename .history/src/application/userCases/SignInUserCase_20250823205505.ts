import { AccountAlreadyExists } from '../errors/AccountAlreadyExists';
import {prismaClient} from'../libs/prismaClient'
import{hash} from 'bcryptjs'

//tipagem
interface IInput{
    email :string;
    password: string
};

//tipagem
interface  IOutput{
  accessToken :string
}

//classe incluir conta verificando consistência  dos dados
export class SignInUserCase{
  async execute({email,password}: IInput ) : Promise <IOutput> {

    //Verificando e-mail único.
    const accountAlreadyExists= await  prismaClient.account.findUnique({
      where:{email},
    })

  }
}
