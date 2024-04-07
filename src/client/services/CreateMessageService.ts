/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NewMessageViewModel } from '../models/NewMessageViewModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CreateMessageService {
    /**
     * Create Message
     * Create a new message in a conversation
     * @param id
     * @param messageContent
     * @param senderType
     * @param unixTimestamp
     * @param xAuthToken
     * @returns NewMessageViewModel Success
     * @throws ApiError
     */
    public static createMessageConversationIdMessagePost(
        id: number,
        messageContent: string,
        senderType: string,
        unixTimestamp: number,
        xAuthToken: string,
    ): CancelablePromise<NewMessageViewModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/conversation/{id}/message',
            path: {
                'id': id,
            },
            headers: {
                'x-auth-token': xAuthToken,
            },
            query: {
                'message_content': messageContent,
                'sender_type': senderType,
                'unix_timestamp': unixTimestamp,
            },
            errors: {
                400: `Bad Request.`,
                422: `Validation Error`,
                500: `Internal Server Error`,
            },
        });
    }
}
