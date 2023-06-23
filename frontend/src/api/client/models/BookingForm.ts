/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type BookingForm = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  tent_type: BookingForm.tent_type;
  check_in_date?: string;
  check_out_date?: string;
  adults: number;
  children: number;
  total_members: number;
  comment?: string;
};

export namespace BookingForm {
  export enum tent_type {
    PRISMA = "prisma",
    SHATER = "shater",
    SAFARI_TENT = "safariTent",
  }
}
