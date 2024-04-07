/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SourceData } from './SourceData';
/**
 * View Model for the List Source Data For Research Context Feature. Represents all source data in the database for a given research context.
 */
export type ListSourceDataForResearchContextViewModel_Output = {
    status: boolean;
    code: number;
    errorCode?: (number | null);
    errorMessage?: (string | null);
    errorName?: (string | null);
    errorType?: (string | null);
    /**
     * List of source data in the database for a given research context.
     */
    source_data_list: Array<SourceData>;
};

