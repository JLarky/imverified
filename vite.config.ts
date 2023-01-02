import solid from "solid-start/vite";
import dotenv from "dotenv";
import { defineConfig } from "vite";

export default defineConfig(() => {
  dotenv.config();
  return {
    build: {
      sourcemap: true,
    },
    plugins: [
      solid({
        babel: {
          plugins: [
            [
              "@locator/babel-jsx/dist",
              {
                env: "development",
              },
            ],
          ],
        },
        islands: true,
        islandsRouter: true,
      }),
    ],
  };
});
