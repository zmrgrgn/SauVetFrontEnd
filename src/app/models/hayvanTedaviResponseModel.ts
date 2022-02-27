import { HayvanTedavi } from "./hayvanTedavi";
import { ResponseModel } from "./responseModel";

export interface HayvanTedaviResponseModel extends ResponseModel{
    data:HayvanTedavi[]
}