import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
      },
      colors: {
        brand: {
          red: "#e63946",
          green: "#2a9d4a",
          yellow: "#f6c648",
        },
      },
      backgroundImage: {
        "tri-gradient":
          "linear-gradient(135deg, #e63946 0%, #f6c648 50%, #2a9d4a 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
