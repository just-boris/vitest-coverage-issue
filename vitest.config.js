import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      enabled: true,
      provider: process.env.COVERAGE_PROVIDER,
      reportsDirectory: `coverage-${process.env.COVERAGE_PROVIDER}`,
      include: ["lib/**"],
    },
  },
});
