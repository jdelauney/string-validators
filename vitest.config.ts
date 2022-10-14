import type { UserConfig } from 'vitest/config';
import { defineConfig } from 'vitest/config';

const test = {
  globals: true,
  environment: 'node',
  threads: false,
  watch: false,
  reporter: 'verbose',
} as UserConfig['test'];

export default defineConfig({
  test,
});
