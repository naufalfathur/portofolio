import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          "body": {
            "background-color": "#F2F2F2",
          },
        }
      },
      // {
      //   dark: {
      //     ...require("daisyui/src/theming/themes")["dark"],
      //     "body": {
      //       "background-color": "#1d232a",
      //     },
      //   }
      // }
    ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
  },
};
export default config;
