import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
export declare class DatabaseProvider implements TypeOrmOptionsFactory {
    private readonly config;
    constructor(config: ConfigService);
    createTypeOrmOptions(): Promise<TypeOrmModuleOptions>;
}
