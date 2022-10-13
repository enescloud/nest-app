import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserSchema } from './user.models';
import { ModulXModule } from './modul-x/modul-x.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://cloud:9ve4o4ve8@cluster0.i0xylly.mongodb.net/?retryWrites=true&w=majority'), 
    MongooseModule.forFeature([
      {
        name: 'user',
        schema: UserSchema,
      }
    ]),
    ModulXModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
