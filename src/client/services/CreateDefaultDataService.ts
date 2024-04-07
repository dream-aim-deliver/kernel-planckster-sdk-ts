/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateDefaultDataViewModel } from '../models/CreateDefaultDataViewModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CreateDefaultDataService {
    /**
     * Create Default Data
     * Create default data for testing: one user with a hard-coded SUB; one llm with a hardcoded name. This is meant to be executed first to setup the necessary components to (1) register new source data, (2) create a new research context selecting from the available source data
     * @param clientSub
     * @param llmName
     * @param xAuthToken
     * @returns CreateDefaultDataViewModel Success
     * @throws ApiError
     */
    public static createDefaultDataPopulatePost(
        clientSub: string,
        llmName: string,
        xAuthToken: string,
    ): CancelablePromise<CreateDefaultDataViewModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/populate',
            headers: {
                'x-auth-token': xAuthToken,
            },
            query: {
                'client_sub': clientSub,
                'llm_name': llmName,
            },
            errors: {
                400: `Bad Request.`,
                422: `Validation Error`,
                500: `Internal Server Error`,
            },
        });
    }
}
