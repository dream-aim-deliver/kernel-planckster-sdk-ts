/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * View Model for the List Messages Feature. Represents all messages in the database for a given conversation.
 */
export type ListMessagesViewModel = {
    status: boolean;
    code: number;
    errorCode?: (number | null);
    errorMessage?: (string | null);
    errorName?: (string | null);
    errorType?: (string | null);
    /**
     * List of all messages in the database for a given conversation.
     */
    message_list: Array<string>;
};

