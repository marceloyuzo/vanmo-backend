import { Module } from '@nestjs/common'
import { DatabaseModule } from 'src/database/database.module'
import { CreateAccountController } from './controllers/create-account.controller'

@Module({
  imports: [DatabaseModule],
  providers: [CreateAccountController],
  exports: [CreateAccountController],
})
export class HttpModule {}
