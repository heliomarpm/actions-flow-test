import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['tests/**/*.test.ts'],
    coverage: {
      
      reporter: ["text", "text-summary", "json-summary"],
      reportsDirectory: 'coverage'
    }
  }
})
