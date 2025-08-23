import {prismaClient} from'../libs/prismaClient'

interface IInput{
    name :string;
    email :string;
    password: string
};

type IOutput = void;

export class SignUpUseCase{
  async execute({email}: IInput ) : Promise <IOutput> {

    const accountAlreadyExists= prismaClient.account.findUnique({
      where:{email},

    })

    if(accountAlreadyExists){}

  }
}
