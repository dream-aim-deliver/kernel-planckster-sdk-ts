/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListSourceDataForResearchContextViewModel_Input } from '../models/ListSourceDataForResearchContextViewModel_Input';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ListSourceDataForResearchContextService {
    /**
     * List Source Data For Research Context
     * List all source data registered in the database for a given research context
     * @param id
     * @param xAuthToken
     * @returns ListSourceDataForResearchContextViewModel_Input Success
     * @throws ApiError
     */
    public static listSourceDataForResearchContextResearchContextIdSourceGet(
        id: number,
        xAuthToken: string,
    ): CancelablePromise<ListSourceDataForResearchContextViewModel_Input> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/research-context/{id}/source',
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
