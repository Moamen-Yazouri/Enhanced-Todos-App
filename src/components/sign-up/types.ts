import { IUser } from "@/@types";

export interface IFormValues extends IUser {
    confirmPassword: string;
}