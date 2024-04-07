/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Represents a conversation between a user and an agent, within in a research context
 * This is where messages will be exchanged
 *
 * @param id: the id of the conversation
 * @param title: the title of the conversation
 */
export type Conversation = {
    created_at: string;
    updated_at: string;
    deleted: boolean;
    deleted_at: (string | null);
    id: number;
    title: string;
};

