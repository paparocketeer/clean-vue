import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, loadEnv, PluginOption } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => {
  const plugins: PluginOption[] = [react(), tsconfigPaths(), svgr()];

  if (process.env.ANALYZE)
    plugins.push(visualizer({ gzipSize: true, open: true }) as PluginOption);

  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins,
    test: {
      environment: 'jsdom',
      globals: true,
      coverage: {
        reporter: ['text', 'json', 'html'],
      },
    },
    define: {
      ...Object.keys(env).reduce((prev, key) => {
        prev[`process.env.${key}`] = JSON.stringify(env[key]);
        return prev;
      }, {}),
    },
    server: {
      port: 3000,
      proxy: {
        '/main/v1': {
          target: 'https://iiusno-dev.maxima.ru',
          changeOrigin: true,
        },
        '/aa/v1/main': {
          target: 'https://iiusno-dev.maxima.ru',
          changeOrigin: true,
        },
        '/ws': {
          target: 'wss://iiusno-dev.maxima.ru',
          changeOrigin: true,
        },
      },
    },
  };
});
