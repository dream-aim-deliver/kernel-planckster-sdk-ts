/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NewSourceDataViewModel_Input } from '../models/NewSourceDataViewModel_Input';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ClientServiceService {
    /**
     * Register Source Data
     * Register a new source data in the database
     * @param id
     * @param sourceDataName
     * @param sourceDataRelativePath
     * @param sourceDataProtocol
     * @param xAuthToken
     * @returns NewSourceDataViewModel_Input Success
     * @throws ApiError
     */
    public static registerSourceDataClientIdSourcePost(
        id: number,
        sourceDataName: string,
        sourceDataRelativePath: string,
        sourceDataProtocol: string,
        xAuthToken: string,
    ): CancelablePromise<NewSourceDataViewModel_Input> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/client/{id}/source',
            path: {
                'id': id,
            },
            headers: {
                'x-auth-token': xAuthToken,
            },
            query: {
                'source_data_name': sourceDataName,
                'source_data_relative_path': sourceDataRelativePath,
                'source_data_protocol': sourceDataProtocol,
            },
            errors: {
                400: `Bad Request. Research Context ID does not exist`,
                422: `Validation Error`,
                500: `Internal Server Error`,
            },
        });
    }
}
