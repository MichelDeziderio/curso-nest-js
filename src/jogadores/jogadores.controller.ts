/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, Query, Delete } from '@nestjs/common';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { JogadoresService } from './jogadores.service';
import { Jogador } from './interfaces/jogador.interface';

@Controller('api/v1/jogadores')
export class JogadoresController {


    constructor(private readonly jogadores: JogadoresService) { }

    @Post()
    async criarAtualizarJogador(@Body() criarJogadorDto: CriarJogadorDto) {

        await this.jogadores.criarAtualizarJogador(criarJogadorDto);

    }

    @Get()
    async consultarJogadores(@Query('email') email: string): Promise<Jogador[] | Jogador> {

        if (email) {
            return await this.jogadores.consultarJogadorPeloEmail(email);
        } else {
            return await this.jogadores.consultarTodosJogadores();
        }

    }

    @Delete()
    async deletarJogador(@Query('email') email: string): Promise<void> {
        return this.jogadores.deletarJogador(email);
    }

}
