import { LocalResult } from "./localResult";

export class SuccessResult extends LocalResult{
    constructor(message:string){
        super(false,message);
    }
}