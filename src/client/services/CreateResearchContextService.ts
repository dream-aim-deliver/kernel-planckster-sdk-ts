/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NewResearchContextViewModel } from '../models/NewResearchContextViewModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CreateResearchContextService {
    /**
     * Create Research Context
     * Create a new research context from a subset of the available source data for a client
     * @param researchContextTitle
     * @param researchContextDescription
     * @param xAuthToken
     * @param requestBody
     * @param clientSub
     * @param llmName
     * @returns NewResearchContextViewModel Success
     * @throws ApiError
     */
    public static createResearchContextResearchContextPost(
        researchContextTitle: string,
        researchContextDescription: string,
        xAuthToken: string,
        requestBody: Array<number>,
        clientSub?: (string | null),
        llmName?: (string | null),
    ): CancelablePromise<NewResearchContextViewModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/research-context',
            headers: {
                'x-auth-token': xAuthToken,
            },
            query: {
                'research_context_title': researchContextTitle,
                'research_context_description': researchContextDescription,
                'client_sub': clientSub,
                'llm_name': llmName,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request.`,
                422: `Validation Error`,
                500: `Internal Server Error`,
            },
        });
    }
}
