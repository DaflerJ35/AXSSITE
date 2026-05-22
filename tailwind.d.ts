import type { Config } from "tailwindcss";

declare module "tailwindcss" {
  interface Theme {
    extend: {
      colors: {
        obsidian: string;
        "obsidian-light": string;
        champagne: string;
        "champagne-light": string;
        "intel-cyan": string;
        "glass-text": string;
        "glass-muted": string;
        "glass-border": string;
        "glass-bg": string;
      };
    };
  }
}
