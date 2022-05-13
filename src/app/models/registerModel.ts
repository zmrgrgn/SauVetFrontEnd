import { LoginModel } from "./loginModel";

export interface RegisterModel extends LoginModel {
    firstName: string;
    lastName: string;
    telNo:string;
    gorev:string;
    tcNo:string;
    sicilNo:string;
}