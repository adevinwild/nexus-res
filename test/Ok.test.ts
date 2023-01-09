//@ts-ignore
import * as fs from 'fs';

//@ts-ignore
import ConfigFileFetcher from '../src/core/ConfigFileFetcher';
import { Ok } from '../src';
import {
  ConfigFile,
  ExpressRes,
  FastifyRes,
  HapiRes,
  HttpRes,
  KoaRes,
} from '../src/core/interface';

jest.mock('../src/core/ConfigFileFetcher'); // Mock the ConfigFileFetcher class

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

  it('should accept a generic type', () => {
    const ok = new Ok<string>();
    expect(ok).toBeTruthy();
  });

  it('should return the correct type for metadata when a generic type is provided', () => {
    const ok = new Ok<{ foo: string }>({ metadata: { foo: 'bar' } });
    expect(ok.metadata).toEqual({ foo: 'bar' });
  });

  describe('send', () => {
    it('should send a 200 response with the correct body for HTTP', async () => {
      const ok = new Ok();

      // Set the serverType in the config to 'http'
      (ConfigFileFetcher as jest.Mock).mockImplementation(() => ({
        fetchConfig: () =>
          Promise.resolve({ serverType: 'http' } as ConfigFile),
      }));

      const res: HttpRes = {
        writeHead: jest.fn().mockReturnThis(),
        end: jest.fn().mockReturnThis(),
      };

      await ok.send(res);

      expect(res.writeHead).toHaveBeenCalledWith(200, {
        'Content-Type': 'application/json',
      });
      expect(res.end).toHaveBeenCalledWith(JSON.stringify(ok));
    });

    it('should send a 200 response with the correct body for Express', async () => {
      const ok = new Ok();

      // Set the serverType in the config to 'express'
      (ConfigFileFetcher as jest.Mock).mockImplementation(() => ({
        fetchConfig: () =>
          Promise.resolve({ serverType: 'express' } as ConfigFile),
      }));

      const res: ExpressRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      };

      await ok.send(res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(ok);
    });

    it('should send a 200 response with the correct body for Fastify', async () => {
      const ok = new Ok();
      // Set the serverType in the config to 'fastify'
      (ConfigFileFetcher as jest.Mock).mockImplementation(() => ({
        fetchConfig: () =>
          Promise.resolve({ serverType: 'fastify' } as ConfigFile),
      }));

      const res: FastifyRes = {
        code: jest.fn().mockReturnThis(),
        send: jest.fn().mockReturnThis(),
      };

      await ok.send(res);
      expect(res.code).toHaveBeenCalledWith(200);
      expect(res.code(ok.statusCode).send).toHaveBeenCalledWith(ok);
    });

    it('should send a 200 response with the correct body for Koa', async () => {
      const ok = new Ok();
      // Set the serverType in the config to 'koa'
      (ConfigFileFetcher as jest.Mock).mockImplementation(() => ({
        fetchConfig: () => Promise.resolve({ serverType: 'koa' } as ConfigFile),
      }));

      const res: KoaRes = {
        status: ok.statusCode,
        body: jest.fn().mockReturnThis(),
      };

      await ok.send(res);
      expect(res.status).toEqual(200);
      expect(res.body).toEqual(ok);
    });

    it('should send a 200 response with the correct body for Hapi', async () => {
      const ok = new Ok();
      // Set the serverType in the config to 'hapi'
      (ConfigFileFetcher as jest.Mock).mockImplementation(() => ({
        fetchConfig: () =>
          Promise.resolve({ serverType: 'hapi' } as ConfigFile),
      }));
      const res: HapiRes = {
        response: jest.fn().mockReturnThis(),
        code: jest.fn().mockReturnThis(),
      };

      await ok.send(res);
      expect(res.response).toHaveBeenCalledWith(ok);
      expect(res.code).toHaveBeenCalledWith(200);
    });
  });
});
