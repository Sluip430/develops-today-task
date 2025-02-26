export interface ICountryFlag {
    error: boolean;
    msg: string;
    data: {
        name: string;
        flag: string;
        iso2: string;
        iso3: string;
    };
}
