/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProtocolEnum } from './ProtocolEnum';
import type { SourceDataStatusEnum } from './SourceDataStatusEnum';
/**
 * Represents a source_data or a file
 *
 * @param id: the id of the source_data
 * @param name: the name of the source_data
 * @param relative_path: the relative path of the source_data
 * @param type: the type of the source_data (e.g., txt, pdf, csv, etc.); inferred from the extension of the relative_path
 * @param protocol: the protocol used to store the source_data
 * @param status: the status of the source_data
 */
export type SourceData = {
    created_at: string;
    updated_at: string;
    deleted: boolean;
    deleted_at: (string | null);
    id: number;
    name: string;
    relative_path: string;
    type: string;
    protocol: ProtocolEnum;
    status: SourceDataStatusEnum;
};

