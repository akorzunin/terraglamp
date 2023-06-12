import { ApiError, BookingForm, HTTPValidationError } from "./client";
import { ApiBookingService } from "./client/services/ApiBookingService";

interface ApiResponse {
  success: boolean;
  message: string | string[];
}

export const createBooking = async (req: BookingForm): Promise<ApiResponse> => {
  try {
    const res = await ApiBookingService.bookingApiBookingPost(req);
    console.log(res);
    return { success: true, message: res };
  } catch (err: unknown) {
    if (err instanceof ApiError) {
      if (err.status == 422) {
        return { success: false, message: parseValidationError(err.body) };
      }
      if (err.status == 409) {
        // Conflict
        return {
          success: false,
          message: ["Нет доступных палаток на этот период"],
        };
      }
      console.error(err);
    }
    throw err;
  }
};

const parseValidationError = (error: HTTPValidationError): string[] => {
  if (!error.detail) {
    return ["Ошибка валидации"];
  }
  return error.detail.map((x) => {
    return `${x.loc.join(".")}: ${x.msg}`;
  });
};
