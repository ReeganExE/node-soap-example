/* tslint:disable:max-line-length no-empty-interface */
import { Client } from 'soap';

export interface IResolveIPInput {
    /** s:string(undefined) */
    ipAddress: string;
    /** s:string(undefined) */
    licenseKey: string;
}

export interface IResolveIPOutput {
    ResolveIPResult: IP2GeoSoapTypes.IResolveIPResult;
}

export interface IIP2GeoSoapSoap extends Client {
    ResolveIP: (input: Partial<IResolveIPInput>, cb: (err: any | null, result: IResolveIPOutput, rawResult: string,  soapHeader: {[k: string]: any; },  rawRequest: string) => any, options?: any, extraHeaders?: any) => void;
    ResolveIPAsync: (input: Partial<IResolveIPInput>, options?: any, extraHeaders?: any) => Promise<[IResolveIPOutput, string, {[k: string]: any; }, string]>;
}

export namespace IP2GeoSoapTypes {
    export interface IResolveIPResult {
        /** http://ws.cdyne.com/#s:string(undefined) */
        City: string;
        /** http://ws.cdyne.com/#s:string(undefined) */
        StateProvince: string;
        /** http://ws.cdyne.com/#s:string(undefined) */
        Country: string;
        /** http://ws.cdyne.com/#s:string(undefined) */
        Organization: string;
        /** http://ws.cdyne.com/#s:double(undefined) */
        Latitude: number;
        /** http://ws.cdyne.com/#s:double(undefined) */
        Longitude: number;
        /** http://ws.cdyne.com/#s:string(undefined) */
        AreaCode: string;
        /** http://ws.cdyne.com/#s:string(undefined) */
        TimeZone: string;
        /** http://ws.cdyne.com/#s:boolean(undefined) */
        HasDaylightSavings: boolean;
        /** http://ws.cdyne.com/#s:short(undefined) */
        Certainty: short;
        /** http://ws.cdyne.com/#s:string(undefined) */
        RegionName: string;
        /** http://ws.cdyne.com/#s:string(undefined) */
        CountryCode: string;
    }
}
