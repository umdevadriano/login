import { AccountAlreadyExists } from '../errors/AccountAlreadyExists';
import {prismaClient} from'../libs/prismaClient'
import{hash} from 'bcryptjs'

//tipagem
interface IInput{
    name :string;
    email :string;
    password: string
};

//tipagem
type IOutput = void;

//classe incluir conta verificando consistência  dos dados
export class SignUpUseCase{
  async execute({email,name,password}: IInput ) : Promise <IOutput> {

    //Verificando e-mail único.
    const accountAlreadyExists= await  prismaClient.account.findUnique({
      where:{email},
    })

    if(accountAlreadyExists){
       //retornando erro se existir.
      throw new AccountAlreadyExists();
    }
    // gerando hash de senha  10 = difuldade quanto mais maior leva mais tempo para geração
    const hashedPassword =await hash(password,10);

    //incluindo conta no banco de dados
    await prismaClient.account.create({
      data :{
        email,
        name,
        password,
      }
    })
  }
}
