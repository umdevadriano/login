import { invalidCredentials } from '../errors/invalidCredentials';
import {prismaClient} from'../libs/prismaClient'
import{compare} from 'bcryptjs'

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

    //Verificando conta .
    const account= await  prismaClient.account.findUnique({
      where:{email},
    })

    //Verificando conta retonando erro se existir.
    if(!account){
      throw new invalidCredentials()
    }
    const isPasswordValid  = await compare(password, account.password)

    if(!isPasswordValid){
      throw new invalidCredentials()
    }
    const accessToken = '';

    return {
      accessToken
    }
  }
}
