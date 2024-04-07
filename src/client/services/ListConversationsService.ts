/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListConversationsViewModel } from '../models/ListConversationsViewModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ListConversationsService {
    /**
     * List Conversations
     * List all conversations in a research context
     * @param id
     * @param xAuthToken
     * @returns ListConversationsViewModel Success
     * @throws ApiError
     */
    public static listConversationsResearchContextIdConversationGet(
        id: number,
        xAuthToken: string,
    ): CancelablePromise<ListConversationsViewModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/research-context/{id}/conversation',
            path: {
                'id': id,
            },
            headers: {
                'x-auth-token': xAuthToken,
            },
            errors: {
                400: `Bad Request. Research Context ID does not exist`,
                422: `Validation Error`,
                500: `Internal Server Error`,
            },
        });
    }
}
