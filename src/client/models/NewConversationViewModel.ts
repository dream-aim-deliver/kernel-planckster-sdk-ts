/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * View Model for the New Conversation Feature.
 */
export type NewConversationViewModel = {
    status: boolean;
    code: number;
    errorCode?: (number | null);
    errorMessage?: (string | null);
    errorName?: (string | null);
    errorType?: (string | null);
    /**
     * ID of the newly created conversation.
     */
    conversation_id: number;
};

