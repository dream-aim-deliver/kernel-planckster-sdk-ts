/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SourceData } from './SourceData';
/**
 * View Model for the List Source Data Feature. Represents all source data in the database if no client_id was passed, or all source data for a given client_id if it was provided as a parameter.
 */
export type ListSourceDataViewModel_Input = {
    status: boolean;
    code: number;
    errorCode?: (number | null);
    errorMessage?: (string | null);
    errorName?: (string | null);
    errorType?: (string | null);
    /**
     * List of source data in the database.
     */
    source_data_list: Array<SourceData>;
};

