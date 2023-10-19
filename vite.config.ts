import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/23-08-JavaScriptProject-Team3/",
    plugins: [react()],
});
