import { beforeAll, afterEach, expect, afterAll } from 'vitest';
import { server } from './mocks/mockServer';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import * as matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

afterEach(() => {
  cleanup();
});

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
