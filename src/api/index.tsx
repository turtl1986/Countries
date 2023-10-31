import axios from 'axios'

class Api{
    private readonly BASE_URL='https://restcountries.com/v3.1/'
protected api
constructor(){
    this.api=axios.create({
       baseURL: this.BASE_URL
    })
}
}

export default Api