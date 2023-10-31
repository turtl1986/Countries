import Api from ".";
import { IContry } from "./types";

class CountriesApi extends Api{
    endpointAll='all?fields=name,capital,flags,population,region'
  async fetchAll(): Promise<IContry[]>{
    const {data}=await this.api.get<IContry[]>(this.endpointAll)
    return data
  }
  
}

export default new CountriesApi()