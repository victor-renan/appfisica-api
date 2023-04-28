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
      migrations: ["dist/**/migrations/"]
    }
  }
}
