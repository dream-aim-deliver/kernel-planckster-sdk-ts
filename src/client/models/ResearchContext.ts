/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * A research context belongs to a research topic, and is defined using a subset of the collection of source_data of the research topic
 * This is the context in which conversations will happen
 *
 * @param id: the id of the research context
 * @param title: the title of the research context
 * @param description: the description of the research context
 */
export type ResearchContext = {
    created_at: string;
    updated_at: string;
    deleted: boolean;
    deleted_at: (string | null);
    id: number;
    title: string;
    description: string;
};

