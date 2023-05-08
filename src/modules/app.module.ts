import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users.module';
import { DatabaseModule } from './database.module';
import { MateriasModule } from './materias.module';
import { AtividadesModule } from './atividades.module';
import { MateriaisModule } from './materiais.module';
import { JogosModule } from './jogos.module';
import { VideosModule } from './videos.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    UsersModule,
    MateriasModule,
    AtividadesModule,
    MateriaisModule,
    VideosModule,
    JogosModule,
  ],
})
export class AppModule { }
