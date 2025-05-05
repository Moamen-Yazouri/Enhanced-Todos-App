import { IUser } from "@/@types";

export interface IFormValues extends Pick<IUser, "email" | "password"> {}