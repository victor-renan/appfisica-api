import { ObjectId } from "typeorm";
export declare class User {
    _id: ObjectId;
    name: string;
    username: string;
    email: string;
    password: string;
}
