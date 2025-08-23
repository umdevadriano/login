import {prismaClient} from'../libs/prismaClient'

interface IInput{
    name :string;
    email :string;
    password: string
};

type IOutput = void;

export class SignUpUseCase{
  async execute({email}: IInput ) : Promise <IOutput> {

    const emailAlreadyExists= prismaClient.account.findUnique({
      where:{email},

    })
  }
}
