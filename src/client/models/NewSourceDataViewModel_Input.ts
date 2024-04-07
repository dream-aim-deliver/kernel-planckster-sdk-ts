/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SourceData } from './SourceData';
/**
 * View Model for the New Source Data Feature.
 */
export type NewSourceDataViewModel_Input = {
    status: boolean;
    code: number;
    errorCode?: (number | null);
    errorMessage?: (string | null);
    errorName?: (string | null);
    errorType?: (string | null);
    /**
     * The source data object containing the metadata of the registered file.
     */
    source_data: (SourceData | null);
};

