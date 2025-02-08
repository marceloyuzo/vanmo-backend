import { Body, Controller, Post } from '@nestjs/common'
import { PrismaService } from 'src/database/prisma/prisma.service'

@Controller()
export class CreateAccountController {
  constructor(private prisma: PrismaService) {}

  @Post('/accounts')
  async handle(@Body() body: any) {}
}
