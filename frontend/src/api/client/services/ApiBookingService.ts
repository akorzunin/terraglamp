/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BookingForm } from '../models/BookingForm';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ApiBookingService {

  /**
   * Booking
   * Create booking order
   * @param requestBody 
   * @returns any Successful Response
   * @throws ApiError
   */
  public static bookingApiBookingPost(
requestBody: BookingForm,
): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/booking/',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Mark Done
   * Mark booking as done
   * @returns any Successful Response
   * @throws ApiError
   */
  public static markDoneApiBookingMarkDonePatch(): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/api/booking/mark-done',
    });
  }

  /**
   * Cancel
   * Cancel booking
   * @returns any Successful Response
   * @throws ApiError
   */
  public static cancelApiBookingCancelDelete(): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/api/booking/cancel',
    });
  }

  /**
   * Booking List
   * Get all active bookings
   * @returns any Successful Response
   * @throws ApiError
   */
  public static bookingListApiBookingListGet(): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/booking/list',
    });
  }

  /**
   * Booking List Done
   * Get all done bookings
   * @returns any Successful Response
   * @throws ApiError
   */
  public static bookingListDoneApiBookingListDoneGet(): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/booking/list/done',
    });
  }

}
