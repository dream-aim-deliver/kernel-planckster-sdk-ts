/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResearchContextsViewModel } from '../models/ListResearchContextsViewModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ListResearchContextsService {
    /**
     * List Research Contexts
     * List all research contexts in the database for a given user
     * @param id
     * @param xAuthToken
     * @returns ListResearchContextsViewModel Success
     * @throws ApiError
     */
    public static listResearchContextsClientIdResearchContextGet(
        id: number,
        xAuthToken: string,
    ): CancelablePromise<ListResearchContextsViewModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/client/{id}/research-context',
            path: {
                'id': id,
            },
            headers: {
                'x-auth-token': xAuthToken,
            },
            errors: {
                400: `Bad Request. Client ID does not exist`,
                422: `Validation Error`,
                500: `Internal Server Error`,
            },
        });
    }
}
