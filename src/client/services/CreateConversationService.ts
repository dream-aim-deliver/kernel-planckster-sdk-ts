/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NewConversationViewModel } from '../models/NewConversationViewModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CreateConversationService {
    /**
     * Create Conversation
     * Create a new conversation in a research context
     * @param id
     * @param conversationTitle
     * @param xAuthToken
     * @returns NewConversationViewModel Success
     * @throws ApiError
     */
    public static createConversationResearchContextIdConversationPost(
        id: number,
        conversationTitle: string,
        xAuthToken: string,
    ): CancelablePromise<NewConversationViewModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/research-context/{id}/conversation',
            path: {
                'id': id,
            },
            headers: {
                'x-auth-token': xAuthToken,
            },
            query: {
                'conversation_title': conversationTitle,
            },
            errors: {
                400: `Bad Request.`,
                422: `Validation Error`,
                500: `Internal Server Error`,
            },
        });
    }
}
