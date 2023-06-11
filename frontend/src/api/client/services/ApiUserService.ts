/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ApiUserService {

    /**
     * Get User Bookings
     * Get all bookings for a user
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getUserBookingsApiUserBookingsGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user/bookings',
        });
    }

}
