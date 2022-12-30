import { Ok } from '../src';

describe('Ok', () => {
  it('should correctly serialize to a JSON object', () => {
    const ok = new Ok(
      'Everything is fine.',
      {
        foo: 'bar',
      },
      'https://example.com/docs/ok',
      '#ref-123'
    );
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

  it('should return a 200 response', () => {
    const response = new Ok();

    expect(response.statusCode).toBe(200);
    expect(response.message).toBe('OK');
  });

  it('should return a 200 response with a cause if it is provided', () => {
    const response = new Ok('Everything is fine.');
    expect(response.statusCode).toBe(200);
    expect(response.message).toBe('OK');
    expect(response.cause).toBe('Everything is fine.');
  });

  it("should return a 200 response with metadata if it's provided", () => {
    const response = new Ok('Everything is fine.', {
      foo: 'bar',
    });
    expect(response.statusCode).toBe(200);
    expect(response.message).toBe('OK');
    expect(response.cause).toBe('Everything is fine.');
    expect(response.metadata).toEqual({ foo: 'bar' });
  });

  it('should return a 200 response with a reference if it is provided', () => {
    const response = new Ok(
      'Everything is fine.',
      undefined,
      'https://example.com/docs/ok'
    );
    expect(response.statusCode).toBe(200);
    expect(response.message).toBe('OK');
    expect(response.cause).toBe('Everything is fine.');
    expect(response.reference).toBe('https://example.com/docs/ok');
  });

  it('should return a 200 response with a requestId if it is provided', () => {
    const response = new Ok(
      'Everything is fine.',
      undefined,
      undefined,
      '#ref-123'
    );
    expect(response.statusCode).toBe(200);
    expect(response.message).toBe('OK');
    expect(response.cause).toBe('Everything is fine.');
    expect(response.requestId).toBe('#ref-123');
  });
});
