// tsconfig.ts

export const tsConfig = {
  compilerOptions: {
    target: 'es6',
    module: 'commonjs',
    lib: ['es6'],
    strict: true,
    esModuleInterop: true,
    outDir: 'dist',
    rootDir: 'src',
  },
  include: ['src/**/*.ts'],
  exclude: ['node_modules'],
};
