export class ResponseData<D> {
  statusCode: number;
  data: D | D[];
  message: string;
  constructor(statusCode: number, data: D | D[], message: string) {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
  }
}
