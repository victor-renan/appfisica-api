import { Jogo } from "models/jogo.entity";
import { JogosService } from "services/jogos.service";
import { CreateJogoDto, UpdateJogoDto } from "dto/jogos.dto";
export declare class JogosController {
    private readonly jogosService;
    constructor(jogosService: JogosService);
    getAll(): Promise<Jogo[]>;
    getOne(id: string): Promise<Jogo>;
    createJogo(jogo: CreateJogoDto): Promise<Jogo>;
    updateJogo(id: string, update: UpdateJogoDto): Promise<Jogo>;
    deleteJogo(id: string): Promise<Jogo>;
}
