/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetClientDataForDownloadViewModel } from '../models/GetClientDataForDownloadViewModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class GetClientDataForDownloadService {
    /**
     * Get Client Data For Download
     * Get the data required to download a file from one of the storage services
     * @param id
     * @param protocol
     * @param relativePath
     * @param xAuthToken
     * @returns GetClientDataForDownloadViewModel Success
     * @throws ApiError
     */
    public static getClientDataForDownloadClientIdDownloadCredentialsGet(
        id: number,
        protocol: string,
        relativePath: string,
        xAuthToken: string,
    ): CancelablePromise<GetClientDataForDownloadViewModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/client/{id}/download-credentials',
            path: {
                'id': id,
            },
            headers: {
                'x-auth-token': xAuthToken,
            },
            query: {
                'protocol': protocol,
                'relative_path': relativePath,
            },
            errors: {
                400: `Bad Request.`,
                422: `Validation Error`,
                500: `Internal Server Error`,
            },
        });
    }
}
