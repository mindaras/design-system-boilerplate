import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import svgr from "vite-plugin-svgr";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import { glob } from "glob";
import { fileURLToPath } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    libInjectCss(),
    dts({
      insertTypesEntry: true,
      tsconfigPath: "tsconfig.build.json",
    }),
  ],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "./lib/assets"),
      "@common": path.resolve(__dirname, "./lib/common"),
      "@components": path.resolve(__dirname, "./lib/components"),
      "@styles": path.resolve(__dirname, "./lib/common/styles/common.scss"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "lib/index.ts"),
      name: "fi-ds-experiment",
      formats: ["es"],
      fileName: "index.js",
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime", "react-dom"],
      input: {
        ...Object.fromEntries(
          glob.sync("lib/**/*.{ts,tsx}").map((file) => [
            // The name of the entry point
            // lib/nested/foo.ts becomes nested/foo
            path.relative(
              "lib",
              file.slice(0, file.length - path.extname(file).length)
            ),
            // The absolute path to the entry file
            // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
            fileURLToPath(new URL(file, import.meta.url)),
          ])
        ),
        ...Object.fromEntries(
          glob.sync("lib/tokens/**/*.css").map(file => {
            return [
              file,
              path.resolve(
                __dirname,
                fileURLToPath(new URL(file, import.meta.url))
              )
            ]
          })
        )
      }
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
        inlineDynamicImports: false,
      },
    },
    copyPublicDir: false,
  },
});
