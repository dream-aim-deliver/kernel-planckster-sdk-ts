/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * View Model for the New Research Context Feature.
 */
export type NewResearchContextViewModel = {
    status: boolean;
    code: number;
    errorCode?: (number | null);
    errorMessage?: (string | null);
    errorName?: (string | null);
    errorType?: (string | null);
    /**
     * ID of the newly created research context.
     */
    research_context_id: number;
    /**
     * Title of the newly created research context.
     */
    research_context_title: string;
    /**
     * Description of the newly created research context.
     */
    research_context_description: string;
    /**
     * Name of the LLM of the newly created research context.
     */
    llm_name: string;
};

