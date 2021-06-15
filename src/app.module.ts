import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

//basicamente é o core da aplicação
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://cezarcozta:2AZGJC2UWi9UiZTJ@cluster0.ylwkw.mongodb.net/test',
    ),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
