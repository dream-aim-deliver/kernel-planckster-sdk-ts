/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListSourceDataViewModel_Input } from '../models/ListSourceDataViewModel_Input';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ListSourceDataService {
    /**
     * List Source Data
     * List all source data registered in the database for a given Client
     * @param id
     * @param xAuthToken
     * @returns ListSourceDataViewModel_Input Success
     * @throws ApiError
     */
    public static listSourceDataClientIdSourceGet(
        id: (number | null),
        xAuthToken: string,
    ): CancelablePromise<ListSourceDataViewModel_Input> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/client/{id}/source',
            path: {
                'id': id,
            },
            headers: {
                'x-auth-token': xAuthToken,
            },
            errors: {
                400: `Bad Request.`,
                422: `Validation Error`,
                500: `Internal Server Error`,
            },
        });
    }
}
