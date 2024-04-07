/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Conversation } from './Conversation';
/**
 * View Model for the List Conversations Feature. Represents all conversations in a given research context.
 */
export type ListConversationsViewModel = {
    status: boolean;
    code: number;
    errorCode?: (number | null);
    errorMessage?: (string | null);
    errorName?: (string | null);
    errorType?: (string | null);
    /**
     * Research context id for which the conversations are to be listed.
     */
    research_context_id: number;
    /**
     * List of conversations in the research context.
     */
    conversations: Array<Conversation>;
};

