import { Volume1 } from "lucide-react";

export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api` || "";
export const TIME_OUT = 10000;

export const STATUS_CODE = {
  // SUCCESS
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  // ERROR
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
};
