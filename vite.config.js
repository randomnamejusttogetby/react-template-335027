import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  base: "/your-repo-name/", // Bus automatiškai pakeista forkinant
});