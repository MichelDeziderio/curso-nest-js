/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JogadoresModule } from './jogadores/jogadores.module';
import { CategoriasModule } from './categorias/categorias.module';
import { environment } from './../enviroment';


@Module({
  imports: [
    JogadoresModule,
    MongooseModule.forRoot(environment.urlMongoDB),
    CategoriasModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
