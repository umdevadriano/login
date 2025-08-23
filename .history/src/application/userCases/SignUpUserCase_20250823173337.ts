import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface IInput{
    name :string;
    email :string;
    password: string
}


export class SignUpUseCase{
  execute(input: IInput ) :IOutput{
    const emailAlreadyExists=
  }
}
