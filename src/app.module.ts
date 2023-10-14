/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { JogadoresModule } from './jogadores/jogadores.module';
import { MongooseModule } from '@nestjs/mongoose';
import { enviroment } from 'enviroment';


@Module({
  imports: [
    JogadoresModule,
    MongooseModule.forRoot(enviroment.urlMongoDB),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
