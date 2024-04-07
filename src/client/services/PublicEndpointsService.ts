/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DemoViewModel } from '../models/DemoViewModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PublicEndpointsService {
    /**
     * Sum Feature
     * Adds 2 numbers
     * @param num1
     * @param num2
     * @returns DemoViewModel Success
     * @throws ApiError
     */
    public static sumFeatureSumGet(
        num1: number,
        num2: number,
    ): CancelablePromise<DemoViewModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sum',
            query: {
                'num1': num1,
                'num2': num2,
            },
            errors: {
                400: `Bad Request`,
                422: `Validation Error`,
                500: `Internal Server Error`,
            },
        });
    }
}
