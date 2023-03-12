/**
 * create http response error object
 */
export class HTTPResponseErrorObject extends Error {
  public readonly status: number;
  public readonly statusMessage: string;
  public readonly errorObject: any | undefined;

  constructor(status: number, statusMessage: string, errorObject: any | undefined) {
    super(`Http Response Error: ${status} ${statusMessage}`);
    this.status = status;
    this.statusMessage = statusMessage;
    this.errorObject = errorObject;
  }
}
