"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdException = void 0;
const common_1 = require("@nestjs/common");
class IdException extends common_1.InternalServerErrorException {
    constructor(message = "O id precisa ser do tipo ObjectID do Mongo") {
        super(message);
    }
}
exports.IdException = IdException;
//# sourceMappingURL=id.exception.js.map