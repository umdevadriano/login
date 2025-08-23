import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface IInput{
    name :string;
    email :string;
    password: string
}


export class SignUpUseCase{
  execute({email}: IInput ) :IOutput{
    const  prismaClient  = new PrismaClient()
    const emailAlreadyExists= prismaClient.account.findUnique({
      where:{email},

    })
  }
}
