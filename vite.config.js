import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
const HOST = '0.0.0.0';
const PORT = 8000;

const { APP_NAME } = process.env;

const ROOT = APP_NAME || 'app-juan';

// https://vitejs.dev/config/
export default defineConfig({
  root: `src/${ROOT}`,
  build: {
    // outDir: `../../dist/${ROOT}`
    outDir: `../../dist`
  },
  plugins: [react()],
  server: {
    host: HOST,
    port: PORT
  }
})
