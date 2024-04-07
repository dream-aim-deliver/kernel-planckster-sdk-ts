/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * View Model for the Create Default Data Feature. Represents a new default client and a new default llm.
 */
export type CreateDefaultDataViewModel = {
    status: boolean;
    code: number;
    errorCode?: (number | null);
    errorMessage?: (string | null);
    errorName?: (string | null);
    errorType?: (string | null);
    /**
     * Client id of the new default client.
     */
    client_id: number;
    /**
     * LLM id of the new default llm.
     */
    llm_id: number;
};

