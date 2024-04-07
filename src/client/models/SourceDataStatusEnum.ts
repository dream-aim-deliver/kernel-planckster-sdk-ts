/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Enum for the different status that a source data can have.
 *
 * CREATED: the source data has been created
 * UNAVAILABLE: the source data is not available
 * AVAILABLE: the source data is available and part of a consistent dataset
 * INCONSISTENT_DATASET: the source data is available but part of an inconsistent dataset
 */
export enum SourceDataStatusEnum {
    CREATED = 'created',
    UNAVAILABLE = 'unavailable',
    AVAILABLE = 'available',
    INCONSISTENT_DATASET = 'inconsistent_dataset',
}
