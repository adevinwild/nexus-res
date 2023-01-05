import { Ok } from '../src';
import * as Utils from '../src/core/utils';

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

  describe('send', () => {
    it('should send a 200 response with the correct body for HTTP', () => {
      jest.spyOn(Utils, 'readConfigFile').mockImplementationOnce(() => ({
        serverType: 'http',
      }));
      const ok = new Ok();
      const res = {
        writeHead: jest.fn().mockReturnThis(),
        end: jest.fn().mockReturnThis(),
      };

      ok.send(res);

      expect(res.writeHead).toHaveBeenCalledWith(200, {
        'Content-Type': 'application/json',
      });
      expect(res.end).toHaveBeenCalledWith(JSON.stringify(ok));
    });

    it('should send a 200 response with the correct body for Express', () => {
      jest.spyOn(Utils, 'readConfigFile').mockImplementationOnce(() => ({
        serverType: 'express',
      }));
      const ok = new Ok();
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      };
      ok.send(res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(ok);
    });

    it('should send a 200 response with the correct body for Fastify', () => {
      jest.spyOn(Utils, 'readConfigFile').mockImplementationOnce(() => ({
        serverType: 'fastify',
      }));
      const ok = new Ok();
      const res = {
        code: jest.fn().mockReturnThis(),
        send: jest.fn().mockReturnThis(),
      };

      ok.send(res);
      expect(res.code).toHaveBeenCalledWith(200);
      expect(res.code().send).toHaveBeenCalledWith(ok);
    });

    it('should send a 200 response with the correct body for Koa', () => {
      jest.spyOn(Utils, 'readConfigFile').mockImplementationOnce(() => ({
        serverType: 'koa',
      }));
      const ok = new Ok();
      const res = {
        status: jest.fn().mockReturnThis(),
        body: jest.fn().mockReturnThis(),
      };

      ok.send(res);
      expect(res.status).toEqual(200);
      expect(res.body).toEqual(ok);
    });

    it('should send a 200 response with the correct body for Hapi', () => {
      jest.spyOn(Utils, 'readConfigFile').mockImplementationOnce(() => ({
        serverType: 'hapi',
      }));
      const ok = new Ok();
      const res = {
        response: jest.fn().mockReturnThis(),
        code: jest.fn().mockReturnThis(),
      };

      ok.send(res);
      expect(res.response).toHaveBeenCalledWith(ok);
      expect(res.code).toHaveBeenCalledWith(200);
    });

    it('should throw an error if the server type is not supported', () => {
      const ok = new Ok();
      jest.spyOn(Utils, 'readConfigFile').mockImplementationOnce(() => ({
        serverType: 'unsupported' as any,
      }));

      expect(() => ok.send({})).toThrowError(
        '⛔️ NexusRes | Server type "unsupported" not supported.'
      );
    });
  });
});
