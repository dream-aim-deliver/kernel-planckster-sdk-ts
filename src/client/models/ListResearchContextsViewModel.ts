/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ResearchContext } from './ResearchContext';
export type ListResearchContextsViewModel = {
    status: boolean;
    code: number;
    errorCode?: (number | null);
    errorMessage?: (string | null);
    errorName?: (string | null);
    errorType?: (string | null);
    /**
     * Client ID for which the research contexts are to be listed.
     */
    client_id: number;
    /**
     * List of research contexts for the client.
     */
    research_contexts: Array<ResearchContext>;
};

