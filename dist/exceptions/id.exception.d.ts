import { InternalServerErrorException } from "@nestjs/common";
export declare class IdException extends InternalServerErrorException {
    constructor(message?: string);
}
