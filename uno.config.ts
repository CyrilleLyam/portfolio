import { defineConfig, presetUno, presetWebFonts, presetIcons} from "unocss";
import { icons as lucide } from "@iconify-json/lucide";

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      collections: {
        lucide,
      },
      scale: 1.1,
      extraProperties: {
        display: "inline-block",
      },
    }),
    presetWebFonts({
      provider: "google",
      collections: {
        lucide,
      },
      scale: 1.1,
      extraProperties: {
        display: "inline-block",
      },
    }),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: "Inter:400,500,600,700",
        mono: "JetBrains Mono:400,500,700",
      },
    }),
  ],
  theme: {
    colors: {
      bg: "hsl(var(--bg))",
      fg: "hsl(var(--fg))",
      muted: "hsl(var(--muted))",
      border: "hsl(var(--border))",
    },
  },
});
