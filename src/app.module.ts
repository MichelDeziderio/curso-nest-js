import { Module } from '@nestjs/common';
import { JogadoresModule } from './jogadores/jogadores.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    JogadoresModule,
    MongooseModule.forRoot(
      'mongodb+srv://michelsilva02:<>@cluster0.d28yzvq.mongodb.net/smartRanking',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
