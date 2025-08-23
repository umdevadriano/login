import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface IInput {
  name: string;
  email: string;
  password: string;
}

export class SignUpUseCase {
  async execute(input: IInput) {
    const emailAlreadyExists = await prisma.account.findUnique({
      where: { email: input.email },
    });

    if (emailAlreadyExists) {
      throw new Error("Email já cadastrado");
    }

    const newAccount = await prisma.account.create({
      data: {
        name: input.name,
        email: input.email,
        password: input.password,
      },
    });

    return newAccount;
  }
}
