import { Ok } from '../src';

describe('Ok', () => {
  it('should return a 200 response', () => {
    const response = new Ok();
    expect(response.statusCode).toBe(200);
    expect(response.message).toBe('OK');
  });

  it('should return a 200 response with a cause if it is provided', () => {
    const response = new Ok({ cause: 'Everything is fine.' });
    expect(response.statusCode).toBe(200);
    expect(response.message).toBe('OK');
    expect(response.cause).toBe('Everything is fine.');
  });

  it("should return a 200 response with metadata if it's provided", () => {
    const response = new Ok({ metadata: { foo: 'bar' } });
    expect(response.statusCode).toBe(200);
    expect(response.message).toBe('OK');
    expect(response.metadata).toEqual({ foo: 'bar' });
  });

  it('should return a 200 response with a reference if it is provided', () => {
    const response = new Ok({ reference: 'https://example.com/docs/ok' });
    expect(response.statusCode).toBe(200);
    expect(response.message).toBe('OK');
    expect(response.reference).toBe('https://example.com/docs/ok');
  });

  it('should return a 200 response with a requestId if it is provided', () => {
    const response = new Ok({ requestId: '#ref-123' });
    expect(response.statusCode).toBe(200);
    expect(response.message).toBe('OK');
    expect(response.requestId).toBe('#ref-123');
  });

  it('should correctly serialize to a JSON object', () => {
    const ok = new Ok({
      cause: 'Everything is fine.',
      metadata: { foo: 'bar' },
      reference: 'https://example.com/docs/ok',
      requestId: '#ref-123',
    });

    const expectedJSON = {
      statusCode: 200,
      message: 'OK',
      cause: 'Everything is fine.',
      metadata: {
        foo: 'bar',
      },
      reference: 'https://example.com/docs/ok',
      requestId: '#ref-123',
    };

    expect(ok).toEqual(expectedJSON);
  });

  it('should correctly stringify to a JSON string', () => {
    const ok = new Ok().toString();
    const expectedJSON = '{"statusCode":200,"message":"OK"}';
    expect(ok).toEqual(expectedJSON);
  });
});
