// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
  colors: {
    bgDark: "#0b0c10",
    bgDarker: "#08090f",
    neonPurple: "#b15eff",
    neonCyan: "#00e5ff",
    neonPink: "#ff3eb5",
    highlight: "#9a8fff",
    textPrimary: "#f5f7fa",
    textSecondary: "#9ca3af",
  },
  backgroundImage: {
    "gradient-neon": "linear-gradient(135deg, #b15eff, #00e5ff)",
  },
}

  },
  plugins: [],
};
