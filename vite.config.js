import path from "path"
import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({mode}) => {
        const env = loadEnv(mode, process.cwd(), '')
        return {
            plugins: [react(), tailwindcss()],
            resolve: {
                alias: {
                    "@": path.resolve(__dirname, "./src"),
                },
            },
            server: {
                host: env.VITE_URL_HOST || '127.0.0.1',
                port: 3000, // 👈 set your desired port here
            },
        }
    }
)