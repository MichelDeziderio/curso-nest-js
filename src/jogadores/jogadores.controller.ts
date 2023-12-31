/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { Jogador } from './interfaces/jogador.interface';
import { JogadoresService } from './jogadores.service';
import { ValidacaoParametrosPipe } from '../common/pipes/validacao-parametros.pipe';
import { AtualizarJogadorDto } from './dtos/atualizar-jogador.dto';

@Controller('api/v1/jogadores')
export class JogadoresController {


    constructor(private readonly jogadores: JogadoresService) { }

    @Post()
    @UsePipes(ValidationPipe)
    async criarJogador(@Body() criarJogadorDto: CriarJogadorDto): Promise<Jogador> {

        return await this.jogadores.criarJogador(criarJogadorDto);

    }

    @Put('/:_id')
    @UsePipes(ValidationPipe)
    async atualizarJogador(@Body() atualizarJogadorDto: AtualizarJogadorDto, @Param('_id', ValidacaoParametrosPipe) _id: string): Promise<void> {

        await this.jogadores.atualizarJogador(_id, atualizarJogadorDto);

    }

    @Get()
    async consultarJogadores(): Promise<Jogador[]> {
        return await this.jogadores.consultarTodosJogadores();
    }

    @Get('/:_id')
    async consultarJogadorePeloId(@Param('_id', ValidacaoParametrosPipe) _id: string): Promise<Jogador> {
        return await this.jogadores.consultarJogadorPeloId(_id);
    }


    @Delete('/:_id')
    async deletarJogador(@Param('_id', ValidacaoParametrosPipe) _id: string): Promise<void> {
        return this.jogadores.deletarJogador(_id);
    }

}
