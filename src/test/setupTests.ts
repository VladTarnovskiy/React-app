import { afterEach, expect, vi } from 'vitest';

import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import * as matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);
vi.mock('next/router', () => vi.importActual('next-router-mock'));

afterEach(() => {
  cleanup();
});
