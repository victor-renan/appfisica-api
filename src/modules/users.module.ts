import { UsersService } from "services/users.service";
import { UsersController } from "controllers/users.controller";
import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "models/usuario.entity";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService, ConfigService],
  controllers: [UsersController],
  exports: [UsersService],
})

export class UsersModule {}