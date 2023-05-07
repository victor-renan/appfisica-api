import { InternalServerErrorException } from "@nestjs/common";

export class IdException extends InternalServerErrorException {
  constructor(message: string = "O id precisa ser do tipo ObjectID do Mongo") {
    super(message);
  }
}