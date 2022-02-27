import { HayvanKayit } from "./hayvanKayit";
import { ResponseModel } from "./responseModel";

export interface HayvanKayitResponseModel extends ResponseModel{
    data:HayvanKayit[]
}