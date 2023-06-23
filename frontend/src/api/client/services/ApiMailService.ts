/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserEmail } from "../models/UserEmail";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class ApiMailService {
  /**
   * Send Mail
   * Send mail to user
   * @param requestBody
   * @returns any Successful Response
   * @throws ApiError
   */
  public static sendMailApiMailSendMailPost(
    requestBody: UserEmail
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/mail/send_mail",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`,
      },
    });
  }
}
