import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DatabaseProvider implements TypeOrmOptionsFactory {
  constructor(private readonly config: ConfigService) {}
  async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
    return {
      type: "mongodb",
      url: this.config.get<string>("MONGO_URL"),
      database: this.config.get<string>("MONGO_DB"),
      entities: [
        'dist/**/*.entity.{js, ts}'
      ],
      ssl: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  }
}
