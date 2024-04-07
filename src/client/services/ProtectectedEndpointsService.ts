/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateDefaultDataViewModel } from '../models/CreateDefaultDataViewModel';
import type { GetClientDataForDownloadViewModel } from '../models/GetClientDataForDownloadViewModel';
import type { GetClientDataForUploadViewModel } from '../models/GetClientDataForUploadViewModel';
import type { ListConversationsViewModel } from '../models/ListConversationsViewModel';
import type { ListMessagesViewModel } from '../models/ListMessagesViewModel';
import type { ListResearchContextsViewModel } from '../models/ListResearchContextsViewModel';
import type { ListSourceDataForResearchContextViewModel_Input } from '../models/ListSourceDataForResearchContextViewModel_Input';
import type { ListSourceDataViewModel_Input } from '../models/ListSourceDataViewModel_Input';
import type { NewConversationViewModel } from '../models/NewConversationViewModel';
import type { NewMessageViewModel } from '../models/NewMessageViewModel';
import type { NewResearchContextViewModel } from '../models/NewResearchContextViewModel';
import type { NewSourceDataViewModel_Input } from '../models/NewSourceDataViewModel_Input';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ProtectectedEndpointsService {
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
    /**
     * Get Client Data For Upload
     * Get the data required to upload a file to one of the storage services
     * @param id
     * @param protocol
     * @param relativePath
     * @param xAuthToken
     * @returns GetClientDataForUploadViewModel Success
     * @throws ApiError
     */
    public static getClientDataForUploadClientIdUploadCredentialsGet(
        id: number,
        protocol: string,
        relativePath: string,
        xAuthToken: string,
    ): CancelablePromise<GetClientDataForUploadViewModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/client/{id}/upload-credentials',
            path: {
                'id': id,
            },
            headers: {
                'x-auth-token': xAuthToken,
            },
            query: {
                'protocol': protocol,
                'relative_path': relativePath,
            },
            errors: {
                400: `Bad Request.`,
                422: `Validation Error`,
                500: `Internal Server Error`,
            },
        });
    }
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
    /**
     * Get Client Data For Download
     * Get the data required to download a file from one of the storage services
     * @param id
     * @param protocol
     * @param relativePath
     * @param xAuthToken
     * @returns GetClientDataForDownloadViewModel Success
     * @throws ApiError
     */
    public static getClientDataForDownloadClientIdDownloadCredentialsGet(
        id: number,
        protocol: string,
        relativePath: string,
        xAuthToken: string,
    ): CancelablePromise<GetClientDataForDownloadViewModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/client/{id}/download-credentials',
            path: {
                'id': id,
            },
            headers: {
                'x-auth-token': xAuthToken,
            },
            query: {
                'protocol': protocol,
                'relative_path': relativePath,
            },
            errors: {
                400: `Bad Request.`,
                422: `Validation Error`,
                500: `Internal Server Error`,
            },
        });
    }
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
