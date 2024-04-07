/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetClientDataForUploadViewModel } from '../models/GetClientDataForUploadViewModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class GetClientDataForUploadService {
    /**
     * Get Client Data For Upload
     * Get the data required to upload a file to one of the storage services
     * @param id
     * @param protocol
     * @param relativePath
     * @param xAuthToken
     * @returns GetClientDataForUploadViewModel Success
     * @throws ApiError
     */
    public static getClientDataForUploadClientIdUploadCredentialsGet(
        id: number,
        protocol: string,
        relativePath: string,
        xAuthToken: string,
    ): CancelablePromise<GetClientDataForUploadViewModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/client/{id}/upload-credentials',
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
