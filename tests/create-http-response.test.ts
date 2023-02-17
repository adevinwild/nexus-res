import { createHttpResponse, HttpResponse } from '../src/core/HttpResponse';

describe('createHttpResponse', () => {
  it('should return an instance of HttpResponse', () => {
    const response = createHttpResponse({
      statusCode: 200,
      message: 'Ok',
    });
    expect(response).toBeInstanceOf(HttpResponse);
  });

  it('should set status code to the provided code', () => {
    const response = createHttpResponse({
      statusCode: 404,
      message: '',
    });
    expect(response.statusCode).toBe(404);
  });

  it('should set metadata if provided', () => {
    const metadata = { message: 'Hello, world!' };
    const response = createHttpResponse({
      statusCode: 200,
      message: 'Ok',
      metadata,
    });
    expect(response.metadata).toEqual(metadata);
  });

  it('should set requestId if provided', () => {
    const response = createHttpResponse({
      statusCode: 200,
      message: 'Ok',
      requestId: '1234567890',
    });
    expect(response.requestId).toEqual('1234567890');
  });

  it('should set cause if provided', () => {
    const response = createHttpResponse({
      statusCode: 200,
      message: 'Ok',
      cause: 'Something went wrong.',
    });
    expect(response.cause).toEqual('Something went wrong.');
  });

  it('should set reference if provided', () => {
    const response = createHttpResponse({
      statusCode: 200,
      message: 'Ok',
      reference: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200',
    });
    expect(response.reference).toEqual(
      'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200'
    );
  });
});
