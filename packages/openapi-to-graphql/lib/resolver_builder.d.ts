import { Operation } from './types/operation';
import { ResolveFunction } from './types/graphql';
import { PreprocessingData } from './types/preprocessing_data';
declare type GetResolverParams = {
    operation: Operation;
    argsFromLink?: {
        [key: string]: string;
    };
    payloadName?: string;
    data: PreprocessingData;
    baseUrl?: string;
    requestOptions?: RequestInit;
};
/**
 * Creates and returns a resolver function that performs API requests for the
 * given GraphQL query
 */
export declare function getResolver({ operation, argsFromLink, payloadName, data, baseUrl, requestOptions }: GetResolverParams): ResolveFunction;
export {};
