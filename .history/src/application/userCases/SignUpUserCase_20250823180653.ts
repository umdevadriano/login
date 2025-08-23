import { PrismaClient } from "@prisma/client";

interface IInput{
    name :string;
    email :string;
    password: string
};

type IOutput = void;

export class SignUpUseCase{
  async execute({email}: IInput ) : Promise <IOutput> {
    const  prismaClient  = new PrismaClient()
    const emailAlreadyExists= prismaClient.account.findUnique({
      where:{email},

    })
  }
}
