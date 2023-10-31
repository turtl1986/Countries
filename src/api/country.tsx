import Api from ".";
import { IContry } from "./types";

class CountryApi extends Api{
    endpointOne=`/name/`
  async fetchOne(name:string|undefined): Promise<IContry[]>{
    const {data}=await this.api.get<IContry[]>(this.endpointOne +`${name}`);
    return data
  }
  
}

export default new CountryApi()