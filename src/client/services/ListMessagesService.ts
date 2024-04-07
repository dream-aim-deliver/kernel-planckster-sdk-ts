/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListMessagesViewModel } from '../models/ListMessagesViewModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ListMessagesService {
    /**
     * List Messages
     * List all messages in a conversation
     * @param id
     * @param xAuthToken
     * @returns ListMessagesViewModel Success
     * @throws ApiError
     */
    public static listMessagesConversationsIdMessageGet(
        id: number,
        xAuthToken: string,
    ): CancelablePromise<ListMessagesViewModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/conversations/{id}/message',
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
