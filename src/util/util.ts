import { ErrorResponse } from '@remix-run/router';
import DOMPurify from 'dompurify';
import { isRouteErrorResponse } from 'react-router-dom';

export function extractErrorMessage(error: unknown): string {
  switch (true) {
    case isRouteErrorResponse(error):
      return `${(error as ErrorResponse).status} ${
        (error as ErrorResponse).statusText
      }`;
    case error instanceof Error:
      return (error as Error).message;
    case typeof error === 'string':
      return error as string;
    default:
      console.error(error);
      return 'Unknown error';
  }
}

export const sanitizeHtml = (htmlContent: string) => {
  const sanitizedHtml = DOMPurify.sanitize(htmlContent);
  return sanitizedHtml;
};

export const convertTimestampToDateTime = (date: string) => {
  console.log({ date })
  const dateObj = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    dateStyle: 'long',
    timeStyle: 'short',
  };
  return new Intl.DateTimeFormat('en-ca', options).format(dateObj);
};
