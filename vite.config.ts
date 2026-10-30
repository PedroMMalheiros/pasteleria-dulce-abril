import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', 'VITE_');
  const configuredPath = env.VITE_BASE_PATH ?? '/pasteleria-dulce-abril/';
  const path = configuredPath.replace(/^\/+|\/+$/g, '');

  return {
    plugins: [react()],
    base: path ? `/${path}/` : '/',
  };
});
