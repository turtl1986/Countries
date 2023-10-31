export interface ICountries{
    name: {
        common: string
        official: string
        nativeName: {
            fra:{
                common: string
                official: string
            }
        }
    }
    capital: []
    region: string
    population: number
    flags: {
        png:string
        svg:string
        alt:string
    }
}