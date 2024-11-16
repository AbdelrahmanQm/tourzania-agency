import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "0px",
      xmd: "480px",
      md: "768px",
      lg: "1150px",
      xl: "1440px",
    },
    extend: {
      boxShadow: {
        dashboard: "0 0.25rem 0.875rem 0 rgba(38, 43, 67, 0.16)",
      },
      colors: {
        beige: "#f1dbb7",
        yellow: "#faab36",
        orange: "#f78104",
        red: "#fd5901",
        lightestgreen: "#4bc7c9",
        lightgreen: "#249ea0",
        green: "#008083",
        darkgreen: "#005f60",
        gray: "#555",
        lightergray: "#666",
        grayLine: "#e3e3e3",
        darkgray: "#333",
        white: "#ffffff",
        lightgray: "#d3dce6",
        graybg: "#f6f6f6",
        section: "#666",
        solidgreen: "#3aba16",
        solidred: "#ba1629",
        solidblue: "#164aba",
        background: "var(--background)",
        foreground: "var(--foreground)",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  /* plugins: [require("tailwindcss-animate")], */
} satisfies Config;
