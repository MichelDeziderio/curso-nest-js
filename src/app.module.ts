/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { enviroment } from 'enviroment';
import { JogadoresModule } from './jogadores/jogadores.module';
import { CategoriasModule } from './categorias/categorias.module';


@Module({
  imports: [
    JogadoresModule,
    MongooseModule.forRoot(enviroment.urlMongoDB),
    CategoriasModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
