import { ErrorResponse } from "@remix-run/router";
import { isRouteErrorResponse } from "react-router-dom";

export function extractErrorMessage(error: unknown): string {
  switch (true) {
    case isRouteErrorResponse(error):
      return `${(error as ErrorResponse).status} ${(error as ErrorResponse).statusText}`;
    case error instanceof Error:
      return (error as Error).message;
    case typeof error === 'string':
      return error as string;
    default:
      console.error(error);
      return 'Unknown error';
  }
}
