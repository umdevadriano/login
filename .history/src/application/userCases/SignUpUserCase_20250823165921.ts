import {PrismaClient} from '@prisma/client'

interface IInput{
    name :string;
    email :string;
    password: string;
}
interface IOutput{

}

export class SignUpUseCase{
  execute(input: IInput ) :IOutput{
    const prismaclient = new PrismaClient()
    const emailAlreadyExists=

  }
}
