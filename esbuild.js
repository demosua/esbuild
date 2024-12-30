const esbuild = require("esbuild");
const postCssPlugin = require("esbuild-postcss");

esbuild
  .build({
    entryPoints: [
      "./src/background.ts",
      "./src/options.tsx",
      "./src/content.ts",
      "./src/popup.tsx",
      "./src/injected.ts"
    ],
    bundle: true,
    minify: true,
    sourcemap: process.env.NODE_ENV !== "production",
    target: ["chrome58", "firefox57"],
    outdir: "./public/build",
    plugins: [
      postCssPlugin({
        plugins: [require("tailwindcss"), require("autoprefixer")]
      })
    ],
    loader: {
      ".js": "jsx"
    },
    define: {
      "process.env.NODE_ENV": `"${process.env.NODE_ENV}"`
    },
    minify: true,
    sourcemap: false
  })
  .catch(() => process.exit(1));
