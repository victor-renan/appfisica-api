import { DatabaseProvider } from "providers/database/database.provider";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";


@Module({
  providers: [DatabaseProvider, ConfigService],
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DatabaseProvider,
      imports: [ConfigModule],
      inject: [ConfigService]
    }),
  ],
  exports: [DatabaseProvider],
})

export class DatabaseModule { }